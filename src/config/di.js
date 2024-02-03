import {Router} from "express"
import {AppRepository} from "../repository/app.js"
import {AppService} from "../service/app.js"
import {AppController} from "../controller/app.js"
import appRouter from "../route/app.js"
import transactionRouter from "../route/transaction.js"
import {TransactionController} from "../controller/transaction.js"
import {TransactionService} from "../service/transaction.js"
import {TransactionRepository} from "../repository/transaction.js"


export default function (sequelize) {
  const router = Router()

  // Repository
  const ra = new AppRepository(sequelize)
  const rt = new TransactionRepository(sequelize)

  // Service
  const sa = new AppService(ra)
  const st = new TransactionService(rt)

  // Controller
  const ca = new AppController(sa)
  const ct = new TransactionController(st)

  // Routing
  router.use('/app', appRouter(ca))
  router.use('/transaction', transactionRouter(ct))

  return router
}