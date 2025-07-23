import { useEffect, useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function BasicDatePicker({ valorInicio, valorTermino, changeInicio, changeTermino }) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label="Inicio"
          format="MM - YYYY"
          value={valorInicio}
          onChange={(newValue) => changeInicio(newValue)}
          views={['month', 'year']}
        />
      </DemoContainer>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label="Conclusão"
          format="MM - YYYY"
          value={valorTermino}
          onChange={(newValue) => changeTermino(newValue)}
          views={['month', 'year']}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}