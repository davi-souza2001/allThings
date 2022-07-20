import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_APIKEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE,
	messagingSenderId: import.meta.env.SENDER_ID,
	appId: import.meta.env.APP_ID
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()

export { auth }
