import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ButtonGender() {
  const [sexe, setSexe] = React.useState('');

  const handleChange = (event) => {
    setSexe(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sexe</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sexe}
          label="Sexe"
          onChange={handleChange}
        >
          <MenuItem value={10}>Homme</MenuItem>
          <MenuItem value={20}>Femme</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}