import { useHref, useLocation } from 'react-router-dom'

export function PageNotation() {
    const alo = useLocation()
    console.log(alo.pathname)

    return (
        <div>PageNotation</div>
    )
}