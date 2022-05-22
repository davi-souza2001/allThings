import { createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/connect";

interface AuthContextProps {
    loginGoogle?: () => Promise<void>;
    children?: React.ReactNode;
}

interface User {
    id?: string,
    email: string,
    name: string,
    imageUser?: string,
    description?: string,
}

const AuthContext = createContext<AuthContextProps>({});

const providerGoogle = new GoogleAuthProvider();

export function AuthProvider(props: AuthContextProps) {
    const [user, setUser] = useState<User>({ email: '', name: '' });

    async function loginGoogle() {
        await signInWithPopup(auth, providerGoogle).then((res) => {
            console.log(res.user)
        })
    }

    return (
        <AuthContext.Provider value={{ loginGoogle }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;