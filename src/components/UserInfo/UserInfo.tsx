import { NotePencil, UserCircle } from "phosphor-react";

interface UserInfoProps{
    name?: String,
    nickname?: String,
    description?: String
}

export function UserInfo(props: UserInfoProps){
    return(
        <div>
            <div className="flex items-center justify-center bg-white text-black text-[150px] rounded-full w-32 h-32">
                <UserCircle />
            </div>

            <div className="flex flex-col mt-5 items-start md:flex-row md:justify-between">
                <div>
                    <p className="text-xl">{props.name}</p>
                    <p className="text-sm">@{props.nickname}</p>
                </div>

                <div className="flex flex-col md:flex-row w-[600px] md:justify-between">
                    <div className="mt-5 w-[350px] md:w-[500px] md:mt-0">
                        <p>Descrição</p>
                        <p className="bg-[#2D2D2D] pl-2 pr-5 py-2 rounded-md">{props.description}</p>
                    </div>
                    
                    <div className="flex flex-row items-center mt-6 md:mt-0">
                        <NotePencil className="w-6 h-6 hover:text-brand-500 transition-colors cursor-pointer" />

                        <p className="ml-2 text-md md:hidden">Editar Perfil</p>
                    </div>
                </div>
            </div> 

        </div>
    )
}