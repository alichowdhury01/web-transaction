import React from 'react'
import { Box, Typography} from "@mui/material";
import { width } from '@mui/system';

const Membre = () => {
  return (
    <Box
      bgcolor={'#1f143d'}
      width={'100vw'}
      display="flex"
      flexDirection="column">
        <Box
          bgcolor='#1f143d'
          display="flex"
          flexDirection="column"
          width='65vw'
          margin='auto'
          >
          <Typography sx={{color:'#fff', marginBottom:'1rem', marginTop: '1rem', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="h2">Mon tableau de bord</Typography>
          <Typography sx={{color:'#fff', marginBottom:'1rem', marginTop: '1rem'}} variant="p">Bonjour, cher client !</Typography>
          <Typography sx={{color:'#fff', width:'70%'}} variant="p">Le Tableau de bord du compte vous donne un aperçu de l'activité récente dans votre compte et vous permet de mettre à jour vos informations. Cliquez sur un lien ci-dessous pour voir ou modifier vos informations.</Typography>
          <Typography sx={{color:'#fff', textAlign:'center', width:'100%', marginTop:'3rem', marginBottom:'3rem', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="h1">Mon compte</Typography>
          <Typography sx={{color:'#fff', marginBottom:'1rem', marginTop: '1rem', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="p">Informations du compte</Typography>

          <Box
            bgcolor='#0c0020'
            display="flex"
            flexDirection="column"
            width='100%'
            margin='auto'
            padding='1rem'
            >
            <Typography sx={{color:'#fff', margin:'1rem 3rem 1rem 3rem'}} variant="p">INFORMATIONS DE CONTACT</Typography>
            </Box>

        </Box>

        
    </Box>
  )
}

export default Membre