import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { shades } from "../../theme";

export default function SideCard() {


  return (
    <Box  >
    <Card sx={{ display: "flex", bgcolor:"#0c0020" }}>
        <Box display='flex' flexDirection= 'column' m="auto" borderRadius="30px" >
            <CardMedia sx={{borderRadius:"5px", }}  component="img" src='https://cdn.cdkeys.com/media/wysiwyg/Home_page_features/HOGWARTS_LEGACY_PC_-_137x76.png'/>
        </Box>

    </Card>
    </Box>
  );
}