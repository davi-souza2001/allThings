import { useState } from "react"
import UseAuth from "../services/hooks/useAuth"

interface LoadingProps {
    children: React.ReactNode
}

export function Loading(props: LoadingProps) {
    const { loadingUser } = UseAuth()

    return (
        <div>
            {loadingUser ? (
                <h1>Carregando</h1>
            ) : props.children}
        </div>
    )
}