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
import { toast, ToastContainer } from 'react-toastify';

interface Page {
    id: string,
    name: string,
    levelType: string,
    idUser: string
}

export function Home() {
    function notify(msg: string) {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const navigate = useNavigate();

    const { user } = UseAuth();
    const { setModal, changeData, setChangeData } = UseModal();

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

    async function deletePage(pageId: string) {
        if (user) {
            const data = { id: pageId };
            await Client.post('/page/delete', data).then((res) => {
                setChangeData(!changeData)
            }).catch((error) => notify('Você tem notas não terminadas nessa página!'))
        }
    }

    useEffect(() => {
        setModal('CreatePage')

        if (user?.id) {
            getPagesForUser()
        }

    }, [user, changeData])

    console.log(pages)

    return (
        <div className="h-full w-full">
            <Header />
            <ToastContainer />
            <div className='h-20 w-full font-semibold text-3xl flex items-center'>
                <p className='ml-3'>Páginas</p>
            </div>
            <div className='h-20 w-full flex items-center justify-around'>
                <div className='bg-[#2c2c2c] h-10 w-44 flex items-center justify-center rounded-md'>
                    <p className='text-[#5e5c5c] font-medium'>Em processo</p>
                </div>
                <div className='bg-[#2c2c2c] h-10 w-44 flex items-center justify-center rounded-md'>
                    <p className='text-[#5e5c5c] font-medium'>Finalizadas</p>
                </div>
            </div>
            <div className='h-[55vh] w-full flex items-center justify-start flex-col overflow-scroll overflow-x-hidden scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'>
                {pages?.map((page: Page) => {
                    return (
                        <div className='h-20 w-96 flex my-3' key={page.id}>
                            <div className='w-5 h-full rounded-l-md bg-red-600' />
                            <div
                                onClick={() => navigate(`/${page.id}`)}
                                className='bg-[#262626] h-full w-full flex items-center justify-around rounded-r-md cursor-pointer'
                            >
                                <div className='h-full w-full flex items-start justify-center flex-col'>
                                    <p className='mt-2 ml-3'>{page.name}</p>
                                    <p className='ml-3'>24/10/2001</p>
                                </div>
                                <div className='h-full w-20 flex items-center justify-center'>
                                    <p>k</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Widget onClick={() => setOpenModal(!openModal)} />
            <ModalCreatePage
                open={openModal}
                close={() => setOpenModal(!openModal)}
            />
        </div>
    )
}