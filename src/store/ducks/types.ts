import { TodosState } from "./todos/models"
import { IAuthState } from "./auth/models"

export interface StateAll {
  todos: TodosState
  auth: IAuthState
}
