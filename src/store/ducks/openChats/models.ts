import { Domains } from "types";

interface IChatMember {
  createdAt: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  lastLoginAt: string;
  lastRefreshAt: string;
  localId: string;
  passwordHash: string;
  passwordUpdatedAt: number;
  providerUserInfo: {
    email: string;
    federatedId: string;
    providerId: string;
    rawId: string;
  },
  validSince: string;
  status: "on" | "off";
}

export interface IOpenChatsState {
  title: string;
  members: IChatMember[];
  conversations: Domains.IConversation[];
}

export const initOpenChats: IOpenChatsState = {
  title: "Sample",
  members: [{
    createdAt: "1572443592282",
    displayName: "User A",
    email: "hoge@email.com",
    emailVerified: false,
    lastLoginAt: "1572606565017",
    lastRefreshAt: "2019-11-01T11:09:25.017Z",
    localId: "sHDixzcv0obmtmhhVJSO7LFIzix2",
    passwordHash: "UkVEQUNURUQ=",
    passwordUpdatedAt: 1572443592282,
    providerUserInfo: {
      email: "hoge@email.com",
      federatedId: "hoge@email.com",
      providerId: "password",
      rawId: "hoge@email.com",
    },
    validSince: "1572443592",
    status: "on",
  }, {
    createdAt: "1572443592282",
    displayName: "User B",
    email: "hoge@email.com",
    emailVerified: false,
    lastLoginAt: "1572606565017",
    lastRefreshAt: "2019-11-01T11:09:25.017Z",
    localId: "sHDixzcv0obmtmhhVJSO7LFIzix2",
    passwordHash: "UkVEQUNURUQ=",
    passwordUpdatedAt: 1572443592282,
    providerUserInfo: {
      email: "hoge@email.com",
      federatedId: "hoge@email.com",
      providerId: "password",
      rawId: "hoge@email.com",
    },
    validSince: "1572443592",
    status: "on",
  }],
  conversations: [{
    text: "Hi Good Morning.",
    userId: "",
    userName: "User A",
    userIcon: null,
    ts: "2020-10-04 10:00",
  }, {
    text: "Hi Good Evening.",
    userId: "",
    userName: "User B",
    userIcon: null,
    ts: "2020-10-04 21:00",
  }],
}
