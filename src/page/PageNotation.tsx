import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { Trash, Wrench, Pencil } from 'phosphor-react'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Widget } from '../components/Widget'
import { ModalCreatePage } from '../components/Modal/ModalCreatePage'

import UseModal from '../services/hooks/useModal'
import UseAuth from '../services/hooks/useAuth'
import Client from '../data/client'

interface PageNotationProps {
	id: string
	title: string
	content: string
	type: string
	idPage: string
}

interface Page {
	id: string
	name: string
	levelType: string
	idUser: string
}

export function PageNotation() {
	const { pathname } = useLocation()
	const { user } = UseAuth()
	const { setModal, changeData, setChangeData } = UseModal()
	const navigate = useNavigate()
	const idWithOutSlash = pathname.split('/')[1]

	const [openModal, setOpenModal] = useState(false)
	const [notes, setNotes] = useState<PageNotationProps[]>([])
	const [pages, setPages] = useState<Page[]>([])

	async function getNotes() {
		if (user) {
			const data = { idPage: idWithOutSlash }
			await Client.post('/note/get', data).then((res) => {
				setNotes(res.data)
			})
		}
	}

	async function getPages() {
		if (user) {
			const data = { idUser: user.id }
			await Client.post('/page/get', data).then((res) => {
				setPages(res.data)
			})
		}
	}

	async function deleNote(idNote: string) {
		if (user) {
			const data = { id: idNote }
			await Client.post('/note/delete', data).then((res) => {
				setChangeData(!changeData)
			})
		}
	}

	function notify(msg: string) {
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

	async function deletePage(pageId: string) {
		if (user) {
			const data = { id: pageId }
			await Client.post('/page/delete', data).then((res) => {
				navigate('/')
			}).catch(() => notify('Você tem notas não terminadas nessa página!'))
		}
	}

	useEffect(() => {
		setModal('CreateNote')
		if (user?.id) {
			getNotes()
			getPages()
		}
	}, [user, changeData])

	return (
		<>
			<Header />
			<ToastContainer />
			<div className='w-3/4 h-20 flex items-center ml-10'>
				<span className='font-semibold text-4xl flex'>
					{pages?.map((page: Page) => {
						if (page.id === idWithOutSlash) {
							return page.name
						}
					})}
					<Menu>
						<MenuButton className='ml-10'>
							<Pencil/>
						</MenuButton>
						<MenuList className='bg-[#833e3e] p-6 rounded-md'>
							<MenuItem>
								<Trash className='cursor-pointer mb-10' onClick={() => deletePage(idWithOutSlash)} />
							</MenuItem>
							<MenuItem>
								<Trash className='cursor-pointer' onClick={() => deletePage(idWithOutSlash)} />
							</MenuItem>
						</MenuList>
					</Menu>
				</span>
			</div>
			<div className='w-full h-full flex items-center justify-center flex-col'>
				<div className='w-3/4 max-h-[70vh] mb-5 overflow-scroll overflow-x-hidden scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'>
					{notes?.map((note: PageNotationProps) => {
						return (
							<div key={note.id} className='mt-5 p-5 rounded-lg bg-neutral-800 mb-4'>
								<div className='w-full flex items-center justify-between'>
									<p className='text-2xl font-medium mb-4'>{note.title}</p>
									<Menu>
										<MenuButton className='p-3 mr-4 text-xl bg-brand-500 rounded-md text-white hover:bg-brand-300 transition-colors'>
											<Wrench />
										</MenuButton>
										<MenuList className='mt-2 w-28 h-10 flex items-center justify-around flex-col'>
											<div onClick={() => deleNote(note.id)} className='bg-[#B22222] rounded-lg h-full w-full px-4 flex items-center justify-center text-white font-medium cursor-pointer'>
												Deletar
												<Trash className='ml-1' />
											</div>
										</MenuList>
									</Menu>
								</div>
								<p>{note.content}</p>
							</div>
						)
					})}
				</div>
			</div>
			<Widget onClick={() => setOpenModal(!openModal)} />
			<ModalCreatePage
				open={openModal}
				close={() => setOpenModal(!openModal)}
				idPage={idWithOutSlash}
			/>
		</>
	)
}
