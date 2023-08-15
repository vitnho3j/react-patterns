'use client'

import { useState, useEffect } from "react";

export const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState('')
    const [name, setName] = useState('');
    const [age, setAge] = useState<string | number | readonly string[] | undefined>(undefined)
    const[hairColor, setHairColor] = useState('')

    useEffect(() => {
        if (name.length < 2){
            setNameInputError('Name must be two or more characteres')
        } else {
            setNameInputError('')
        }
    }, [name])

    return (
        <div>
            {nameInputError && (<p className="text-white">{nameInputError}</p>)}
            <form className="text-black flex gap-4">
                <input 
                name="name" 
                type="text" 
                placeholder="Name" 
                value={name}
                onChange={e => setName(e.target.value)} />

                <input 
                name="age" 
                type="number" 
                placeholder="Age" 
                value={age}
                onChange={e => setAge(Number(e.target.value))} />

                <input 
                name="haiColor" 
                type="text" 
                placeholder="Hair Color" 
                value={hairColor}
                onChange={e => setHairColor(e.target.value)} />

                <button className="bg-white text-black">Submit</button>
                
            </form>
        </div>
    )
}