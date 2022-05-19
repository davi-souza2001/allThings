import { XCircle } from "phosphor-react";

interface ModalCreatePageProps {
  open: boolean;
  close: () => void;
}

export function ModalCreatePage(props: ModalCreatePageProps) {

  return (
    <div className={`bg-[rgba(0,0,0,.5)] 
      w-screen h-screen
      flex items-center justify-center
      absolute inset-0  
      ${!props.open && 'hidden'}
    `}>
      <div className="bg-[#2D2D2D] w-3/4 md:w-2/4 h-[70vh] rounded-lg">
        <div className="w-full h-10 flex justify-end ">
          <span className={`
          bg-red-500 w-8 h-8 
            flex items-center justify-center 
            mr-2 mt-2 
            rounded-md cursor-pointer
          `} onClick={props.close}>
            <XCircle className="text-3xl" />
          </span>
        </div>
        <div className={`
          w-full h-9 
          flex items-center justify-center 
          text-2xl lg:text-3xl xl:text-4xl
          font-semibold 
          mb-5
        `}>
          Página
        </div>
        <div className="w-full h-10 flex items-center justify-center text-2xl font-semibold mb-10">
          <input
            type="text"
            placeholder="Nome da página"
            className={`
            bg-[#4b4b4b]
              h-3/4 w-48 
              lg:w-80 lg:h-full xl:w-96
              border-hidden rounded-lg 
              font-medium
            `} />
        </div>
        <div className="w-full h-2/4 flex items-center justify-around flex-col">
          <div>
            <span className="text-2xl font-semibold lg:text-3xl xl:text-4xl">
              Prioridade da tarefa
            </span>
          </div>
          <div className="mt-18 w-full h-full flex items-center justify-center text-xl lg:text-2xl xl:text-3xl">
            <div className="mx-3 lg:mx-10 flex items-center justify-center flex-col">
              <span className={`
                w-10 h-10
                p-1 mb-3
              bg-green-500 text-green-500  
                rounded-full 
                cursor-pointer
              `}>
                X
              </span>
              <p>Baixa</p>
            </div>
            <div className="mx-3 lg:mx-10 flex items-center justify-center flex-col">
              <span className="bg-yellow-300 text-yellow-300 p-1 rounded-full w-10 h-10 mb-3 cursor-pointer">
                X
              </span>
              <p>Media</p>
            </div>
            <div className="mx-3 lg:mx-10 flex items-center justify-center flex-col">
              <span className="bg-red-500 text-red-500 p-1 rounded-full w-10 h-10 mb-3 cursor-pointer">
                X
              </span>
              <p>Alta</p>
            </div>
          </div>
        </div>
        <div className={`
          w-full h-10 
          flex items-center justify-center
        `}>
          <button className={`
           bg-brand-500 
            w-28 h-full lg:w-48 
            text-xl lg:text-2xl
            font-semibold 
            rounded-md 
            cursor-pointer
          `}>Criar</button>
        </div>
      </div>
    </div>
  )
}