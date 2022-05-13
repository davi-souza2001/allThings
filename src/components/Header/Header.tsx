import { BookBookmark, UserCircle } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header(){
    return(
        <div className="flex flex-row bg-black text-zinc-100 w-auto h-14 items-center justify-between">
            <Link to="/" className="flex items-center text-xl px-6 cursor-pointer">
                <BookBookmark className="w-6 h-6 mr-2" />
                ALL THINGS
            </Link>

            {/* Precisa fazer o modo mobile */}
            {/* Utilizar <DotsThreeVertical /> */}
            <div className="flex flex-row items-center text-lg px-6">
                <Link to="/" className="px-6">
                    Início
                </Link>

                <div className="flex flex-row items-center cursor-pointer">
                    <p>Nome do Usuário</p>
                    <UserCircle className='w-6 h-6 ml-2' weight="bold" />
                </div>
            </div>
        </div>
    )
}