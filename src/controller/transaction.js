export class TransactionController {
  serv

  constructor(st) {
    this.serv = st
  }

  userBoughtMoreThanOne = async (req, res) => {
    try {
      const filter = {
        page: req.query.page || 1,
        size: req.query.size || 10,
      }
      const resData = await this.serv.userBoughtMoreThanOne(filter)
      return res.json({message: "TRANSACTION_FETCHED", data: resData[0], count: resData[1]})
    } catch (err) {
      return res.json({message: err[0] || err.message, data: null}).status(err[1] || 500)
    }
  }
}