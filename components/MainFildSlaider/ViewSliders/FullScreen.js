import React from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Fullscreen from "fullscreen-react";

const FullScreenDiv = ({screen,openDiv,children}) =>{
    return ( <>
    {openDiv
        ? <Fullscreen isEnter={openDiv}>{children}</Fullscreen>
        : <>{children}</>
    }
    <style jsx>{`
        .full {
            background: #00000047;
        }
    `}</style>
    </>)
}

export default FullScreenDiv