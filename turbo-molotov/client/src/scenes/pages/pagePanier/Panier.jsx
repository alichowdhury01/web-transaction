import React from 'react'
import { Box, Typography } from '@mui/material'

const Panier = () => {
  return (
    <Box
        display={'flex'}
        flexDirection={'column'}
        width={'100vw'}
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={'#1f143d'}
    >
          <Typography sx={{color:'#fff', margin:'2rem auto 2rem auto', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="h2">MON PANIER</Typography>
    
    </Box>
  )
}

export default Panier