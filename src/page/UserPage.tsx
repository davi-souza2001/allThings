import { UserCircle } from "phosphor-react";
import { Header } from "../components/Header/Header";

export function UserPage(){
    return(
        <>
        <Header />

        <div>
            <div>

            </div>

            <div>
                <div className="flex items-center justify-center bg-white text-black text-[150px] rounded-full w-32 h-32">
                    <UserCircle />
                </div>
            </div>

            <div>

            </div>
        </div>
        </>
    )
}