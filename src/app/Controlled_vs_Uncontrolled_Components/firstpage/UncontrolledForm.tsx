'use client'

import { FormEvent, useRef } from "react";
export const UncontrolledForm = () => {

    const nameInput = useRef<HTMLInputElement | null>(null);
    const ageInput = useRef<HTMLInputElement | null>(null);
    const hairColorInput = useRef<HTMLInputElement | null>(null);


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        console.log(nameInput.current?.value)
        console.log(ageInput.current?.value)
        console.log(hairColorInput.current?.value)
    }

    return (
        <form onSubmit={(event: FormEvent) => handleSubmit(event)} className="text-black flex gap-4">
            <input name="name" type="text" placeholder="Name" ref={nameInput}/>
            <input name="age" type="number" placeholder="Age" ref={ageInput}/>
            <input name="hairColor" type="text" placeholder="Hair Color" ref={hairColorInput}/>
            <button type="submit" className="bg-white text-black">Submit</button>
        </form>
    )
}