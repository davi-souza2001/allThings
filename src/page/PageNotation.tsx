import { useLocation } from 'react-router-dom'
import { NotePencil, CheckSquare } from 'phosphor-react'

import { Header } from '../components/Header'

export function PageNotation() {
    const { pathname } = useLocation()
    console.log(pathname)

    return (
        <>
            <Header />
            <div className="w-3/4 h-20 flex items-center ml-10">
                <span className="font-semibold text-4xl flex">
                    {pathname} <NotePencil className="ml-5 cursor-pointer" />
                </span>
            </div>
            <div className="w-full h-full flex items-center justify-center flex-col">
                <div className="w-3/4 max-h-[70vh] mb-5 overflow-scroll overflow-x-hidden scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin">
                    <div className="p-5 rounded-lg bg-neutral-800 mb-4">
                        <p className="text-2xl font-medium mb-4">Titulo</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, dolorem eligendi non aliquam est et! Facere ut modi excepturi eveniet reiciendis, quia nisi, magnam aut cum, ad rem corporis quasi!</p>
                    </div>
                    <div className="p-5 rounded-lg bg-neutral-800 mb-4">
                        <p className="text-2xl font-medium mb-4">Titulo</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, dolorem eligendi non aliquam est et! Facere ut modi excepturi eveniet reiciendis, quia nisi, magnam aut cum, ad rem corporis quasi!</p>
                    </div>
                    <div className="p-5 rounded-lg bg-neutral-800 mb-4">
                        <p className="text-2xl font-medium mb-4">Titulo</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, dolorem eligendi non aliquam est et! Facere ut modi excepturi eveniet reiciendis, quia nisi, magnam aut cum, ad rem corporis quasi!</p>
                    </div>
                    <div className="p-5 rounded-lg bg-neutral-800 mb-4">
                        <p className="text-2xl font-medium mb-4">Titulo</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, dolorem eligendi non aliquam est et! Facere ut modi excepturi eveniet reiciendis, quia nisi, magnam aut cum, ad rem corporis quasi!</p>
                    </div>
                </div>
            </div>
        </>
    )
}