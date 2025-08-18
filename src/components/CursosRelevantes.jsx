import { Box, Button, IconButton, List, ListItem, TextField } from "@mui/material"
import dayjs from "dayjs"
import { useState } from "react"
import Modal from "./Modal"
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { v4 as uuidv4 } from 'uuid';
import ModalForm from "./ModalForm";
import { setDadosFormulario } from "../hooks/onChangeInputs";
import BasicDatePicker from "./BasicDatePicker";
import RadioButtonsGroup from "./RadioButtonsGroup";


const CursosRelevantes = () => {
    const [modalCursos, setModalCursos] = useState(false)
    const [modalFormAddCurso, setModalFormAddCurso] = useState(false)
    const [modalFormEditarCurso, setModalFormEditarCurso] = useState(false)
    const [dataInicio, setDataInicio] = useState(dayjs())
    const [dataConclusao, setDataConclusao] = useState(dayjs())
    const [andamentoCurso, setAndamentoCurso] = useState(false)
    const [listaCursos, setListaCursos] = useState([
        {
            id: uuidv4(),
            nomeDoCurso: "Bootcamp Desenvolvedor Web Full Stack",
            instituicao: "Labenu",
            descricao: "Programa com mais de 1000 horas de experiência prática em desenvolvimento Full Stack, utilizando metodologias ágeis (Scrum e Kanban)",
            conteudos: ["Frontend: HTML, CSS, JavaScript, React, Styled-Components, React Hooks, consumo de APIs REST, HTTP", "Backend: Node.js, Knex, TypeScript, MySQL, SQL, Firebase", "Ferramentas e Testes: Git, GitHub, AWS, Jest, testes unitários"],
            dataInicio: dayjs(),
            dataConclusao: dayjs()

        }
    ])
    const [novoCurso, setNovoCurso] = useState({
        id: '',
        nomeDoCurso: "",
        instituicao: "",
        descricao: "",
        conteudos: [],
    })

    const mesesDoAno = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const bodyElement = document.body;
    if (!modalCursos) bodyElement.style.overflow = ''

    const ativarDesativarModalAddCurso = () => {
        setModalCursos(!modalCursos)
        setModalFormAddCurso(!modalFormAddCurso)
    }

    const adicionarNovoCurso = (e) => {
        e.preventDefault()
        setListaCursos([...listaCursos,
        {
            ...novoCurso,
            id: uuidv4,
            dataInicio,
            dataConclusao
        }])
        ativarDesativarModalAddCurso()
        limparForm()
    }

    const salvarEdicao = (e) => {
        e.preventDefault()

        const novaListadeCurso = listaCursos.map(curso => {
            if (curso.id = novoCurso.id) {
                return {
                    ...novoCurso,
                    dataConclusao,
                    dataInicio
                }
            } else {
                return curso
            }
        })

        setListaCursos(novaListadeCurso)
        setModalFormEditarCurso(!modalFormEditarCurso)
        limparForm()
    }

    const cancelarEdicao = () => {
        limparForm()
        setModalFormEditarCurso(!modalFormEditarCurso)
    }

    const limparForm = () => {
        setNovoCurso({
            id: '',
            nomeDoCurso: "",
            instituicao: "",
            descricao: "",
            conteudos: [],
        })
        setDataInicio(dayjs())
        setDataConclusao(dayjs())
    }

    const ativarmodalEditarCurso = (id) => {
        const curso = listaCursos.find(curso => {
            return curso.id == id
        })

        setNovoCurso({
            ...curso,
        })
        setDataInicio(curso.dataInicio)
        setDataConclusao(curso.dataConclusao)
        setModalFormEditarCurso(!modalFormEditarCurso)

    }

    const apagarFormacao = (id) => {
        const novoArray = listaCursos.filter(formacao => {
            return formacao.id != id
        })
        setListaCursos(novoArray)
    }


    return (
        <section className='flex p-8 flex-col items-start border-b-2 border-gray-400 w-full text-left'>
            <h2 className="text-2xl  font-bold  text-sky-700 ">
                Cursos Relevantes
            </h2>

            {
                listaCursos?.map((curso, i) => (
                    <div className="w-full flex flex-col items-start" key={i}>
                        <h3 className='font-bold'>{curso.nomeDoCurso}</h3>
                        <p>{curso.instituicao}
                            ({mesesDoAno[(curso.dataInicio).get("month")]}/{(curso.dataInicio).get("year")} -
                            {mesesDoAno[(curso.dataConclusao).get("month")]}/{(curso.dataConclusao).get("year")})
                        </p>
                        <p className='text-left'>
                            {curso.descricao}.
                        </p>
                        <p className='text-left'>
                            Conteúdo abordado:
                        </p>
                        <ul className='text-left list-disc ml-7'>
                            {
                                curso.conteudos?.map((conteudo, i) => (
                                    <li key={i}> {conteudo}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
            <Button
                variant="contained"
                color="success" onClick={() => setModalCursos(!modalCursos)}
                className="self-center">
                Alterar
            </Button>


            {
                modalCursos &&
                <Modal close={() => setModalCursos(!modalCursos)} blockScroll={modalCursos}>
                    <h2 className="text-2xl  font-bold  text-sky-700 ">
                        Cursos Relevantes
                    </h2>
                    {
                        listaCursos?.map((curso, i) => (
                            <div className="w-full flex flex-col items-start" key={i}>
                                <h3 className='font-bold'>{curso.nomeDoCurso}</h3>
                                <p>{curso.instituicao}</p>
                                <div className="w-full flex ">
                                    <IconButton aria-label="delete" onClick={() => ativarmodalEditarCurso(curso.id)} >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={() => apagarFormacao(curso.id)} >
                                        <DeleteIcon />
                                    </IconButton>
                                </div>

                            </div>
                        ))
                    }
                    <Button variant="outlined" size="small" onClick={ativarDesativarModalAddCurso}>
                        <AddIcon />
                        Adicionar
                    </Button>
                </Modal>
            }
            {
                modalFormAddCurso &&
                <ModalForm close={ativarDesativarModalAddCurso} acao={adicionarNovoCurso} blockScroll={modalFormAddCurso}>
                    <h2 className="text-2xl  font-bold  text-sky-700 ">
                        Adicionar Curso
                    </h2>
                    <TextField
                        id="curso"
                        label="Curso"
                        variant="outlined"
                        value={novoCurso.nomeDoCurso}
                        onChange={(e) => setDadosFormulario('nomeDoCurso', e.target.value, setNovoCurso, novoCurso)}
                    />
                    <TextField
                        id="instituicao"
                        label="Instituição"
                        variant="outlined"
                        value={novoCurso.instituicao}
                        onChange={(e) => setDadosFormulario('instituicao', e.target.value, setNovoCurso, novoCurso)}
                    />
                    <TextField
                        id="descricao"
                        label="Descricao"
                        variant="outlined"
                        value={novoCurso.cidade}
                        onChange={(e) => setDadosFormulario('descricao', e.target.value, setNovoCurso, novoCurso)}
                    />
                    <Box >
                        <BasicDatePicker
                            valorInicio={dataInicio}
                            valorTermino={dataConclusao}
                            changeInicio={(newValue) => setDataInicio(newValue)}
                            changeTermino={(newValue) => setDataConclusao(newValue)}
                        />
                    </Box>
                    <RadioButtonsGroup andamento={andamentoCurso} change={() => setAndamentoCurso(!andamentoCurso)} />
                </ModalForm>
            }
            {
                modalFormEditarCurso &&
                <ModalForm close={cancelarEdicao}
                    blockScroll={modalFormEditarCurso}
                    acao={salvarEdicao}
                >
                    <h2 className="text-2xl  font-bold  text-sky-700 ">
                        Editar Curso
                    </h2>
                    <TextField
                        id="curso"
                        label="Curso"
                        variant="outlined"
                        value={novoCurso.nomeDoCurso}
                        onChange={(e) => setDadosFormulario('nomeDoCurso', e.target.value, setNovoCurso, novoCurso)}
                    />
                    <TextField
                        id="instituicao"
                        label="Instituição"
                        variant="outlined"
                        value={novoCurso.instituicao}
                        onChange={(e) => setDadosFormulario('instituicao', e.target.value, setNovoCurso, novoCurso)}
                    />
                    <TextField
                        id="descricao"
                        label="Descricao"
                        variant="outlined"
                        value={novoCurso.descricao}
                        onChange={(e) => setDadosFormulario('descricao', e.target.value, setNovoCurso, novoCurso)}
                    />
                    <Box >
                        <BasicDatePicker
                            valorInicio={dataInicio}
                            valorTermino={dataConclusao}
                            changeInicio={(newValue) => setDataInicio(newValue)}
                            changeTermino={(newValue) => setDataConclusao(newValue)}
                        />
                    </Box>
                    <RadioButtonsGroup andamento={andamentoCurso} change={() => setAndamentoCurso(!andamentoCurso)} />
                    <div className="">
                        <p>Conteudos abordados:</p>
                        {
                            novoCurso.conteudos?.map(conteudo => {
                                return (
                                    <div>
                                        {conteudo}
                                    </div>)
                            })
                        }
                    </div>
                </ModalForm>
            }
        </section>
    )
}

export default CursosRelevantes