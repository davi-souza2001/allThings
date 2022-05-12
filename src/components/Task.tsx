import { CaretDown } from "phosphor-react";

interface TaskProps{
    taskName?: String
}

export function Task(props: TaskProps){
    return(
        <div className="flex flex-row justify-between items-center ml-6 mr-6 bg-white text-black px-5 py-5 rounded-md m-5">
            <p>{props.taskName}</p>

            <button className="flex flex-row items-center bg-brand-500 hover:bg-brand-300 transition-colors text-white px-2 py-2 rounded-md">Opções <CaretDown className="ml-1"/></button>
        </div>
    )
}