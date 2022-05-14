import { BookBookmark, DotsThreeVertical, UserCircle, IdentificationCard, House, Question, Power } from "phosphor-react";
import { Link } from "react-router-dom";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react';

export function Header() {
    return (
        <div className="flex flex-row bg-black text-zinc-100 w-auto h-14 items-center justify-between">
            <Link to="/" className="flex items-center text-xl px-6 cursor-pointer">
                <BookBookmark className="w-6 h-6 mr-2" />
                ALL THINGS
            </Link>

            <div className="flex flex-rowitems-center text-lg px-6">
                <Link to="/" className="px-6 hidden md:flex">
                    Início
                </Link>

                <Link to="/profile" className="hidden items-center cursor-pointer md:flex md:flex-row">
                    Nome do Usuário
                    <UserCircle className='w-6 h-6 ml-2' weight="bold" />
                </Link>

                <Menu>
                    <MenuButton className="md:hidden">
                        <DotsThreeVertical weight="bold" className="flex w-6 h-6 md:hidden" />
                    </MenuButton>
                    <MenuList className='bg-[#101010] p-6 rounded-md'>
                        <MenuItem>                
                            <Link to="/" className="flex flex-row items-center justify-center">
                                Início
                                <House className='ml-2'/>
                            </Link>
                        </MenuItem>
                        <MenuItem> 
                            <Link to="/profile" className="flex flex-row items-center justify-center">
                                Ver Perfil
                                <IdentificationCard className='ml-2' />
                            </Link>
                        </MenuItem>
                        <MenuItem>                            
                            <Link to="/" className="flex flex-row items-center justify-center">
                                Ajuda
                                <Question className='ml-2' />
                            </Link>
                        </MenuItem>
                        <MenuItem>                            
                            <Link to="/" className="flex flex-row items-center justify-center text-[#B22222] mt-4">
                                Sair
                                <Power className='ml-2' />
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </div>
    )
}