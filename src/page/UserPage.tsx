import { Tab } from '@headlessui/react';
import { SinglePage } from '../components/SinglePage';

import { Header } from "../components/Header";
import { UserInfo } from "../components/UserInfo";

export function UserPage() {
    return (
        <>
            <Header />

            <div className='overflow-y-auto overflow-x-hidden'>
                <div>
                    <div className="bg-brand-500 absolute h-28 w-full z-[-1] mt-[-50px]"></div>
                </div>

                <div className="mt-8 ml-8 mr-8">
                    <UserInfo name={'Exemplo'} nickname={'exemplo'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum commodi accusamus itaque.'} />
                </div>

                <div className="mt-8 ml-8">
                    <p>Últimas Tarefas criadas</p>
                    <div className="h-[500px]">
                        <Tab.Group>
                            <Tab.Panels className="bg-[#2D2D2D] rounded-md h-full mt-10 overflow-y-scroll scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin md:w-2/4 md:h-5/6 w-[350px]">
                                <Tab.Panel>
                                    <SinglePage />
                                    <SinglePage />
                                    <SinglePage />
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </>
    )
}