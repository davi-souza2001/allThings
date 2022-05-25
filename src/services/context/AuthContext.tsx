import { useNavigate } from "react-router-dom";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Cookie from 'js-cookie';

import { auth } from "../../firebase/connect";
import Client from '../../data/client';

interface AuthContextProps {
    loginGoogle: () => Promise<void>
    createNewUser: (userComplete: User) => Promise<void>
    checkLoginUser: () => Promise<void>
    logout: () => void
    user?: User
    loadingUser?: boolean
    setLoadingUser: Dispatch<SetStateAction<boolean>>
    children?: React.ReactNode
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
    setLoadingUser: () => { },
});

const providerGoogle = new GoogleAuthProvider();

function setCookieUser(user: User) {
    if (user.id) {
        Cookie.set('Admin-AllThings', user.id, {
            expires: 7,
        });
    }
}

export function AuthProvider(props: any) {
    const [loadingUser, setLoadingUser] = useState(false);
    const [user, setUser] = useState<User>({ email: '', name: '' });
    const token = Cookie.get('Admin-AllThings');
    const navigate = useNavigate();

    async function loginGoogle() {
        setLoadingUser(true);
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
        setLoadingUser(false);
    }

    async function createNewUser(userComplete: User) {
        setLoadingUser(true);
        try {
            const data = await Client.post('/user/create', userComplete).then((req) => {
                setUser(userComplete);
            })
        } catch (error) {
            console.log(error)
        }
        setLoadingUser(false);
    }

    async function checkLoginUser() {
        setLoadingUser(true);
        const dataForRequest = { id: token }
        try {
            const data = await Client.post('/user/login', dataForRequest).then((req) => {
                if (req.data) {
                    setUser(req.data)
                }
            })
        } catch (error) {
            console.log(error)
        }
        setLoadingUser(false);
    }

    function logout() {
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
        <AuthContext.Provider value={{ loginGoogle, user, createNewUser, checkLoginUser, logout, loadingUser, setLoadingUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;