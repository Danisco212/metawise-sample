import { returnToDispatch } from "../../api/ApiHelper"
import { NEUROSITY_LOGIN_FAILURE, NEUROSITY_LOGIN_REQUEST, NEUROSITY_LOGIN_SUCCESS } from "./actionTypes"
import { Notion } from '@neurosity/notion'

export type NeurosityLoginProp = {
    email: string
    password: string
}

export const neurosityLoginApiCall = (body: NeurosityLoginProp) => {
    return (dispath: any) => {
        returnToDispatch(dispath, NEUROSITY_LOGIN_REQUEST)
        return new Promise(async (resolve, reject) => {
            const notion = new Notion({
                deviceId: process.env.DEVICE_ID
            });
            notion.login(body)
            .catch(err => {
                console.log(err)
                returnToDispatch(dispath, NEUROSITY_LOGIN_FAILURE, err)
                reject(err)
            })
            .then(res => {
                // console.log('Login successful', res)
                // save the auth token to the cookies
                returnToDispatch(dispath, NEUROSITY_LOGIN_SUCCESS, res)
                resolve(res)
            })
        })
    }
}