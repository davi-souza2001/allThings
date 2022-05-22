import { Context, createContext, Dispatch, SetStateAction, useState } from "react";

interface ModalContext {
    modal: string
    setModal?: Dispatch<SetStateAction<"CreatePage" | "CreateNote">>
    children?: React.ReactNode
}

const ModalContext = createContext<ModalContext>({ modal: '' });

export function ModalProvider(props: any) {
    const [modal, setModal] = useState<'CreatePage' | 'CreateNote'>('CreateNote');

    return (
        <ModalContext.Provider value={{ modal, setModal }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContext;