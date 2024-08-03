export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  role: "Admin" | "User" | "Author";
  createdAt: Date;
  updatedAt: Date;
}
