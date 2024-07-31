export interface IUser {
  _id: string,
  name: string,
  email: string,
  role: string,
}

export interface ILoginSuccessResponse {
  success: boolean,
  user: IUser,
}