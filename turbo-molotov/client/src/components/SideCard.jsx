import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { color } from '@mui/system';


export default function SideCard(props) {
  return (
    <Box display='flex' flexDirection='row' justifyContent='space-between' >
      <Box sx={{width:"50%", margin:"5px", marginLeft:"10px"}} >
        <CardMedia sx={{borderRadius:"5px"}} component="img" image={props.imageSrc} />
      </Box>

      <Box display='flex'  flexDirection='column' width="50%" height="80px" sx={{ paddingTop:"10px", paddingLeft:"10px", color:"#fff"}} component="div">

          <Typography gutterBottom sx={{textTransform:"uppercase", fontSize:"11px",  paddingTop:"0px", overflow:"hidden", whiteSpace:"now-wrap", wordWrap: "break-word"}} component="p">
            {props.details}
          </Typography>

          <Typography gutterBottom sx={{textTransform:"uppercase", fontSize:"12px", paddingBottom:"0px", marginRight:"auto",fontWeight:"600"}} component="p" >
          {props.title}
          </Typography>

        </Box>
    </Box>
  );
}