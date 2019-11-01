import { TodosState } from "./todos/models"
import { IAuthState } from "./auth/models"
import { IOpenChatsState } from "./openChats/models"

export interface IStateAll {
  todos: TodosState
  auth: IAuthState
  openChats: IOpenChatsState
}
