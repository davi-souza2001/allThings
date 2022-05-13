import { Header } from "../components/Header/Header"
import { TasksList } from "../components/TasksList/TasksList"

export function Home() {
    return(
        <>
            <Header />
            
            <div className="flex justify-center items-center">
                <TasksList />
            </div>
        </>
    )
}