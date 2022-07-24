import { Routes, Route } from 'react-router-dom'

import { Home } from './page/Home'
import { Login } from './page/Login'
import { PageNotation } from './page/PageNotation'
import { Register } from './page/Register'
import { Profile } from './page/Profile'

import { ModalProvider } from './services/context/ModalContext'
import { AuthProvider } from './services/context/AuthContext'

import { Loading } from './components/Loading'

export default function App() {

	return (
		<AuthProvider>
			<Loading>
				<ModalProvider>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/:idPage' element={<PageNotation />} />
					</Routes>
				</ModalProvider>
			</Loading>
		</AuthProvider>
	)
}

