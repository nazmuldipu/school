export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  companyId: string;
  name: string;
  email: string;
  password: string;
  roles: string[];
}
