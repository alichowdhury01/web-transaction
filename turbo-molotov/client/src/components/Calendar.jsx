import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function ViewsDatePicker() {
  const [value, setValue] = React.useState(dayjs('2022-04-07'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >


        <DatePicker
          views={['year', 'month', 'day']}
          label="Date de naissance"
          value={value}
          inputFormat="YYYY-MM-DD"
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField name="dateNaissance" {...params} id="dateNaissance" helperText={null} />}
        />

    </LocalizationProvider>
  );
}