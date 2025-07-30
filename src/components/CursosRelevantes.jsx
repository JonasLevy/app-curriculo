import { Button, IconButton } from "@mui/material"
import dayjs from "dayjs"
import { useState } from "react"
import Modal from "./Modal"
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';


const CursosRelevantes = () => {
    const [modalCursos, setModalCursos] = useState(false)
    const [modalFormAddCurso, setModalFormAddCurso] = useState(false)
    const [modalFormEditarCurso, setModalFormEditarCurso] = useState(false)
    const [dataInicio, setDataInicio] = useState(dayjs())
    const [dataTermino, setDataTermino] = useState(dayjs())
    const [andamentoCurso, setAndamentoCurso] = useState(false)
    const [listaCursos, setListaCursos] = useState([
        {
            nomeDoCurso: "Bootcamp Desenvolvedor Web Full Stack",
            instituição: "Labenu",
            Descricao: "Programa com mais de 1000 horas de experiência prática em desenvolvimento Full Stack, utilizando metodologias ágeis (Scrum e Kanban). Conteúdo abordado:",
            conteudos: ["Frontend: HTML, CSS, JavaScript, React, Styled-Components, React Hooks, consumo de APIs REST, HTTP", "Backend: Node.js, Knex, TypeScript, MySQL, SQL, Firebase", "Ferramentas e Testes: Git, GitHub, AWS, Jest, testes unitários"],
            dataInicio: dayjs(),
            dataConclusao: dayjs()

        }
    ])

    const mesesDoAno = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const bodyElement = document.body;
    if (!modalCursos) bodyElement.style.overflow = ''


    return (
        <section className='flex p-8 flex-col items-start border-b-2 border-gray-400 w-full text-left'>
            <h2 className="text-2xl  font-bold  text-sky-700 ">
                Cursos Relevantes
            </h2>

            {
                listaCursos?.map((curso, i) => (
                    <div className="w-full flex flex-col items-start" key={i}>
                        <h3 className='font-bold'>{curso.nomeDoCurso}</h3>
                        <p>{curso.instituição}
                            ({mesesDoAno[(curso.dataInicio).get("month")]}/{(curso.dataInicio).get("year")} -
                            {mesesDoAno[(curso.dataConclusao).get("month")]}/{(curso.dataConclusao).get("year")})
                        </p>
                        <p className='text-left'>
                            {curso.Descricao}. Conteúdo abordado:
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
                                <p>{curso.instituição}</p>
                                <div className="w-full flex ">
                                    <IconButton aria-label="delete" >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" >
                                        <DeleteIcon />
                                    </IconButton>
                                </div>

                            </div>
                        ))
                    }
                </Modal>
            }
        </section>
    )
}

export default CursosRelevantes