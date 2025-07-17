import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaNewspaper } from "react-icons/fa";
import Modal from "./Modal";
import { Button, TextField } from "@mui/material"


const Cabecalho = () => {
    const styleH1 = " flex flex-col border-b-2 border-gray-400 p-7 w-full items-center"
    const [modal, setModal] = useState(false)
    const [formDados, setFormdados] = useState({
        nome: "Digite seu Nome",
        email: "seuEmail@gmail.com",
        telefone: "8599999-9999",
        github: "git",
        linkedin: "Linkedin",
        lattes: "Lattes"
    })

    const setDadosFormulario = (key, value) => {
        const newObject = {
            ...formDados,
            [key]: value
        }
        setFormdados(newObject)
    }

    return (
        <header className={styleH1} >
            <h1 className="text-4xl font-bold  text-sky-700 ms-0.5">
                {formDados.nome}
            </h1>
            <p>{formDados.telefone} | {formDados.email} </p>
            <p className='flex text-center justify-center items-center gap-3 '>
                {formDados.linkedin &&
                    <a href={formDados.linkedin} target='_blank' className='flex items-center gap-1'>
                        <FaLinkedin className='text-sky-700' /> Linkedin
                    </a>
                }
                {formDados.github &&
                    <a href={formDados.github} target='_blank' className='flex items-center gap-1'>
                        <FaGithub className='text-sky-700' /> Github
                    </a>
                }
                {formDados &&
                    <a href={formDados.lattes} target='_blank' className='flex items-center gap-1'>
                        <FaNewspaper className='text-sky-700' /> Lattes
                    </a>
                }
            </p>
            <Button variant="contained" color="success" onClick={() => setModal(!modal)} className="self-center">
                Alterar
            </Button>
            {modal && <Modal close={() => setModal(!modal)}>
                {Object.entries(formDados).map(([key, value]) => (
                    <TextField
                        id="outlined-basic"
                        label={key}
                        variant="outlined"
                        key={key}
                        type="text"
                        value={value}
                        onChange={(e) => setDadosFormulario(key, e.target.value)}
                        placeholder={key}
                        className="m-2"
                    />
                ))}
            </Modal>}
        </header>
    )
}

export default Cabecalho