import Idea from '../imgs/idea.png'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface WidgetFormProps {
	onClick: () => void
}

export function WidgetForm(props: WidgetFormProps) {

	return (
		<div className='bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col item-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
			<div className='w-44 h-10 flex items-center justify-center font-semibold text-lg'>
				<span>Escreva sua nota</span>
			</div>
			<div className='w-full h-full flex items-center justify-center'>
				<div onClick={props.onClick} className='bg-zinc-700 w-32 h-28 flex items-center justify-center flex-col rounded-md cursor-pointer'>
					<img src={Idea} alt='Icone para criar página' className='mb-4' />
					<span>Criar página</span>
					<ToastContainer />
				</div>
			</div>
		</div>
	)
}
