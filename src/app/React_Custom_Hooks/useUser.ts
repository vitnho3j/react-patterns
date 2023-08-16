'use client'

import { useEffect, useState } from "react";
import axios from "axios";

interface useUserProps {
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

export const useUser = (userID : number) => {
  const [user, setUser] = useState<useUserProps>()

  useEffect(() => {
    (async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`)
        setUser(response.data)
    })();
  }, [userID]);

  return user;
}