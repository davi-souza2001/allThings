import { UserCirclePlus } from "phosphor-react";

export function Register(){
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col align-middle items-center h-auto w-[350px] py-5 bg-[#2D2D2D] rounded-xl md:w-[500px]"> 
                <div className="flex flex-row align-middle items-center text-xl mb-6">
                    <UserCirclePlus className="w-6 h-6 mr-2" />
                    <h1>Cadastro</h1>
                </div>

                <form action="" className="flex flex-col align-middle items-center">
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        className="mb-3 min-w-[304px] md:w-[400px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-[#5B5B5B] rounded-3xl focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none"
                    />

                    <input 
                        type="text" 
                        placeholder="Nickname" 
                        className="mb-3 min-w-[304px] md:w-[400px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-[#5B5B5B] rounded-3xl focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none"
                    />

                    <textarea placeholder="Uma breve descrição sobre você..." className="min-w-[304px] md:w-[400px] min-h-[120px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-[#5B5B5B] rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"></textarea>
                </form>
            </div>
        </div>
    )
}