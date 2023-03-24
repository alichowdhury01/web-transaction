import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function CartCard(props) {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', p:"0.5rem", m:'0.5rem', justifyContent:'space-between', bgcolor:'#fff'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display:'flex', flexDirection: 'column'}}>
                <Typography   component="div" variant="h5">
                    Titre: {props.title}
                </Typography>
                <Typography variant="subtitle1" sx={{fontStyle:'italic'}} component="div">
                    Item#:  {props.id}
                </Typography>
                <Typography  variant="subtitle1"  component="div">
                    {props.price}$
                </Typography>          
                <Typography variant="subtitle1" component="div">
                    Qté disponible: {props.quantity}
                </Typography>
           <TextField
                    sx={{ width: 100 }}
                    id="outlined-number"
                    label="Quantité"
                    type="number"
                    variant="outlined"
                    size='small'
        
                />
            </Box>

        </Box>
        <CardMedia
            component="img"
            sx={{ width: 151}}
            src={props.images}
        />
    </Box>
    );
}