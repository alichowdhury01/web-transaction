import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import {
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";
import { CartCard } from "../../components";
import React from "react";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
 const [picture, setPicture] = React.useState([]); 

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
      console.log("oo"+result);
      
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

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

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
                <CartCard key={item.id} images={item.itemImage} title={item.title} id={item.id} price={item.price} quantity={item.quantity} />
              ))}
            </Box>
          )}

          {/* ACTIONS */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography color={'#fff'} fontWeight="bold">SUBTOTAL</Typography>
              <Typography color={'#fff'} fontWeight="bold">${totalPrice}</Typography>
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