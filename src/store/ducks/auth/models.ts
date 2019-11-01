import * as firebase from "firebase/app";

export type IUser = Pick<firebase.User,
  | "displayName"
  | "email"
  | "emailVerified"
  | "isAnonymous"
  | "phoneNumber"
  | "photoURL"
  | "refreshToken"
  | "uid"
>

export interface IAuthState {
  auth: IUser | null;
}

export const initAuth: IAuthState = {
  auth: null,
}
