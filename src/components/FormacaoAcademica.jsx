import React, { useState } from "react";
import Modal from "./Modal";
import { Box, Button, IconButton, TextField } from "@mui/material";
import BasicDatePicker from "./BasicDatePicker";
import RadioButtonsGroup from "./RadioButtonsGroup";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ModalForm from "./ModalForm";
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';

const FormacaoAcademica = () => {
    const [modal, setModal] = useState(false)
    const [modalForm, setModalForm] = useState(false)
    const [modalFormEditar, setModalFormEditar] = useState(false)
    const [dataInicio, setDataInicio] = useState(dayjs())
    const [dataTermino, setDataTermino] = useState(dayjs())
    const [andamentoCurso, setAndamentoCurso] = useState(false)
    const [formacoes, setFormacoes] = useState([{
        curso: "Análise e Desenvolvimento de Sistemas (Presencial)",
        instituicao: "UniAteneu",
        cidade: "Fortaleza/CE",
        inicio: dayjs(),
        termino: dayjs(),
        concluido: false,
        id:uuidv4()
    }])
    const [novaFormacao, setNovaFormacao] = useState({
        curso: "",
        instituicao: "",
        cidade: "",
        inicio: dayjs(),
        termino: dayjs(),
        concluido: false,
        id:""
    })
    const mesesDoAno = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const ativarModalForm = () => {
        setModal(!modal)
        setModalForm(!modalForm)
    }


    const ativarModalFormEditar = (i) => {
        setModalForm(!modalForm)
        setModalFormEditar(!modalFormEditar)
        setNovaFormacao(formacoes[i])
    }

    const setDadosFormulario = (key, value) => {
        const dadosDoForm = {
            ...novaFormacao,
            [key]: value
        }
        setNovaFormacao(dadosDoForm)
    }

    const limparForm = () => {
        setNovaFormacao({
            curso: "",
            instituicao: "",
            cidade: "",
            inicio: "",
            termino: "",
            concluido: false,
            id:""
        })
        setDataInicio(dayjs())
        setDataTermino(dayjs())
    }

    const inserirNovaFormacao = (e) => {
        e.preventDefault()
        setFormacoes([...formacoes, {
            ...novaFormacao,
            inicio: dataInicio,
            termino: dataTermino,
            concluido: andamentoCurso,
            id:uuidv4()
        }])
        limparForm()
        setModalForm(false)
    }

    const salvarAlteracao = (e) =>{
        e.preventDefault()
        const arrayFormacoes = formacoes.map((formacao,i)=>{
            if(formacao.id == novaFormacao.id){
                return novaFormacao
            }
            return formacao
        })
        setFormacoes(arrayFormacoes)
        ativarModalFormEditar()
        console.log(formacoes)
    }

    const apagarFormacao = (id) =>{
        const novoArray = formacoes.filter(formacao=>{
            return formacao.id != id
        })
       setFormacoes(novoArray)
    }



    return (
        <section className='flex p-8 flex-col items-start border-b-2 border-gray-400 w-full'>
            <h2 className="text-2xl  font-bold  text-sky-700 ">
                Formação Acadêmica
            </h2>
            {formacoes && formacoes.map((formacao, i) => (
                <div className="w-full flex flex-col items-start" key={i}>
                    <h3 className='font-bold'>
                        {formacao.curso}:
                    </h3>
                    <p>{formacao.instituicao} – {formacao.cidade}</p>
                    <p>
                        Início: {mesesDoAno[formacao.inicio.get('month')]}/{formacao.inicio.get('year')}
                        {formacao.concluido ? " | Concluido:" : " Em andamento | Previsão de conclusão: "} 
                        {mesesDoAno[formacao.termino.get('month')]}/{formacao.termino.get('year')}
                    </p>
                </div>
            ))}
            <Button variant="contained" color="success" onClick={() => setModal(!modal)} className="self-center">
                Alterar
            </Button>
            {modal &&
                <Modal close={() => setModal(!modal)}>
                    {formacoes && formacoes.map((formacao, i) => (
                        <div className="w-full flex flex-col items-start" key={i}>
                            <h3 className='font-bold'>
                                {formacao.curso}:
                            </h3>
                            <p>{formacao.instituicao} – {formacao.cidade}</p>
                            <div className="w-full flex ">
                                <IconButton aria-label="delete" onClick={() => ativarModalFormEditar(i)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete" onClick={()=>apagarFormacao(formacao.id)}>
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
                <ModalForm close={() => ativarModalForm()} acao={inserirNovaFormacao}>
                    <h2 className="text-2xl  font-bold  text-sky-700 ">
                        Formação Acadêmica
                    </h2>
                    <TextField
                        id="curso"
                        label="Curso"
                        variant="outlined"
                        value={novaFormacao.curso}
                        onChange={(e) => setDadosFormulario('curso', e.target.value)}
                    />
                    <TextField
                        id="instituicao"
                        label="Instituição"
                        variant="outlined"
                        value={novaFormacao.instituicao}
                        onChange={(e) => setDadosFormulario('instituicao', e.target.value)}
                    />
                    <TextField
                        id="cidade"
                        label="Cidade/UF"
                        variant="outlined"
                        value={novaFormacao.cidade}
                        onChange={(e) => setDadosFormulario('cidade', e.target.value)}
                    />
                    <Box >
                        <BasicDatePicker
                            valorInicio={dataInicio}
                            valorTermino={dataTermino}
                            changeInicio={(newValue) => setDataInicio(newValue)}
                            changeTermino={(newValue) => setDataTermino(newValue)}
                        />
                    </Box>
                    <RadioButtonsGroup andamento={andamentoCurso} change={() => setAndamentoCurso(!andamentoCurso)} />
                </ModalForm>
            }
            {modalFormEditar &&
                <ModalForm close={() => ativarModalFormEditar()} acao={salvarAlteracao}>
                    <h2 className="text-2xl  font-bold  text-sky-700 ">
                        Formação Acadêmica
                    </h2>
                    <TextField
                        id="curso"
                        label="Curso"
                        variant="outlined"
                        value={novaFormacao.curso}
                        onChange={(e) => setDadosFormulario('curso', e.target.value)}
                    />
                    <TextField
                        id="instituicao"
                        label="Instituição"
                        variant="outlined"
                        value={novaFormacao.instituicao}
                        onChange={(e) => setDadosFormulario('instituicao', e.target.value)}
                    />
                    <TextField
                        id="cidade"
                        label="Cidade/UF"
                        variant="outlined"
                        value={novaFormacao.cidade}
                        onChange={(e) => setDadosFormulario('cidade', e.target.value)}
                    />
                    <Box >
                        <BasicDatePicker
                            valorInicio={dataInicio}
                            valorTermino={dataTermino}
                            changeInicio={(newValue) => setDataInicio(newValue)}
                            changeTermino={(newValue) => setDataTermino(newValue)}
                        />
                    </Box>
                    <RadioButtonsGroup andamento={andamentoCurso} change={() => setAndamentoCurso(!andamentoCurso)} />
                </ModalForm>
            }
        </section>
    )
}

export default FormacaoAcademica;