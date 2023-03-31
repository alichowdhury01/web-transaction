import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, Button, IconButton, Typography, ThemeProvider } from "@mui/material";

import { PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import { shades } from "../theme";


export const Navbar2 = () => {


return (
    <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    width="100%"
    margin="auto"
    backgroundColor={shades.primary[600]}>

        {/*Lower nav */}
        <Box display="flex" flexDirection="row" width="80%" height="50px" margin="auto" justifyContent="space-between" alignItems="center">
            <Box display="flex" flexDirection="row" columnGap="20px" margin="auto">
                <Button component={Link} to={"/"}>
                    <Typography  sx={{color:"#fff", textDecoration:"none"}}>
                        Lister
                    </Typography>
                </Button>
                <Button component={Link} to={"/ajouter"}>
                    <Typography  sx={{color:"#fff", textDecoration:"none"}}>
                        Ajouter
                    </Typography>
                </Button>
                <Button component={Link} to={"/chercher"}>
                    <Typography  sx={{color:"#fff", textDecoration:"none"}}>
                        Chercher
                    </Typography>
                </Button>
                <Button component={Link} to={"/supprimer"}>
                    <Typography  sx={{color:"#fff", textDecoration:"none"}}>
                        Supprimer
                    </Typography>
                </Button>
            </Box>
        </Box>
    </Box>
    
  )
}
