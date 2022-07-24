import { BookBookmark } from 'phosphor-react'
import UseAuth from '../services/hooks/useAuth'

interface LoadingProps {
	children: React.ReactNode
}

export function Loading(props: LoadingProps) {
	const { loadingUser } = UseAuth()

	return (
		<div>
			{loadingUser ? (
				<div className='h-screen w-screen bg-[#1A1A1A] flex items-center justify-center'>
					<div className='flex items-center text-xl px-6 cursor-pointer animate-bounce'>
						<BookBookmark className='w-20 h-20 mr-2' />
						<p className='font-bold text-5xl'>ALL THINGS</p>
					</div>
				</div>
			) : props.children}
		</div>
	)
}
