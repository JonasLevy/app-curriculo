import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RadioButtonsGroup({andamento, change}) {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Cursando"
        name="radio-buttons-group"
        onChange={change}
        value={andamento}
      >
        <FormControlLabel value={false} control={<Radio />} label="Cursando" />
        <FormControlLabel value={true} control={<Radio />} label="Concluido" />
      </RadioGroup>
    </FormControl>
  );
}
