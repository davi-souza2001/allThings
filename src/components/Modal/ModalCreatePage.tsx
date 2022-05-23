import { useState } from "react";
import { XCircle } from "phosphor-react";

import UseModal from "../../services/hooks/useModal";
import UseAuth from '../../services/hooks/useAuth';

interface ModalCreatePageProps {
  open: boolean;
  close: () => void;
}

export function ModalCreatePage(props: ModalCreatePageProps) {
  const { modal } = UseModal();
  const { user } = UseAuth()

  const [namePage, setNamePage] = useState("");
  const [levelPage, setLevelPage] = useState<"low" | "medium" | "high">("low");

  async function createPage() {
    if (user?.id) {
      const pageData = {
        name: namePage,
        levelType: levelPage,
        idUser: user?.id
      }

      console.log(pageData)
      props.close()
    }

  }

  return (
    <div>
      {modal === 'CreatePage' && (
        <div className={`bg-[rgba(0,0,0,.5)] 
        w-screen h-screen
        flex items-center justify-center
        absolute inset-0  
        ${!props.open && 'hidden'}
    `}>
          <div className={`
      bg-[#393939]
        flex items-center justify-start flex-col
        w-screen sm:w-2/4 md:w-3/6 lg:w-2/5
        h-4/5 md:h-4/5 lg:h-5/6
        rounded-lg
        transition-all
     `}>
            <div onClick={props.close} className="w-full h-7 flex items-center justify-end">
              <XCircle className="text-2xl w-7 h-7 bg-red-500 rounded-lg mr-3 mt-3 cursor-pointer" />
            </div>
            <div className={`
          w-full h-10 md:h-14
          flex items-center justify-center
        `}>
              <span className="font-semibold text-2xl xl:text-3xl">Página</span>
            </div>
            <div className={`
           w-full h-12
           flex items-center justify-center
           mt-2
        `}>
              <input
                type="text"
                placeholder="Nome da página"
                onChange={(e) => setNamePage(e.target.value)}
                className={`
                  md:w-80 lg:w-3/4 xl:h-12
                  rounded-lg
                  outline-none
                  border-none
                bg-[#4f4f4f]
                  transition-all 
                border-zinc-600 
                focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none
                  `}
              />
            </div>
            <div className={`
           w-full h-24
           flex items-center justify-center
           mt-4
        `}>
              <span className="text-2xl font-semibold xl:text-3xl">Prioridade da página</span>
            </div>
            <div className={`
           w-full h-32 xl:h-40 xl:mt-20
           flex items-center justify-around
        `}>
              <div className="flex items-center justify-center flex-col cursor-pointer">
                <span
                  onClick={() => setLevelPage("low")}
                  className={`
                  bg-green-500
                  text-green-500
                    h-11 w-11
                    flex items-center justify-center 
                    rounded-full
                    xl:h-16 xl:w-16
                    ${levelPage === 'low' && 'border-2 border-green-200'}
                  `}>
                  Baixa
                </span>
                <span className="xl:text-xl xl:mt-5">
                  Baixa
                </span>
              </div>
              <div className="flex items-center justify-center flex-col cursor-pointer">
                <span
                  onClick={() => setLevelPage("medium")}
                  className={`
                bg-yellow-300
                text-yellow-300
                  h-11 w-11
                  flex items-center justify-center 
                  rounded-full
                  xl:h-16 xl:w-16
                  ${levelPage === 'medium' && 'border-2 border-yellow-100'}
                  `}>
                  Média
                </span>
                <span className="xl:text-xl xl:mt-5">
                  Média
                </span>
              </div>
              <div className="flex items-center justify-center flex-col cursor-pointer">
                <span
                  onClick={() => setLevelPage("high")}
                  className={`
                bg-red-500
                text-red-500
                  h-11 w-11
                  flex items-center justify-center 
                  rounded-full
                  xl:h-16 xl:w-16
                  ${levelPage === 'high' && 'border-2 border-red-300'} 
                  `}>
                  Alta
                </span>
                <span className="xl:text-xl xl:mt-5">
                  Alta
                </span>
              </div>
            </div>
            <div className={`
          w-full h-14 lg:h-2/5 lg:items-end
          flex items-center justify-center
        `}>
              <button 
              onClick={createPage}
              className={`
                w-40 h-10 xl:h-14 xl:w-52
              bg-brand-500
                rounded-lg
                text-xl font-semibold
                cursor-pointer
                lg:mb-10
              hover:bg-brand-300
                transition-all
          `}>
                Criar
              </button>
            </div>
          </div>
        </div >
      )}

      {modal === 'CreateNote' && (
        <div className={`bg-[rgba(0,0,0,.5)] 
        w-screen h-screen
        flex items-center justify-center
        absolute inset-0  
        ${!props.open && 'hidden'}
        `}>
          <div className={`
          bg-[#393939]
            flex items-center justify-start flex-col
            w-screen sm:w-2/4 md:w-3/6 lg:w-2/5
            h-4/5 md:h-4/5 lg:h-5/6
            rounded-lg
            transition-all
            `}>
            <div onClick={props.close} className="w-full h-7 flex items-center justify-end">
              <XCircle className="text-2xl w-7 h-7 bg-red-500 rounded-lg mr-3 mt-3 cursor-pointer" />
            </div>
            <div className={`
                mt-3
                w-full h-10
                flex items-center justify-center 
            `}>
              <p className="font-semibold text-2xl">Criar nota</p>
            </div>
            <div className={`
                bg-white
                w-full
            `}>
              asdsf
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

{/* <textarea 
          className={`
          resize-none
          bg-[#4f4f4f]
          h-3/4 w-3/4 sm:h-20 xl:h-full
          border-none
          outline-none
          rounded-lg
          `}
          /> */}