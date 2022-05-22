import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Cookie from 'js-cookie';

import { auth } from "../../firebase/connect";
import Client from '../../data/client';

interface AuthContextProps {
    loginGoogle: () => Promise<void>
    createNewUser: (userComplete: User) => Promise<void>
    checkLoginUser: () => Promise<void>
    logout: () => void
    user?: User;
    children?: React.ReactNode;
}

interface User {
    id?: string,
    email: string,
    name: string,
    imageUser?: string,
    description?: string,
}

const AuthContext = createContext<AuthContextProps>({
    loginGoogle: async () => { },
    createNewUser: async () => { },
    checkLoginUser: async () => { },
    logout: () => { },
});

const providerGoogle = new GoogleAuthProvider();

function setCookieUser(user: any) {
    Cookie.set('Admin-AllThings', user.email, {
        expires: 7,
    });
}

export function AuthProvider(props: any) {
    const [user, setUser] = useState<User>({ email: '', name: '' });
    const token = Cookie.get('Admin-AllThings');
    const navigate = useNavigate()

    async function loginGoogle() {
        await signInWithPopup(auth, providerGoogle).then((res) => {
            if (res.user.email && res.user.displayName) {
                const initialUser: User = {
                    email: res.user.email,
                    name: res.user.displayName,
                    imageUser: res.user.photoURL ?? ''
                }
                setUser(initialUser);
                setCookieUser(initialUser);
            }
        })
    }

    async function createNewUser(userComplete: User) {
        try {
            const data = await Client.post('/user/create', userComplete).then((req) => {
                setUser(userComplete);
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function checkLoginUser() {
        const dataForRequest = { email: token }
        try {
            const data = await Client.post('/user/login', dataForRequest).then((req) => {
                if (req.data) {
                    setUser(req.data)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function logout() {
        Cookie.remove('Admin-AllThings');
        navigate('/login')
    }

    useEffect(() => {
        if (token) {
            checkLoginUser()
        } else {
            navigate('/login', { replace: true })
        }
    }, [token])

    return (
        <AuthContext.Provider value={{ loginGoogle, user, createNewUser, checkLoginUser, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;