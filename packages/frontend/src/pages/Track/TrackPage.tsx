import React from "react";
import { Header, StartButton } from "../../components";
import { SideMenu } from "../../components/SideMenu";

export const TrackPage = () => {
    return(
        <div className="h-screen bg-slate-200">
            <Header />
            <div className="flex flex-row w-screen h-screen">
                <SideMenu />
                <div className="pt-24 px-5 flex-1">
                    <div className="flex flex-col items-center justify-center bg-white rounded-xl p-5 h-72">
                        <p className="mb-3">Click the button below to begin EEG data collection </p>
                        <StartButton />
                    </div>
                </div>
            </div>
        </div>
    )
}