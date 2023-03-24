import * as React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import { productshadow } from '../assets/cardPicture';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function ItemCard(props) {
  const addToCart = () => {
    const item = {
      id : props.id,
      title: props.nom,
      price: props.price
    };
    const existingData = localStorage.getItem("cartItems");
    let cartItems = existingData ? JSON.parse(existingData) : [];
    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <Box display="flex" flexDirection="column" width="20%"  >
        <Box sx={{ width: "100%",  borderRadius:"76px", border:"none"  }}>
        <CardMedia component="img" src={props.imageSrc}  sx={{borderRadius:"5px", zIndex:"1"}} />
        <CardMedia component="img" src={productshadow} sx={{bgcolor:"#1e133c",  mt:"-1px", zIndex:'2'}}/>
        </Box>

        <Box height={"295px"} m="auto" display="flex" flexDirection="column" width="100%" bgcolor="#0c0020" borderRadius='10px' justifyContent="center">
          <Typography sx={{display:"none"}}>{props.id}</Typography>
          <Typography gutterBottom sx={{fontFamily:"montserrat, sans-serif", fontSize:"20px", letterSpacing:"1px", paddingBottom: "0px", margin:"auto", color:"#fff", width:"90%" }} component="p" >
            {props.nom}
          </Typography>
          
           <Typography gutterBottom sx={{lineHeight:"1.5",textDecorationThickness:"auto", letterSpacing:"0.7px", fontWeight:"400", textTransform: "uppercase", fontSize: "14px", fontFamily:"montserrat, sans-serif" ,paddingBottom: "20px", margin:"auto", color:"#fff", width:"90%", height:"auto", textOverflow:"ellipsis",   maxHeight: "90px", overflow: "hidden"}} component="p" >
            {props.descriptions}
          </Typography>
          
          <Divider sx={{bgcolor:"#fff", width:"90%", m:"auto"}}/>
          
          <Typography gutterBottom sx={{fontFamily:"montserrat, sans-serif", fontSize:"20px", letterSpacing:"1px", paddingBottom: "0px", margin:"auto", color:"#fff", width:"90%" }} component="p" >
            {props.prix}
          </Typography> 
          
          <Button sx={{bgcolor:"#14ca8d", m:"auto", width:"95%", color:"#fff"}} onClick={addToCart}>
            <AddShoppingCartIcon sx={{color:"#fff"}}/>
            Ajouter
          </Button>
        </Box>
    </Box>
  )
}

