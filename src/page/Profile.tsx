import { Header } from "../components/Header"
import { UserInfo } from "../components/UserInfo"
import UseAuth from '../services/hooks/useAuth'

export function Profile() {
	const { user } = UseAuth()

	return (
		<>
			<Header />
			<div className='overflow-y-auto overflow-x-hidden'>
				<div>
					<div className="bg-brand-500 absolute h-28 w-full z-[-1] mt-[-50px]"></div>
				</div>
				<div className="mt-8 ml-8 mr-8">
					<UserInfo name={user?.name} nickname={user?.email} description={user?.description} />
				</div>
			</div>
		</>
	)
}
