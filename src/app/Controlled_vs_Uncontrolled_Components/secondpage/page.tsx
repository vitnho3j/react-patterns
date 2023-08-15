'use client'

import { useState } from "react"
import { ControlledModal } from "./ControledModal"
export default function Home() {
    const [shouldShowModal, setShouldShowModal] = useState(false);
    return (
        <div className="text-black">
           <ControlledModal
                shouldShow={shouldShowModal}
                onRequestClose={() => {setShouldShowModal(false)}}
            > 
            <h1>Hello!</h1>
            </ControlledModal>
           <button onClick={() => setShouldShowModal(!shouldShowModal)} className="bg-white text-black">
                {shouldShowModal ? <button className="bg-white">Hide Modal</button> : 'Show Modal'}
           </button>
        </div>
    )
}