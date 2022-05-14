import { CheckCircle, UserCirclePlus } from "phosphor-react";
import { useState } from "react";

export function Register(){
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [description, setDescription] = useState('')

    return(
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col align-middle items-center h-96 w-[350px] py-5 bg-[#2D2D2D] rounded-xl md:w-[500px]"> 
                <div className="flex justify-center items-center text-3xl mb-6 w-full">
                    <UserCirclePlus className="w-8 h-8 mr-2" />
                    <h1>Cadastro</h1>
                </div>

                <form className="flex flex-col align-middle items-center w-full">
                    {/* Criar limitação de 20 caracteres de nome */}
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        className="mb-3 min-w-[304px] md:w-[400px] text-sm outline-none transition-all placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-[#5B5B5B] rounded-lg focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none"
                        onChange={event => setName(event.target.value)}
                    />

                    {/* Criar limitação de 20 caracteres de nickname */}
                    <input 
                        type="text" 
                        placeholder="Nickname" 
                        className="mb-3 min-w-[304px] md:w-[400px] text-sm outline-none transition-all placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-[#5B5B5B] rounded-lg focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none"
                        onChange={event => setNickname(event.target.value)}
                    />

                    {/* Criar limitação de 100 caracteres de descrição */}
                    <textarea 
                        placeholder="Uma breve descrição sobre você..." 
                        className="mb-3 min-w-[304px] md:w-[400px] min-h-[120px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-[#5B5B5B] rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
                        onChange={event => setDescription(event.target.value)}
                    ></textarea>

                    <button
                        type="submit"
                        disabled={name.length === 0 || nickname.length === 0 || description.length === 0}
                        className="flex flex-row items-center bg-[#181818] px-4 py-2 rounded-3xl hover:border-2 hover:border-brand-500 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none transition-all disabled:opacity-50 disabled:border-0"
                    >
                        Finalizar Cadastro 
                        <CheckCircle className="w-5 h-5 ml-2 text-green-500"/>
                    </button>
                </form>
            </div>
        </div>
    )
}