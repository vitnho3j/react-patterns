export interface useUserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address : {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat:string;
        Ing:string;
      }
    }
    phone: string;
    website: string;
    company: {
      name: string;
      catchPrase: string;
      bs: string;
    }
  }
  