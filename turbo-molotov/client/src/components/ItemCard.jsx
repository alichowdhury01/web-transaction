import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import { productshadow } from '../assets/cardPicture';

import { color } from '@mui/system';

export default function ItemCard(props) {
  return (
    <Box display="flex" flexDirection="column" width="20%"  >
        <Box sx={{ width: "100%",  borderRadius:"76px", border:"none"  }}>
        <CardMedia component="img" image={props.imageSrc}  sx={{borderRadius:"5px", zIndex:"1"}} />
        <CardMedia component="img" image={productshadow} sx={{bgcolor:"#1e133c",  mt:"-1px", zIndex:'2'}}/>
        </Box>

        <Box height="220px" m="auto" display="flex" flexDirection="column" width="100%" bgcolor="#0c0020" borderRadius='10px' justifyContent="center">
    
            <Typography gutterBottom sx={{lineHeight:"21px",textDecorationThickness:"auto", letterSpacing:"0.7px", fontWeight:"400", textTransform: "uppercase", fontSize: "14px", fontFamily:"montserrat, sans-serif" ,paddingBottom: "100px", margin:"auto", color:"#fff", width:"90%", height:"55px"}} component="p" >
                {props.details}
            </Typography>

            <Divider sx={{bgcolor:"#fff", width:"90%", m:"auto"}}/>

            <Typography gutterBottom sx={{fontFamily:"montserrat, sans-serif", fontSize:"20px", letterSpacing:"1px",  paddingBottom: "0px", margin:"auto", color:"#fff", width:"90%" }} component="p" >
                {props.prize}
            </Typography>

            <Button disabled={props.disabledState}  sx={{bgcolor:"#14ca8d", m:"auto", width:"95%", color:"#fff"}}>Ajouter</Button>
        </Box>

    </Box>
  )
}

