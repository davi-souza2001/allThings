import { Wrench, Chat, NotePencil, Trash } from 'phosphor-react';

import { Menu, MenuButton, MenuList } from '@chakra-ui/react';

export function SinglePage() {
    return (
        <div className="w-full h-20 flex items-center justify-center">
            <div className="bg-white w-11/12 h-16 rounded-md text-black flex items-center justify-between mt-5" >
                <span className="ml-4 text-xl font-medium">Teste</span>
                <Menu>
                    <MenuButton className="p-3 mr-4 text-xl bg-brand-500 rounded-md text-white hover:bg-brand-300 transition-colors">
                        <Wrench />
                    </MenuButton>
                    <MenuList className='mt-2 w-28 h-36 flex items-center justify-around flex-col'>
                        <div className='bg-[#3CB371] rounded-t-lg h-full w-full px-5 flex items-center justify-center text-white font-medium cursor-pointer'>
                            Abrir
                            <Chat className='ml-2'/>
                        </div>
                        <div className='bg-[#CCCC00] h-full w-full px-5 flex items-center justify-center text-white font-medium cursor-pointer'>
                            Editar
                            <NotePencil className='ml-2'/>
                        </div>
                        <div className='bg-[#B22222] rounded-b-lg h-full w-full px-4 flex items-center justify-center text-white font-medium cursor-pointer'>
                            Deletar
                            <Trash className='ml-1'/>
                        </div>
                    </MenuList>
                </Menu>
            </div>
        </div>
    )
}