import React, { useState } from "react";
import Modal from "./Modal";
import { TextField } from "@mui/material";

const ObjetivoProfissional = () => {
    const [modal, setModal] = useState(false)
    const [texto, setTexto] = useState("Atuar na área de Desenvolvimento Web, aplicando meus conhecimentos em frontend e backend para contribuir com o desenvolvimento de aplicações web, com foco em integração de APIs e boas práticas de programação. Busco participar de projetos colaborativos e desafiadores que proporcionem aprendizado contínuo e crescimento profissional.")
    return (
        <section className='flex p-8 flex-col items-start border-b-2 border-gray-400'>
            <h2 className="text-2xl  font-bold  text-sky-700 ">
                Objetivo
            </h2>
            <p className='text-left'>
                {texto}
            </p>
            <button onClick={() => setModal(!modal)} className="bg-green-500 w-fit p-1 print:block self-center">
                Alterar
            </button>
            {modal &&
                <Modal close={() => setModal(!modal)}>
                    <h2 className="text-2xl  font-bold  text-sky-700 ">
                        Objetivo Profissional
                    </h2>
                    <TextField
                        id="outlined-multiline-static"
                        label="Objetivo"
                        multiline
                        rows={10}
                        defaultValue="Default Value"
                        value={texto}
                        onChange={(e)=>setTexto(e.target.value)}
                    />
                </Modal>}
        </section>
    )
}

export default ObjetivoProfissional