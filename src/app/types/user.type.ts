/** Add your types here */
export class User {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}

export class UserData {
  data: User[];
  page: number;
  per_page: number;
  support: {
    text: string;
    url: string;
  };
  total: number;
  total_pages: number;
}
