import React from "react";
import { logo, profileImg } from "../assets";
import { AiOutlineDown } from 'react-icons/ai'

export const Header = () => {
    return(
        <header className="z-10 fixed bg-white p-10 max-h-10 w-screen overflow-hidden flex flex-row items-center justify-between">
            <div className="cursor-pointer flex flex-row items-center">
                <img className=" rounded-full h-7 w-7 mr-2" src={logo} alt='' />
                <p className="font-bold text-sm">Metawise</p>
            </div>

            <div className="cursor-pointer flex flex-row items-center">
                <img className="mr-1 w-10 h-10 rounded-full resize" src={profileImg} alt="" />
                <p className="mr-2 text-xs text-neutral-400">@danisco</p>
                <AiOutlineDown />
            </div>
        </header>
    )
}