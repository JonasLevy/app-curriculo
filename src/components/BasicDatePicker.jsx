import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Inicio" format="MM - YYYY"
/>
      </DemoContainer>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Conclusão" format="MM - YYYY"
 />
      </DemoContainer>
    </LocalizationProvider>
  );
}