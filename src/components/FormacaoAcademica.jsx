import React, { useState } from "react";
import Modal from "./Modal";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BasicDatePicker from "./BasicDatePicker";
import RadioButtonsGroup from "./RadioButtonsGroup";

const FormacaoAcademica = () => {
    const [modal, setModal] = useState(false)
    const [anoInicio, setAnoInicio] = useState('');
    const [anoConclusao, setAnoConclusao] = useState('');
    const [mesInicio, setMesInicio] = useState('Agosto');
    const [mesConclusao, setMesConclusao] = useState('');


    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const mesesDoAno = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    return (
        <section className='flex p-8 flex-col items-start border-b-2 border-gray-400 w-full'>
            <h2 className="text-2xl  font-bold  text-sky-700 ">
                Formação Acadêmica
            </h2>
            <h3 className='font-bold'>
                Análise e Desenvolvimento de Sistemas (Presencial):
            </h3>
            <p>UniAteneu – Fortaleza/CE</p>
            <p>Início: {mesInicio}/2024 – Em andamento | Previsão de conclusão: dezembro/2026</p>
            <button onClick={() => setModal(!modal)} className="bg-green-500 w-fit p-1 print:block self-center">
                Alterar
            </button>
            {modal &&
                <Modal close={() => setModal(!modal)}>
                    <h2 className="text-2xl  font-bold  text-sky-700 ">
                        Formação Acadêmica
                    </h2>
                    <TextField
                        id="outlined-basic"
                        label="Curso"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Instituição"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Cidade/UF"
                        variant="outlined"
                    />
                    <Box fullWidth >
                       <BasicDatePicker/>
                    </Box>
                    <RadioButtonsGroup/>
                </Modal>}
        </section>
    )
}

export default FormacaoAcademica;