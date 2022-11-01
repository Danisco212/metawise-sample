import React, { useEffect } from "react";
import { logo, profileImg } from "../assets";
import { AiOutlineLogout } from 'react-icons/ai'
import { useCookies } from "react-cookie";
export const Header = () => {
    const [cookie, setCookie] = useCookies(['metawise_auth', 'metawise_user'])
    const logout = () => {
        setCookie('metawise_auth', '', {path: '/'})
        setCookie('metawise_user', '', {path: '/'})
        window.location.href = '/'
    }
    useEffect(() => {
        if(!cookie.metawise_auth){
            window.location.href = '/'
        }
    }, [])
    return(
        <header className="z-10 fixed bg-white p-10 max-h-10 w-screen flex flex-row items-center justify-between">
            <div className="cursor-pointer flex flex-row items-center">
                <img className=" rounded-full h-7 w-7 mr-2" src={logo} alt='' />
                <p className="font-bold text-sm">Metawise</p>
            </div>
            <div className="flex flex-row items-center">
                <img className="mr-1 w-10 h-10 rounded-full resize" src={profileImg} alt="" />
                <p className="mr-5 text-xs text-neutral-400">{cookie.metawise_user}</p>
                <AiOutlineLogout onClick={logout} size={25} className="cursor-pointer" />
            </div>
        </header>
    )
}