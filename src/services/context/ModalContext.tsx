import { createContext, Dispatch, SetStateAction, useState } from "react"

interface ModalContext {
	modal: string
	setModal: Dispatch<SetStateAction<"CreatePage" | "CreateNote">>
	changeData: boolean
	setChangeData: Dispatch<SetStateAction<boolean>>
	children?: React.ReactNode
}

const ModalContext = createContext<ModalContext>({
	modal: '', setModal: () => { },
	changeData: false,
	setChangeData: () => { }
})

export function ModalProvider(props: any) {
	const [modal, setModal] = useState<'CreatePage' | 'CreateNote'>('CreatePage')
	const [changeData, setChangeData] = useState(false)

	return (
		<ModalContext.Provider value={{ modal, setModal, changeData, setChangeData }}>
			{props.children}
		</ModalContext.Provider>
	)
}

export default ModalContext
