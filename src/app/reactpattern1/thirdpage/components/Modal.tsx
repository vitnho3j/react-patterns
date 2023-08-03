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

export const Modal = ({ children }: { children: ReactNode }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody onClick={() => setShouldShow(true)}>
            <button onClick={() => setShouldShow(false)}>Hide Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};
