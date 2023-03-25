import { Box, Button, Divider, IconButton, Typography, CardMedia } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import {setIsCartOpen, removeFromCart } from "../../state";
import { useNavigate } from "react-router-dom";
import { CartCard } from "../../components";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CartMenu = () => {
 const [picture, setPicture] = React.useState([]);
 const [desiredQuantities, setDesiredQuantities] = useState({});
 const quantityInputRef = useRef(null);


  React.useEffect(() => {
    const getPic = async () => {
    const data = new FormData();
    data.append("action", "getAllArticles");
    try {
      const response = fetch("http://localhost/web-transaction/turbo-molotov/server/article/controlleurArticle.php", {
        method: "POST",
        body: data,
      });
      const result = response.json();
      setPicture(result);     
    } catch (error) {
      console.error(error);
    }
  };
  getPic();
  }, []);
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.price * (desiredQuantities[item.id] || 1);
    return total + itemPrice;
  }, 0);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id }));


    const newCartItems = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    setDesiredQuantities((prev) => {
      const newDesiredQuantities = { ...prev };
      delete newDesiredQuantities[id];
      return newDesiredQuantities;
    });
  };
  

  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="#0c0020"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography color={'#fff'} variant="h3">SHOPPING BAG ({cart.length})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon sx={{ color: "#fff" }} />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          {cartItems.length > 0 && (
            <Box>
              {cartItems.map((item)=> (
                // <CartCard key={item.id} images={item.itemImage} title={item.title} id={item.id} price={item.price} quantity={item.quantity} quantityInCart={1} />
                <Box key={item.id} sx={{ display: 'flex', p:"0.5rem", m:'0.5rem', justifyContent:'space-between', bgcolor:'#fff'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display:'flex', flexDirection: 'column'}}>
                        <Typography   component="div" variant="h5">
                            Titre: {item.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{fontStyle:'italic'}} component="div">
                            Item#: {item.id}
                        </Typography>
                        <Typography  variant="subtitle1"  component="div">
                            {item.price}$
                        </Typography>          
                        <Typography variant="subtitle1" component="div">
                            Qté disponible: {item.quantity}
                        </Typography>
                        <TextField
                            sx={{ width: 100 }}
                            id="outlined-number"
                            label="Quantité"
                            type="number"
                            min={1}
                            variant="outlined"
                            size='small'
                            inputProps={{ min: 1, max: item.quantity }}
                            ref={quantityInputRef}
                            onChange={(event) => {
                              const itemId = item.id;
                              const newQuantity = parseInt(event.target.value);
                              setDesiredQuantities({
                                ...desiredQuantities,
                                [itemId]: newQuantity,
                              });
                            }}
                            value={desiredQuantities[item.id] || 1}
                        />
                        <Typography sx={{display:'none'}} variant="subtitle1" component="div">
                          Total: $ {(item.price * desiredQuantities[item.id]).toFixed(2)}
                        </Typography>
                        <IconButton onClick={() => handleRemoveItem(item.id)} 
                         sx={{width:"1rem", }} >
                            <DeleteIcon  />
                        </IconButton>
                 
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151}}
                    src={item.itemImage}
                />
            </Box>
              ))}
            </Box>
          )}

          {/* ACTIONS */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography color={'#fff'} fontWeight="bold">SUBTOTAL</Typography>
             <Typography color={'#fff'} fontWeight="bold">  ${subtotal.toFixed(2)}</Typography> 
            </FlexBox>
            <Button
              sx={{
                backgroundColor: "#1f143d",
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              onClick={() => {
                navigate("/checkout");
                dispatch(setIsCartOpen({}));
              }}
            >
              PASSER LA COMMANDE
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;