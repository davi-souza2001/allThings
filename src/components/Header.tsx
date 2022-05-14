import { BookBookmark, DotsThreeVertical, UserCircle } from "phosphor-react";
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
            <div className="flex flex-rowitems-center text-lg px-6">
                <Link to="/" className="px-6 hidden md:flex">
                    Início
                </Link>

                <Link to="/profile" className="hidden items-center cursor-pointer md:flex md:flex-row">
                    Nome do Usuário
                    <UserCircle className='w-6 h-6 ml-2' weight="bold" />
                </Link>

                <DotsThreeVertical weight="bold" className="flex w-6 h-6 md:hidden"/>
            </div>
        </div>
    )
}