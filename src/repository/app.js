import {Op} from "sequelize"
import App from "../model/app.js"


export class AppRepository {
  db

  constructor(sequelize) {
    this.db = sequelize
  }

  findAndCountByCondition = async (search) => {
    try {
      const offset = search.page && search.size ? (search.page - 1) * search.size : 0
      const limit = search.size || 10
      const filter = []
      if (typeof search.approved === 'boolean') {
        filter.push({approved: search.approved})
      } else if (search.approved === null) {
        filter.push({approved: {[Op.is]: null}})
      }
      if (typeof search.published === 'boolean') {
        filter.push({published: search.published})
      }
      if (search.kind && ['GAME', 'ART', 'PROGRAMMING', 'MUSIC', 'LITERATURE'].includes(search.kind.toUpperCase())) {
        filter.push({kind: search.kind.toUpperCase()})
      }
      if (search.priceTier && search.priceTier >= 1 && search.priceTier <= 10) {
        filter.push({price_tier: search.priceTier})
      }
      const res = await App(this.db).findAndCountAll({
        where: {
          [Op.and]: filter,
        },
        offset,
        limit,
      })
      /* QUERY
       * SELECT *
       *   FROM apps
       *   WHERE deleted_at IS NULL
       *     AND (
       *       The filter objects will go in here
       *     )
       *   LIMIT 10 OFFSET 0;
       */

      return [res.rows, res.count]
    } catch (err) {
      throw [err.message, 400]
    }
  }
}