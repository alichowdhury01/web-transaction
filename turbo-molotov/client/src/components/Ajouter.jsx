import React from 'react'
import { Button, Typography, TextField, Box } from '@mui/material'

const Ajouter = () => {
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
            id="id"
            label="ID"
            name="id"
            autoComplete="id"
            autoFocus
        />
        <TextField

            margin="normal"
            required
            fullWidth
            id="nom"
            label="Nom"
            name="nom"
            autoComplete="nom"
            autoFocus
        />

        <TextField
            margin="normal"
            required
            fullWidth
            id="prenom"
            label="Prénom"
            name="prenom"
            autoComplete="prenom"
            autoFocus
        />

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
            Ajouter
        </Button>


    </Box>
  )
}

export default Ajouter