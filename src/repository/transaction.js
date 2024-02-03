import {Op} from "sequelize"
import Transaction from "../model/transaction.js"


export class TransactionRepository {
  db

  constructor(sequelize) {
    this.db = sequelize
  }

  userBoughtMoreThanOne = async (filter) => {
    try {
      const offset = filter.page && filter.size ? (filter.page - 1) * filter.size : 0
      const limit = filter.size || 10
      const [res, _] = await this.db.query(`
        SELECT * FROM users WHERE id IN (
          SELECT user_id
            FROM transactions t
            GROUP BY user_id
            HAVING COUNT(user_id) > 1
            LIMIT ${limit} OFFSET ${offset}
        )
      `)
      const [count] = await this.db.query(`
        SELECT COUNT(*) FROM users WHERE id IN (
          SELECT user_id
            FROM transactions t
            GROUP BY user_id
            HAVING COUNT(user_id) > 1
        )
      `)
      return [res, count[0]]
    } catch (err) {
      throw [err.message, 400]
    }
  }
}