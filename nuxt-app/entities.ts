export interface Lender {
  _id?: any;
  name: string;
  address: string;
  email: string;
  telephone: string;
  department: string;
  date: Date;
}

export interface Borrower {
  _id?: any;
  name: string;
  address: string;
  email: string;
  telephone: string;
  date: Date;
}
export interface Form {
  _id?: any;
  telephone: number;
  name: string;
  projectBrief: string;
}
