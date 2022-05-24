import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { NotePencil } from 'phosphor-react'

import { Header } from '../components/Header'
import { Widget } from '../components/Widget'
import { ModalCreatePage } from '../components/Modal/ModalCreatePage';

import UseModal from '../services/hooks/useModal';
import UseAuth from '../services/hooks/useAuth';
import Client from '../data/client';

interface PageNotationProps {
    id: string,
    title: string,
    content: string,
    type: string,
    idPage: string
}

interface Page {
    id: string,
    name: string,
    levelType: string,
    idUser: string
}

export function PageNotation() {
    const { pathname } = useLocation();
    const { user } = UseAuth();
    const { setModal } = UseModal();
    const idWithOutSlash = pathname.split('/')[1];

    const [openModal, setOpenModal] = useState(false);
    const [notes, setNotes] = useState<PageNotationProps[]>([]);
    const [pages, setPages] = useState<Page[]>([]);

    async function getNotesForUser() {
        if (user) {

            const data = { idPage: idWithOutSlash };
            await Client.post('/note/get', data).then((res) => {
                setNotes(res.data)
            })
        }
    }

    async function getPages() {
        if (user) {
            const data = { idUser: user.id };
            await Client.post('/page/get', data).then((res) => {
                setPages(res.data)
            })
        }
    }

    useEffect(() => {
        setModal('CreateNote')
        if (user?.id) {
            getNotesForUser()
            getPages()
        }
    }, [user])

    return (
        <>
            <Header />
            <div className="w-3/4 h-20 flex items-center ml-10">
                <span className="font-semibold text-4xl flex">
                    {pages?.map((page: Page) => {
                        if (page.id === idWithOutSlash) {
                            return page.name
                        }
                    })}
                    <NotePencil className="ml-5 cursor-pointer" />
                </span>
            </div>
            <div className="w-full h-full flex items-center justify-center flex-col">
                <div className="w-3/4 max-h-[70vh] mb-5 overflow-scroll overflow-x-hidden scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin">
                    {notes?.map((note: PageNotationProps) => {
                        return (
                            <div key={note.id} className="mt-5 p-5 rounded-lg bg-neutral-800 mb-4">
                                <p className="text-2xl font-medium mb-4">{note.title}</p>
                                <p>{note.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Widget onClick={() => setOpenModal(!openModal)} />
            <ModalCreatePage
                open={openModal}
                close={() => setOpenModal(!openModal)}
                idPage={idWithOutSlash}
            />
        </>
    )
}