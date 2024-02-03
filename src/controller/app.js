export class AppController {
  serv

  constructor(sa) {
    this.serv = sa
  }

  findByCondition = async (req, res) => {
    try {
      const filter = {
        page: req.query.page || 1,
        size: req.query.size || 10,
        kind: req.query.kind,
        published: req.query.published,
        approved: req.query.approved,
        priceTier: req.query.priceTier,
      }
      const resData = await this.serv.findByCondition(filter)
      return res.json({message: "APP_FETCHED", data: resData[0], count: resData[1]})
    } catch (err) {
      return res.json({message: err[0] || err.message, data: null}).status(err[1] || 500)
    }
  }
  findByNames = async (req, res) => {
    try {
      const filter = {
        page: req.query.page || 1,
        size: req.query.size || 10,
        names: req.query.names.split(';;;;;')
      }
      const resData = await this.serv.findByNames(filter)
      return res.json({message: "APP_FETCHED", data: resData[0], count: resData[1]})
    } catch (err) {
      return res.json({message: err[0] || err.message, data: null}).status(err[1] || 500)
    }
  }
}