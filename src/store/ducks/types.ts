import { TodosState } from "./todos/models"
import { IAuthState } from "./auth/models"

export interface IStateAll {
  todos: TodosState
  auth: IAuthState
}
