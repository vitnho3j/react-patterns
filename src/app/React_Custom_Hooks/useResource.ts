'use client'

import { useEffect, useState } from "react";
import axios from "axios";

export const useResource = <T>(resourceUrl : string) => {
  const [resource, setResource] = useState<T | undefined>()

  useEffect(() => {
    (async () => {
        const response = await axios.get(resourceUrl)
        setResource(response.data)
    })();
  }, [resourceUrl]);

  return resource;
}