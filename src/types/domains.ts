import * as firebase from "firebase/app";

export namespace Domains {
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
}
