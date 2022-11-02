import React, { ChangeEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { LoginPageProp } from ".";
import { logo } from "../../assets";
import { SizedBox } from "../../components";
import './styles/Login.css'
import { toast } from 'react-toastify';
export const LoginPage = (props: LoginPageProp) => {
    const [cookies, setCookie] = useCookies(['metawise_auth', 'metawise_user'])
    const [deviceId, setDeviceId] = useState(process.env.DEVICE_ID)
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

    const handleChangeId = (e: any) => {
        // @ts-ignore
        setDeviceId(e.target.value)
    }

    const attemptLogin = () => {
        if(props.loading){
            return
        }
        if(!email || email.length < 6){
            alert('Please enter a valid email') // TODO: change this to a better option
            return
        }
        if(!password || password.length < 6){
            alert('Please enter your password')
            return
        }
        props.neuroLogin(deviceId, {email, password})
        .catch((err: any) => {
            console.log(err)
            toast.error(err.message, {})
        })
        .then((data: any) => {
            setCookie('metawise_auth', data.user.Aa, {path: '/'})
            setCookie('metawise_user', data.user.email, {path: '/'})
            window.location.href = '/track'
        })
    }

    const handleTough = () => {
        toast.error('Thats tough bro!')
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
                    
                    <SizedBox height={20} />
                    <div className="flex flex-row items-center">
                        <p className="text-sm mr-5">Select Device Id</p>
                        <select value={deviceId} onChange={handleChangeId} className="border-slate-100 border-2 p-2 bg-slate-50 rounded-xl">
                            <option value={'26695cb90c0bfd619fc488adbe38cc8a'}>Daniel / Ramzi</option>
                            <option value={'39068e241c84448fcd37332d407c1f49'}>Gustav</option>
                        </select>
                    </div>

                    <SizedBox height={10} />
                    <button onClick={attemptLogin} className={(props.loading ? "bg-slate-400" : "bg-purple-500" ) +" text-sm w-80 mt-2 mb-5 font-bold h-9 rounded-lg text-white"}>Sign in</button>
                    
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
