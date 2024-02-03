import  {Router} from "express"


export default function (controller) {
  const route = Router()
  route.get('/', controller.findByCondition)

  // search multiple exact names in query param, separated by 5 semicolon (;;;;;)
  // case sensitive
  route.get('/find-names', controller.findByNames)
  return route
}