import { createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../../firebase/connect";
import Client from '../../data/client';

interface AuthContextProps {
    loginGoogle: () => Promise<void>
    createNewUser: (userComplete: User) => Promise<void>
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
    createNewUser: async () => { } 
});

const providerGoogle = new GoogleAuthProvider();

export function AuthProvider(props: AuthContextProps) {
    const [user, setUser] = useState<User>({ email: '', name: '' });

    async function loginGoogle() {
        await signInWithPopup(auth, providerGoogle).then((res) => {
            if (res.user.email && res.user.displayName) {
                const initialUser: User = {
                    email: res.user.email,
                    name: res.user.displayName,
                    imageUser: res.user.photoURL ?? ''
                }
                setUser(initialUser);
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

    return (
        <AuthContext.Provider value={{ loginGoogle, user, createNewUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;