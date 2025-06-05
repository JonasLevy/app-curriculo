import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaNewspaper } from "react-icons/fa";
import Modal from "./Modal";


const Cabecalho = () => {
    const styleH1 = " flex flex-col border-b-2 border-gray-400 p-7 w-full items-center"
    const [modal, setModal] = useState(false)
    const[nome, setnome] = useState("Digite Seu Nome")
    return (
        <header className={styleH1} > 
            <h1 className="text-4xl font-bold  text-sky-700 ms-0.5">
                {nome}
            </h1>
            <p>85 98630-9152 - 85 99267-2678 | jonaslevy0408@gmail.com </p>
            <p className='flex text-center justify-center items-center gap-3 '>
                <a href='https://www.google.com' target='_blank' className='flex items-center gap-1'><FaLinkedin className='text-sky-700' /> Linkedin</a>
                <a href='https://www.google.com' target='_blank' className='flex items-center gap-1'><FaGithub className='text-sky-700' /> Github</a>
                <a href='https://www.google.com' target='_blank' className='flex items-center gap-1'><FaNewspaper className='text-sky-700' /> Lattes</a>
            </p>
            <button onClick={()=>setModal(!modal)} className="bg-green-500 w-fit p-1">Alterar</button>
            {modal && <Modal close={()=>setModal(!modal)}/>}
        </header>
    )
}

export default Cabecalho