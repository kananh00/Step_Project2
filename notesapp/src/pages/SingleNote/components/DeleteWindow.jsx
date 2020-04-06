import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
export const DeleteWindow = ({header, text, operations, closeIcon, close}) => {
    return (
        <div style = {{color: "white"}} className = "modal">
            <header className = "headpart">
                <p className = "header-text">{header}</p>
                {closeIcon && <button onClick ={close} className = "close-btn"><AiOutlineClose/></button>}
            </header>
            <p className = "modal-text">{text}</p>
            {operations}
        </div>
    )
}
export default DeleteWindow;