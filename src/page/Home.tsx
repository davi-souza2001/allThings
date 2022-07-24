import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { Timer } from 'phosphor-react'

import { Header } from '../components/Header'
import { Widget } from '../components/Widget'
import { ModalCreatePage } from '../components/Modal/ModalCreatePage'

import UseAuth from '../services/hooks/useAuth'
import Client from '../data/client'
import UseModal from '../services/hooks/useModal'

interface Page {
	id: string
	name: string
	levelType: string
	idUser: string
}

export function Home() {
	const navigate = useNavigate()

	const { user } = UseAuth()
	const { setModal, changeData } = UseModal()

	const [openModal, setOpenModal] = useState(false)
	const [pages, setPages] = useState<Page[]>([])
	const [progress, setProgress] = useState<boolean>(true)
	const [finished, setSinished] = useState<boolean>(false)

	async function getPagesForUser() {
		if (user) {
			const data = { idUser: user.id }
			await Client.post('/page/get', data).then((res) => {
				setPages(res.data)
			})
		}
	}

	useEffect(() => {
		setModal('CreatePage')

		if (user?.id) {
			getPagesForUser()
		}

	}, [user, changeData])

	return (
		<div className='h-full w-full'>
			<Header />
			<ToastContainer />
			<div className='h-20 w-full font-semibold text-3xl flex items-center'>
				<p className='ml-3'>Páginas</p>
			</div>
			<div className='h-20 w-full flex items-center justify-around'>
				<div className={`bg-[#2c2c2c] h-10 w-44 md:w-52 lg:w-64 flex items-center justify-center rounded-md cursor-pointer ${progress && 'border-[1px] border-brand-500'}`}>
					<p className={`text-[#5e5c5c] font-medium ${progress && 'text-brand-500 font-light'}`}>Em processo</p>
				</div>
				<div className='bg-[#2c2c2c] h-10 w-44 md:w-52 lg:w-64 flex items-center justify-center rounded-md cursor-pointer'>
					<p className='text-[#5e5c5c] font-medium'>Finalizadas</p>
				</div>
			</div>
			<div className='h-[55vh] w-full flex items-center justify-start flex-col overflow-scroll overflow-x-hidden scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'>
				{pages?.map((page: Page) => {
					return (
						<div className='h-20 w-96 flex my-1 md:w-[500px] lg:w-[700px]' key={page.id}>
							<div className={`w-5 h-full rounded-l-md ${page.levelType === 'low' && 'bg-green-400'} ${page.levelType === 'medium' && 'bg-yellow-300'} ${page.levelType === 'high' && 'bg-red-500'}`} />
							<div
								onClick={() => navigate(`/${page.id}`)}
								className='bg-[#262626] h-full w-full flex items-center justify-around rounded-r-md cursor-pointer'
							>
								<div className='h-full w-full flex items-start justify-center flex-col'>
									<p className='mt-2 ml-3 text-[#dcdcdc]'>{page.name}</p>
									<p className='ml-3 text-[#5d5d5d]'>24/10/2001</p>
								</div>
								<div className='h-full w-20 flex items-center justify-center'>
									<Timer className={`text-2xl ${page.levelType === 'low' && 'text-green-400'} ${page.levelType === 'medium' && 'text-yellow-300'} ${page.levelType === 'high' && 'text-red-400'}`} />
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<Widget onClick={() => setOpenModal(!openModal)} />
			<ModalCreatePage
				open={openModal}
				close={() => setOpenModal(!openModal)}
			/>
		</div>
	)
}
