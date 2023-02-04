import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, Button, IconButton, Typography, ThemeProvider } from "@mui/material";
import { SearchBar } from "../../components";
import { PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import { shades, theme } from "../../theme";
import { setIsCartOpen } from "../../state";
import deconnexion from "./deconnexion";

export const Navbar2 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    
  return (
    <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    width="100%"
    margin="auto"
    backgroundColor={shades.primary[600]}>
        {/*Upper nav */}
        <Box display="flex"flexDirection="row-reverse" float="right" width={"65%"} margin="auto">
            <Button>
                <Typography component={Link} to={"/signin"} sx={{color:"#fff", textDecoration:"none"}}>
                    Connexion
                </Typography>
            </Button>
            <Button onClick= {deconnexion()}>
                <Typography component={Link} to={"/"} sx={{color:"#fff", textDecoration:"none"}}>
                    Déconnexion
                </Typography>
            </Button>
        </Box>
        {/*Middle nav */}
        <Box display ="flex" flexDirection="row" width="65%" height="80px" margin="auto" justifyContent="space-between" alignItems="center">
            <Box margin="auto auto auto 0" float="left">
                <Button>
                    <Typography component={Link} to={"/"} variant="h2" sx={{color:"#fff", textDecoration:"none"}}>
                        TURBO-MOLOTOV
                    </Typography>
                </Button>
            </Box>
            
            <Box margin="auto">
                <SearchBar />
            </Box>
            <Box display="flex"flexDirection="row"justifyContent="space-between" columnGap="20px"margin="auto 0 auto auto">
                <IconButton sx={{ color: "#fff" }} >
            <PersonOutline />
          </IconButton>
          <Badge badgeContent={cart.length} color="secondary" invisible={cart.length === 0} sx={{"& .MuiBadge-badge": { right: 5, top: 5, padding: "0 4px", height: "14px", minWidth: "13px", },}}>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))} sx={{ color: "#fff" }}>
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          </Box>
        </Box>
        {/*Lower nav */}
        <Box display="flex" flexDirection="row" width="80%" height="50px" margin="auto" justifyContent="space-between" alignItems="center">
            <Box display="flex" flexDirection="row" columnGap="20px" margin="auto">
                <Button >
                    <Typography component={Link} to={"/"} sx={{color:"#fff", textDecoration:"none"}}>
                        Acceuil
                    </Typography>
                </Button>
                <Button >
                    <Typography component={Link} to={"/produits"} sx={{color:"#fff", textDecoration:"none"}}>
                        Produits
                    </Typography>
                </Button>
                <Button >
                    <Typography component={Link} to={"/propos"} sx={{color:"#fff", textDecoration:"none"}}>
                        À propos
                    </Typography>
                </Button>
                <Button >
                    <Typography component={Link} to={"/contact"} sx={{color:"#fff", textDecoration:"none"}}>
                        Contact
                    </Typography>
                </Button>
            </Box>
        </Box>
    </Box>
    
  )
}
