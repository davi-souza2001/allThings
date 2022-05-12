import { BookBookmark, GoogleLogo } from "phosphor-react"

export function Login() {
    console.log('asda')

    return(
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-between align-middle items-center h-48 w-64 py-5 bg-[#2D2D2D] rounded-xl">
                <div className="flex flex-row items-center text-xl">
                    <BookBookmark className="w-6 h-6 mr-2" />
                    <p>ALL THINGS</p>
                </div>

                <div className="flex flex-col align-middle items-center">
                    <p className="py-3">Faça seu login com:</p>
                    <button 
                        className="bg-zinc-100 rounded-md hover:border-2 hover:border-brand-500 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none transition-all">
                        <GoogleLogo className="w-10 h-10 text-black" />
                    </button>
                </div>
            </div>
        </div>
    )
}