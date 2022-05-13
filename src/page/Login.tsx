import { BookBookmark } from "phosphor-react"
import Google from '../imgs/google.svg'

export function Login() {

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-between align-middle items-center h-64 w-72 py-5 bg-[#2D2D2D] rounded-xl">
                <div className="flex items-center justify-center text-3xl w-full h-12 font-semibold">
                    <BookBookmark className="w-8 h-8 mr-2" />
                    <p>ALL THINGS</p>
                </div>

                <div className="flex justify-center items-center cursor-pointer bg-blue-600 hover:bg-blue-700 transition-all align-middle w-full h-16">
                    <img className="p-0 bg-white rounded-md" src={Google} alt="Icone do Google" />
                    <button className="mx-6 font-semibold">Logar com o Google</button>
                </div>
            </div>
        </div>
    )
}