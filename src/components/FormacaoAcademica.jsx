import React, { useState } from "react";
import Modal from "./Modal";
import { Box, Button, IconButton, TextField } from "@mui/material";
import BasicDatePicker from "./BasicDatePicker";
import RadioButtonsGroup from "./RadioButtonsGroup";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ModalForm from "./ModalForm";

const FormacaoAcademica = () => {
    const [modal, setModal] = useState(false)
    const [modalForm, setModalForm] = useState(false)
    const [formacoes, setFormacoes] = useState([{
        curso: "Análise e Desenvolvimento de Sistemas (Presencial)",
        instituicao: "UniAteneu",
        cidade: "Fortaleza/CE",
        inicio: "agosto/2024",
        termino: "dezembro/2025",
        concluido: false,
    }])
    const [novaFormacao, setNovaFormacao] = useState({
        curso: "",
        instituicao: "",
        cidade: "",
        inicio: "",
        termino: "",
        concluido: false,
    })

    const ativarModalForm = () => {
        setModal(!modal)
        setModalForm(!modalForm)
    }

    const setDadosFormulario = (key, value) => {
        const dadosDoForm = {
            ...novaFormacao,
            [key]: value
        }
        setNovaFormacao(dadosDoForm)
    }

    return (
        <section className='flex p-8 flex-col items-start border-b-2 border-gray-400 w-full'>
            <h2 className="text-2xl  font-bold  text-sky-700 ">
                Formação Acadêmica
            </h2>
            {formacoes.map((formacao, i) => (
                <div className="w-full flex flex-col items-start" key={i}>
                    <h3 className='font-bold'>
                        {formacao.curso}:
                    </h3>
                    <p>{formacao.instituicao} – {formacao.cidade}</p>
                    <p>Início: {formacao.inicio} – Em andamento | Previsão de conclusão: {formacao.termino}</p>
                </div>
            ))}
            <Button variant="contained" color="success" onClick={() => setModal(!modal)} className="self-center">
                Alterar
            </Button>
            {modal &&
                <Modal close={() => setModal(!modal)}>
                    {formacoes.map((formacao, i) => (
                        <div className="w-full flex flex-col items-start" key={i}>
                            <h3 className='font-bold'>
                                {formacao.curso}:
                            </h3>
                            <p>{formacao.instituicao} – {formacao.cidade}</p>
                            <div className="w-full flex ">
                                <IconButton aria-label="delete">
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>
                    ))}
                    <Button variant="outlined" size="small" onClick={() => ativarModalForm()}>
                        <AddIcon />
                        Adicionar
                    </Button>
                </Modal>}
            {modalForm &&
                <ModalForm close={() => ativarModalForm()}>
                    <h2 className="text-2xl  font-bold  text-sky-700 ">
                        Formação Acadêmica
                    </h2>
                    <TextField
                        id="outlined-basic"
                        label="Curso"
                        variant="outlined"
                        value={novaFormacao.curso}
                        onChange={(e) => setDadosFormulario('curso', e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Instituição"
                        variant="outlined"
                        value={novaFormacao.instituicao}
                        onChange={(e) => setDadosFormulario('instituicao', e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Cidade/UF"
                        variant="outlined"
                        value={novaFormacao.cidade}
                        onChange={(e) => setDadosFormulario('cidade', e.target.value)}
                    />
                    <Box >
                        <BasicDatePicker
                            valorInicio={novaFormacao.inicio}
                            valorTermino={novaFormacao.termino} 
                            change={()=>setDadosFormulario()}/>
                    </Box>
                    <RadioButtonsGroup />

                </ModalForm>}
        </section>
    )
}

export default FormacaoAcademica;