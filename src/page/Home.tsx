import { Header } from "../components/Header";
import { Widget } from "../components/Widget";

import { Tab } from '@headlessui/react'

export function Home() {
    return (
        <div className="h-screen w-scree">
            <Header />
            <Widget />
            <div className="w-full h-[80vh] flex items-center justify-start flex-col">
                <Tab.Group>
                    <Tab.List className="bg-[#101010] w-2/3 h-[10%] flex items-center justify-center mt-7 rounded-md">
                        <Tab className="bg-red-700 w-full h-full rounded-md">Baixa</Tab>
                        <Tab className="w-full h-full rounded-md">Média</Tab>
                        <Tab className="w-full h-full rounded-md">Alta</Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>Content 1</Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}