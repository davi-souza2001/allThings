import { BookBookmark, UserCircle } from "phosphor-react";

export function Header(){
    return(
        <div className="flex flex-row bg-black text-zinc-100 w-auto h-14 items-center justify-between">
            <div className="flex items-center text-xl px-6 cursor-pointer">
                <BookBookmark className="w-6 h-6 mr-2" />
                <a href="">ALL THINGS</a>
            </div>

            {/* Precisa fazer o modo mobile */}
            {/* Utilizar <DotsThreeVertical /> */}
            <div className="flex flex-row items-center text-lg px-6">
                <a href="" className="px-6">Início</a>

                <div className="flex flex-row items-center cursor-pointer">
                    <p>Nome do Usuário</p>
                    <UserCircle className='w-6 h-6 ml-2' weight="bold" />
                </div>
            </div>
        </div>
    )
}