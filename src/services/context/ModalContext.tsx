import { Context, createContext, useState } from "react";

interface ModalContext{
    modal: 'CreatePage' | 'CreateNote'
    children?: React.ReactNode
}

const ModalContext = createContext<ModalContext>({modal: 'CreatePage'});

export function ModalProvider(props: ModalContext){
    const [modal, setModal] = useState<'CreatePage' | 'CreateNote'>('CreatePage');

    return (
        <ModalContext.Provider value={{modal}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContext;