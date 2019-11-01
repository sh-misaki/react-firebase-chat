import { Domains } from "types";

export type IUser = Domains.IUser;

export interface IAuthState {
  auth: Domains.IUser | null;
}

export const initAuth: IAuthState = {
  auth: null,
}
