import Idea from '../imgs/idea.png';
import Thought from '../imgs/thought.png';

export function WidgetForm() {
    return (
        <div className=" bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col item-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <div className="w-44 h-10 flex items-center justify-center font-semibold text-lg">
                <span>Escreva sua nota</span>
            </div>
            <div className="w-full h-full flex items-center justify-center">
                <div className="bg-zinc-700 w-32 h-28 flex items-center justify-center flex-col rounded-md cursor-pointer">
                    <img src={Idea} alt="Icone para criar página" />
                    <span>Criar página</span>
                </div>
            </div>
        </div>
    )
}