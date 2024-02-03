import  {Router} from "express"


export default function (controller) {
  const route = Router()

  route.get('/', controller.findByCondition)
  return route
}