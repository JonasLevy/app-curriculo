import React, { useState } from "react";
import Modal from "./Modal";
import { Button, TextField } from "@mui/material";

const ResumoProfissional = () => {
    const [modal, setModal] = useState(false)
    const [texto, setTexto] = useState("Estudante de Análise e Desenvolvimento de Sistemas, com foco em programação e desenvolvimento web. Possuo conhecimentos em HTML, CSS, JavaScript, TypeScript e React, além de experiência prática no consumo de APIs e desenvolvimento de aplicações web. Tenho noções de backend utilizando Node.js e Express, e conhecimentos em SQL para manipulação de bancos de dados relacionais. Busco oportunidades para aplicar minhas habilidades em projetos reais e continuar aprendendo em um ambiente colaborativo e inovador.")
    return (
        <section className='flex p-8 flex-col items-start border-b-2 border-gray-400'>
            <h2 className="text-2xl  font-bold  text-sky-700 ">
                Resumo Profissional
            </h2>
            <p className='text-left'>
                {texto}
            </p>
            <Button variant="contained" color="success" onClick={() => setModal(!modal)} className="self-center">
                Alterar
            </Button>
            {modal &&
                <Modal close={() => setModal(!modal)}>
                    <h2 className="text-2xl  font-bold  text-sky-700 ">
                        Resumo Profissional
                    </h2>
                    <TextField
                        id="outlined-multiline-static"
                        label="Resumo"
                        multiline
                        rows={10}
                        defaultValue="Default Value"
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                    />
                </Modal>}
        </section>
    )
}

export default ResumoProfissional