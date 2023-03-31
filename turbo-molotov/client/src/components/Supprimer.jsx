import React from 'react'
import { Button, TextField, Box } from '@mui/material'

const Supprimer = () => {
    


  return (
    <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="100%"
        margin="auto"

    >

        <TextField
            margin="normal"
            required
            fullWidth
            id="telephone"
            label="Téléphone"
            name="telephone"
            autoComplete="telephone"
            autoFocus
        />

        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Supprimer
        </Button>


    </Box>
  )
}

export default Supprimer