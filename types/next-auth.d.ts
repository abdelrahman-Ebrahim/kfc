import "next-auth";

declare module "next-auth" {
  interface User {
    token?: string; // Add the `token` property to the `User` type
    refreshToken?: string; // Add the `refreshToken` property to the `User` type
  }

  interface Session {
    accessToken?: string; // Add the `accessToken` property to the `Session` type
    refreshToken?: string; // Add the `refreshToken` property to the `Session` type
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string; // Add the `accessToken` property to the `JWT` type
    refreshToken?: string; // Add the `refreshToken` property to the `JWT` type
  }
}