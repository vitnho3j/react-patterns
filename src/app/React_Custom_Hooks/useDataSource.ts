'use client'

import { useState, useEffect } from "react";

export const useDataSource = <T>(getResourceFunc : () => Promise<T>) => {
    const [resource, setResource] = useState<T | undefined>(undefined)

    useEffect(()=> {
        (async () => {
            const result = await getResourceFunc()
            setResource(result)
        }) ();
    }, [getResourceFunc]);

    return resource;
}