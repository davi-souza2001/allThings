import { Tab } from '@headlessui/react';

import { Header } from "../components/Header";
import { SinglePage } from '../components/SinglePage';
import { Widget } from "../components/Widget";


export function Home() {
    return (
        <div className="h-full w-full">
            <Header />
            <Widget />
            <div className="w-full h-[80vh] flex items-center justify-start flex-col">
                <Tab.Group>
                    <Tab.List className="bg-[#101010] w-2/3 h-[10%] flex items-center justify-center mt-7 rounded-md">
                        <Tab className="w-full h-full rounded-md outline-none text-zinc-500">Baixa</Tab>
                        <Tab className="w-full h-full rounded-md outline-none text-zinc-500">Média</Tab>
                        <Tab className="w-full h-full rounded-md outline-none text-zinc-500">Alta</Tab>
                    </Tab.List>
                    <Tab.Panels className="bg-[#2D2D2D] rounded-md h-full w-[300px] mt-10 overflow-y-scroll scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin md:w-2/4 md:h-5/6">
                        <Tab.Panel>
                            <SinglePage />
                        </Tab.Panel>
                        <Tab.Panel>
                            <SinglePage />
                        </Tab.Panel>
                        <Tab.Panel>
                            <SinglePage />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}