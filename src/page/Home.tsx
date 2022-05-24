import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab } from '@headlessui/react';

import { Header } from "../components/Header";
import { SinglePage } from '../components/SinglePage';
import { Widget } from "../components/Widget";
import { ModalCreatePage } from '../components/Modal/ModalCreatePage';

import UseAuth from '../services/hooks/useAuth';
import Client from '../data/client';
import UseModal from '../services/hooks/useModal';

interface Page {
    id: string,
    name: string,
    levelType: string,
    idUser: string
}

export function Home() {
    const navigate = useNavigate();

    const { user } = UseAuth();
    const { setModal } = UseModal();

    const [openModal, setOpenModal] = useState(false);
    const [pages, setPages] = useState<Page[]>([]);

    async function getPagesForUser() {
        if (user) {
            const data = { idUser: user.id };
            await Client.post('/page/get', data).then((res) => {
                setPages(res.data)
            })
        }
    }

    useEffect(() => {
        setModal('CreatePage')

        if (user?.id) {
            getPagesForUser()
        }

    }, [user])

    return (
        <div className="h-full w-full">
            <Header />
            <div className="w-full h-[80vh] flex items-center justify-start flex-col">
                <Tab.Group>
                    <Tab.List className="bg-[#101010] w-2/3 h-[10%] flex items-center justify-center mt-7 rounded-md">
                        <Tab className="w-full h-full rounded-md outline-none text-zinc-500">Baixa</Tab>
                        <Tab className="w-full h-full rounded-md outline-none text-zinc-500">Média</Tab>
                        <Tab className="w-full h-full rounded-md outline-none text-zinc-500">Alta</Tab>
                    </Tab.List>
                    <Tab.Panels className="bg-[#2D2D2D] rounded-md h-full w-[300px] mt-10 overflow-y-scroll scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin md:w-2/4 md:h-5/6">
                        <Tab.Panel>
                            {pages?.map((page: Page) => {
                                if (page.levelType === 'low') {
                                    return (
                                        <SinglePage namePage={page.name} open={() => navigate(`/${page.id}`)} key={page.id} />
                                    )
                                }
                            })}
                        </Tab.Panel>
                        <Tab.Panel>
                            {pages?.map((page: Page) => {
                                if (page.levelType === 'medium') {
                                    return (
                                        <SinglePage namePage={page.name} open={() => navigate(`/${page.id}`)} key={page.id} />
                                    )
                                }
                            })}
                        </Tab.Panel>
                        <Tab.Panel>
                            {pages?.map((page: Page) => {
                                if (page.levelType === 'high') {
                                    return (
                                        <SinglePage namePage={page.name} open={() => navigate(`/${page.id}`)} key={page.id} />
                                    )
                                }
                            })}
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <Widget onClick={() => setOpenModal(!openModal)} />
            <ModalCreatePage
                open={openModal}
                close={() => setOpenModal(!openModal)}
            />
        </div>
    )
}