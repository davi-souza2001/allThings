import { useState } from "react"
import { XCircle, Pen, Bag } from "phosphor-react"
import { CircularProgress } from '@chakra-ui/react'
import { toast, ToastContainer } from "react-toastify"

import UseModal from "../../services/hooks/useModal"
import UseAuth from '../../services/hooks/useAuth'
import Client from '../../data/client'


interface ModalCreatePageProps {
	open: boolean
	close: () => void
	idPage?: string
}

export function ModalCreatePage(props: ModalCreatePageProps) {
	const { modal, changeData, setChangeData } = UseModal()
	const { user } = UseAuth()

	const [loading, setLoading] = useState(false)

	const [namePage, setNamePage] = useState("")
	const [levelPage, setLevelPage] = useState("low")

	const [content, setContent] = useState("")
	const [titleNote, setTitleNote] = useState("")
	const [typeNote, setTypeNote] = useState<"note" | "image">("note")

	function notifySucess(msg: string) {
		toast.dark(msg, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		})
	}

	function notifyError(msg: string) {
		toast.error(msg, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		})
	}

	async function createPage(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (namePage === '') {
			notifyError('Preencha o nome da página!')
			return
		}

		if (user?.id) {
			setLoading(true)
			const pageData = {
				name: namePage,
				levelType: levelPage,
				idUser: user?.id
			}

			await Client.post('/page/create', pageData).then((res) => {
				setNamePage("")
				props.close()
				setChangeData(!changeData)
				setLoading(false)
				notifySucess('Página criada com sucesso!')
			})
		}
	}

	async function createNote(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		if (titleNote === '') {
			notifyError('Preencha o título da nota!')
			return
		}

		if (content === '') {
			notifyError('Preencha o conteúdo da nota!')
			return
		}

		// if (props.idPage) {
		// 	setLoading(true)
		// 	const data = {
		// 		idPage: props.idPage,
		// 		content,
		// 		title: titleNote,
		// 		type: typeNote
		// 	}

		// 	await Client.post('/note/create', data).then((res) => {
		// 		setContent("")
		// 		setTitleNote("")
		// 		props.close()
		// 		setChangeData(!changeData)
		// 		setLoading(false)
		// 		notifySucess('Nota criada com sucesso!')
		// 	})
		// }
	}

	return (
		<div>
			{modal === 'CreatePage' && (
				<div className={`bg-[rgba(0,0,0,.5)] w-screen h-screen flex items-center justify-center absolute inset-0 ${!props.open && 'hidden'}`}>
					<ToastContainer />
					<div className='bg-[#242424] flex items-center justify-start flex-col w-80 sm:w-2/4 md:w-3/6 lg:w-2/5 h-2/5 md:h-2/5 lg:h-3/6 rounded-lg transition-all '>
						<div onClick={props.close} className="w-full h-7 flex items-center justify-end">
							<XCircle className="text-2xl w-7 h-7 bg-red-500 rounded-md mr-3 mt-3 cursor-pointer" />
						</div>
						<div className='w-full h-10 md:h-14 flex items-center justify-center'>
							<span className='font-semibold text-2xl xl:text-3xl'>Página</span>
						</div>
						<form onSubmit={(e) => createPage(e)}>
							<div className='h-8 w-72 flex items-center justify-around mt-2 bg-[#2b2b2b] rounded-md'>
								<Pen className='text-xl' />
								<input
									className='h-8 w-56 bg-[#2f2f2f] border-0 outline-none rounded-md'
									placeholder="Add title"
									type="text"
									onChange={(e) => setNamePage(e.target.value)}
								/>
							</div>
							<div className='h-10 w-72 flex items-center justify-around mt-4 bg-[#2b2b2b] rounded-md'>
								<Bag className='text-xl' />
								<select onChange={(e) => setLevelPage(e.target.value)} className='h-10 w-56 bg-[#2f2f2f] border-0 outline-none rounded-md'>
									<option value='low'>low</option>
									<option value='medium'>medium</option>
									<option value='high'>high</option>
								</select>
							</div>
							<div className='h-10 w-72 flex items-center justify-around mt-10 bg-brand-500 rounded-md'>
								<button
									type="submit"
									className="text-xl font-semibold"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div >
			)}

			{modal === 'CreateNote' && (
				<div className={`bg-[rgba(0,0,0,.5)] w-screen h-screen flex items-center justify-center absolute inset-0 ${!props.open && 'hidden'}`}>
					<div className={`bg-[#393939] flex items-center justify-start flex-col w-screen sm:w-2/4 md:w-3/6 lg:w-2/5 h-4/5 lg:h-96 rounded-lg transition-all`}>
						<ToastContainer />
						<div onClick={props.close} className="w-full h-7 flex items-center justify-end">
							<XCircle className="text-2xl w-7 h-7 bg-red-500 rounded-lg mr-3 mt-3 cursor-pointer" />
						</div>
						<div className='mt-3 w-full h-10 flex items-center justify-center'>
							<p className="font-semibold text-2xl">Criar nota</p>
						</div>
						<div className={`
                mt-5
                w-full h-8
                flex items-center justify-center
            `}>
							<input type="text"
								placeholder="Título da nota"
								onChange={(e) => setTitleNote(e.target.value)}
								className={`
                  md:w-80 lg:w-3/4 xl:h-12
                  rounded-lg
                  outline-none
                  border-none
                bg-[#4f4f4f]
                  transition-all
                border-zinc-600
                focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none
                  `} />
						</div>
						<div className={`
                mt-5
                w-full h-48
                flex items-center justify-center
            `}>
							<textarea
								placeholder="Conteúdo da nota"
								onChange={(e) => setContent(e.target.value)}
								className={`
                resize-none
              bg-[#4f4f4f]
                h-3/4 w-3/4 sm:h-20 xl:h-full
                border-none
                outline-none
                rounded-lg
              `}
							/>
						</div>
						<div className={`
                mt-5
                w-full h-16
                flex items-center justify-center
            `}>
							<select
								onChange={(e) => setTitleNote(e.target.value)}
								className={`
                mb-5
                w-48 md:w-80
                bg-[#4f4f4f]
                border-none
                outline-none
                rounded-lg
                focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none
              `}>
								<option value="note">Nota</option>
								<option value="image">Imagem</option>
							</select>
						</div>
						<div className={`
                mt-5
                w-full h-16
                flex items-center justify-center
            `}>
							<button
								className={`
                w-40 h-14 xl:h-14 xl:w-52
              bg-brand-500
                rounded-lg
                text-xl font-semibold
                cursor-pointer
                lg:mb-10
              hover:bg-brand-300
                transition-all
          `}>
								{loading ? (
									<CircularProgress isIndeterminate color='rgb(130 87 230)' />
								)
									:
									'Criar'}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

