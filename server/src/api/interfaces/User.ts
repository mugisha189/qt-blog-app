export interface UserBase {
  name: string;
  email: string;
  password: string;
  role: "Admin" | "User" | "Author";
}

export interface User extends UserBase {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewUser extends Omit<User, "id" | "createdAt" | "updatedAt"> {}
