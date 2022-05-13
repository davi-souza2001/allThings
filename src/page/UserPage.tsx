import { Header } from "../components/Header/Header";
import { TasksList } from "../components/TasksList/TasksList";
import { UserInfo } from "../components/UserInfo/UserInfo";

export function UserPage(){
    return(
        <>
        <Header />

        <div>
            <div>
                <div className="bg-brand-500 absolute h-28 w-full z-[-1] mt-[-50px]"></div>
            </div>

            <div className="mt-8 ml-8 mr-8">
                <UserInfo name={'Exemplo'} nickname={'exemplo'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum commodi accusamus itaque.'} />
            </div>

            <div className="mt-8 ml-8">
                <p>Últimas Tarefas criadas</p>
                <div>
                    <TasksList />
                </div>
            </div>
        </div>
        </>
    )
}