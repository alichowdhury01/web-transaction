import React from "react";
import { Box, Card, Typography} from "@mui/material";
import MainCarousel from "./MainCarousel";
import { shades } from "../../theme";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import "./Home.css"


function Home() {
  return (
    <Box display="flex" flexDirection="column" width="100%" paddingBottom="60px" paddingTop="10px" bgcolor={shades.primary[600]} >
      <Box display="flex" flexDirection="row" width="65%" margin="auto" gap="15px" paddingBottom="5px">
        
        <Box display="flex" width="75%" borderRadius="5px">
          <MainCarousel />
        </Box>

        <Box display="flex" flexDirection="column" width="25%" bgcolor={shades.primary[700]} sx={{borderRadius:'10px', justifyContent:"center" }}>
          <SideCard imageSrc={darksoul3}  title={"Darksoul 3"} details="DARK SOULS REMASTERED PC"/>
          <SideCard imageSrc={deadside} title="DeadSide" details="" />
          <SideCard imageSrc={Fallout76} title="Fallout 76" details="" />
          <SideCard imageSrc={skyrim} title="Skyrim" details="" />
          <SideCard imageSrc={skyrim} title="Skyrim" details="" />
          <SideCard imageSrc={skyrim} title="Skyrim" details="" />
        </Box>
      </Box>

      <Box display="flex" flexDirection="row" width="65%" margin="30px auto 30px auto" gap="15px" paddingTop="5px" bgcolor={shades.primary[600]}>
        <ItemCard imageSrc={fifa23} details={"FIFA 23 PC ORIGIN (EN)"} prize={"44,19 $CA"}/>
        <ItemCard imageSrc={uncharted} details={"UNCHARTED: LEGACY OF THIEVES COLLECTION PC"} prize={"35,69 $CA"}/>
        <ItemCard imageSrc={sponge} details={"SPONGEBOB SQUAREPANTS"} prize={"49,29 $CA"} />
        <ItemCard imageSrc={horizon} details={"HORIZON ZERO DAWN - COMPLETE EDITION PC"} prize={"15,29 $CA"} />
        <ItemCard imageSrc={deadspace} details={"DEAD SPACE (REMAKE) PC (EN)"} prize={"67,99 $CA"} />
      </Box>

    </Box>
  );
}

export default Home;
