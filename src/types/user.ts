export type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export type UsersType = {
  users: UserType[]
}