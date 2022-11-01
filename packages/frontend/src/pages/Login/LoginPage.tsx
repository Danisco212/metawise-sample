import React, { ChangeEvent, useState } from "react";
import { LoginPageProp } from ".";
import { logo } from "../../assets";
import { SizedBox } from "../../components";
import './styles/Login.css'

export const LoginPage = (props: LoginPageProp) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleChangeEmail = (e: ChangeEvent) => {
        // @ts-ignore
        setEmail(e.target.value)
    }

    const handleChangePassword = (e: ChangeEvent) => {
        // @ts-ignore
        setPassword(e.target.value)
    }

    const attemptLogin = () => {
        if(!email || email.length < 6){
            alert('Please enter a valid email') // TODO: change this to a better option
            return
        }
        if(!password || password.length < 6){
            alert('Please enter your password')
            return
        }
        props.neuroLogin({email, password}).catch((err: any) => console.log(err))
    }

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
                    <input onChange={handleChangeEmail} value={email} type="email" className="mb-5 h-9 w-80 text-sm rounded-lg px-3 border-2 outline-none" placeholder="Enter your email" />

                    <p className="font-medium text-xs mb-1">Password</p>
                    <input onChange={handleChangePassword} value={password} type="password" className="rounded-lg text-sm h-9 w-80 px-3 border-2 outline-none" placeholder="*******" />
                    
                    <SizedBox height={10} />
                    <button onClick={attemptLogin} className="text-sm w-80 mt-2 mb-5 font-bold bg-purple-500 h-9 rounded-lg text-white">Sign in</button>

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
