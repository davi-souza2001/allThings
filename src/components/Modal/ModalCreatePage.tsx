import { useState } from 'react'
import { XCircle, Pen, Bag } from 'phosphor-react'
import { CircularProgress } from '@chakra-ui/react'
import { toast, ToastContainer } from 'react-toastify'

import UseModal from '../../services/hooks/useModal'
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

	const [namePage, setNamePage] = useState('')
	const [levelPage, setLevelPage] = useState('low')

	const [titleNote, setTitleNote] = useState('')
	const [content, setContent] = useState('')
	const [typeNote, setTypeNote] = useState<'note' | 'image'>('note')

	function notifySucess(msg: string) {
		toast.dark(msg, {
			position: 'top-right',
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
			position: 'top-right',
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
				idUser: user?.id,
				phase: 'processing'
			}

			await Client.post('/page/create', pageData).then((res) => {
				setNamePage('')
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

		const data = {
			idPage: props.idPage,
			content,
			title: titleNote,
			type: typeNote
		}

		if (props.idPage) {
			setLoading(true)
			const data = {
				idPage: props.idPage,
				content,
				title: titleNote,
				type: typeNote
			}

			await Client.post('/note/create', data).then((res) => {
				setContent('')
				setTitleNote('')
				props.close()
				setChangeData(!changeData)
				setLoading(false)
				notifySucess('Nota criada com sucesso!')
			})
		}
	}

	return (
		<div>
			{modal === 'CreatePage' && (
				<div className={`bg-[rgba(0,0,0,.5)] w-screen h-screen flex items-center justify-center absolute inset-0 ${!props.open && 'hidden'}`}>
					<ToastContainer />
					<div className='bg-[#242424] flex items-center justify-start flex-col w-80 h-2/5 sm:w-2/4 md:w-3/6 md:h-2/5 lg:w-2/5 lg:h-4/6 rounded-lg transition-all xl:w-1/3'>
						<div onClick={props.close} className='w-full h-7 flex items-center justify-end'>
							<XCircle className='text-2xl w-7 h-7 bg-red-500 rounded-md mr-3 mt-3 cursor-pointer' />
						</div>
						<div className='w-full h-10 md:h-14 flex items-center justify-center'>
							<span className='font-semibold text-2xl xl:text-3xl'>Página</span>
						</div>
						<form onSubmit={(e) => createPage(e)}>
							<div className='h-8 w-72 flex items-center justify-around mt-2 bg-[#2b2b2b] rounded-md lg:w-96 lg:h-24 xl:h-16'>
								<Pen className='text-xl' />
								<input
									className='h-8 w-56 bg-[#2f2f2f] border-0 outline-none rounded-md lg:w-80 lg:h-16 xl:h-12'
									placeholder='Add title'
									type='text'
									onChange={(e) => setNamePage(e.target.value)}
								/>
							</div>
							<div className='h-10 w-72 flex items-center justify-around mt-4 bg-[#2b2b2b] rounded-md lg:w-96 lg:h-24 xl:h-16'>
								<Bag className='text-xl' />
								<select onChange={(e) => setLevelPage(e.target.value)} className='h-10 w-56 bg-[#2f2f2f] border-0 outline-none rounded-md lg:w-80 lg:h-16 xl:h-12'>
									<option value='low'>low</option>
									<option value='medium'>medium</option>
									<option value='high'>high</option>
								</select>
							</div>
							<div className='h-10 w-72 flex items-center justify-around mt-10 bg-brand-500 cursor-pointer hover:bg-brand-300 transition-all rounded-md lg:w-full lg:h-12 xl:mt-32'>
								<button
									type='submit'
									className='text-xl font-semibold'
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
					<div className='bg-[#1b1b1b] w-80 h-4/6 flex items-center justify-start flex-col sm:w-2/4 md:w-3/6 lg:w-2/5 lg:h-[500px] rounded-lg transition-all'>
						<ToastContainer />
						<div onClick={props.close} className='w-full h-7 flex items-center justify-end'>
							<XCircle className='text-2xl w-7 h-7 bg-red-500 rounded-lg mr-3 mt-3 cursor-pointer' />
						</div>
						<div className='mt-3 w-full h-10 flex items-center justify-center'>
							<p className='font-semibold text-2xl'>Criar nota</p>
						</div>
						<form onSubmit={(e) => createNote(e)}>
							<div className='h-14 w-72 flex items-center justify-around mt-2 bg-[#2b2b2b] rounded-md xl:w-[500px]'>
								<Pen className='text-xl' />
								<input
									className='h-10 w-56 bg-[#2f2f2f] border-0 outline-none rounded-md xl:h-12 xl:w-[420px]'
									placeholder='Add title'
									type='text'
									onChange={(e) => setTitleNote(e.target.value)}
								/>
							</div>
							<div className='h-36 w-72 flex items-center justify-around mt-2 bg-[#2b2b2b] rounded-md xl:w-[500px]'>
								<Pen className='text-xl' />
								<textarea
									placeholder='Conteúdo da nota'
									onChange={(e) => setContent(e.target.value)}
									className='resize-none bg-[#2f2f2f] h-3/4 w-3/4 border-none outline-none rounded-lg xl:w-[420px]'
								/>
							</div>
							<div className='h-14 w-72 flex items-center justify-around mt-4 bg-[#2b2b2b] rounded-md xl:w-[500px]'>
								<Bag className='text-xl' />
								<select onChange={(e) => setLevelPage(e.target.value)} className='h-10 w-56 bg-[#2f2f2f] border-0 outline-none rounded-md xl:w-[420px]'>
									<option value='note'>Note</option>
									<option value='image'>Image</option>
								</select>
							</div>
							<div className='mt-5 w-full h-16 flex items-center justify-center'>
								<button
									disabled={loading && true}
									className='w-40 h-14 xl:h-14 xl:w-52 bg-brand-500 rounded-lg text-xl font-semibold cursor-pointer lg:mb-20 hover:bg-brand-300 transition-all lg:mt-20 '>
									{loading ? (
										<CircularProgress isIndeterminate color='rgb(130 87 230)' />
									)
										:
										'Criar'}
								</button>
							</div>
						</form>

					</div>
				</div>
			)}
		</div>
	)
}

