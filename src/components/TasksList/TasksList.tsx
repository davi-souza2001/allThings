import { Task } from "../Task";

export function TasksList(){
    return(
        <div className="bg-[#2D2D2D] w-[350px] min-h-[500px] rounded-xl md:w-[500px]">
            <Task taskName={'Tarefa de casa'}/>
            <Task taskName={'Tarefas'}/>
        </div>
    )
}