import React from "react";
import { logo } from "../../assets";
import { SizedBox } from "../../components";
import './styles/Login.css'

export const LoginPage = () => {
    const handleTough = () => {
        alert('Thats tough bro!')
    }
    return (
        <div className="h-screen flex flex-row">
            <div className="w-3/6 h-screen bg-white flex flex-row items-center justify-center">
                <div>
                    <h1 className="mb-4 font-medium text-3xl">Login To Metawise</h1>
                    <p className="mb-5 text-sm text-neutral-400">Welcome back, please enter your details</p>
                    <SizedBox height={10} />
                    <p className="font-medium text-xs mb-1">Email</p>
                    <input type="email" className="mb-5 h-9 w-80 text-sm rounded-lg px-3 border-2 outline-none" placeholder="Enter your email" />

                    <p className="font-medium text-xs mb-1">Password</p>
                    <input type="password" className="rounded-lg text-sm h-9 w-80 px-3 border-2 outline-none" placeholder="*******" />
                    <SizedBox height={10} />
                    <button className="text-sm w-80 mt-2 mb-5 font-bold bg-purple-500 h-9 rounded-lg text-white">Sign in</button>

                    <p className="text-sm">Don't have an account? <span onClick={handleTough} className="text-purple-500 cursor-pointer">Tough!</span></p>
                </div>
                <div className="absolute bottom-5 left-5">
                    <p className="text-xs">Metawise @2022</p>
                </div>
            </div>
            <div className="flex justify-center items-center  w-3/6 h-screen bg-slate-50">
                <img className="h-60 w-60 rounded-full" src={logo} alt='' />
            </div>
        </div>
    )
}
