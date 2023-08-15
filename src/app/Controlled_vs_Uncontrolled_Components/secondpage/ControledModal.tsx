'use client'

import { ReactNode, MouseEvent, useState } from "react"; // Importe MouseEvent do 'react'

type ModalProps = {
  onClick: () => void;
  children: ReactNode;
};

const ModalBackground = ({ onClick, children }: ModalProps) => {
  const handleClick = (e: MouseEvent) => {
    onClick(); // Chamando o onClick passado como prop
  };

  return (
    <div
      className="fixed z-1 left-0 top-0 w-full h-2/6 bg-slate-200"
      onClick={handleClick} // Usando o handleClick que recebe o evento de clique
    >
      {children}
    </div>
  );
};

const ModalBody = ({children }: ModalProps) => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation(); // Chamando o onClick passado como prop
  };

  return (
    <div className="bg-red-200 m-auto p-20 w-3/6" onClick={handleClick}>
      {children}
    </div>
  );
};

interface ControlledModalProps {
    children : ReactNode
    shouldShow: boolean
    onRequestClose: () => void
}



export const ControlledModal = ({ shouldShow, onRequestClose, children}: ControlledModalProps) => {
  

  return (
    <>
      {shouldShow ? (
        <ModalBackground onClick={onRequestClose}>
          <ModalBody onClick={() => shouldShow}>
            <button onClick={onRequestClose}>Hide Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>
      ): null};
    </>
  );
};
