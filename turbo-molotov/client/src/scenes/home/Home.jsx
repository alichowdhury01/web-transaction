import React from "react";
import { Box} from "@mui/material";
import { shades } from "../../theme";
import { MainCarousel, SideCard, ItemCard } from "../../components/index.js";
import {darksoul3, deadside, Fallout76, skyrim, fifa23, uncharted, sponge, horizon, deadspace, ApexLegends, supermario, dayz, ark, reddead, returnal, wildwest, squad} from "../../assets/cardPicture/index";

function Home() {
  return (
    <Box display="flex" flexDirection="column" width="100%" paddingBottom="60px" paddingTop="10px" bgcolor={shades.primary[600]} >

      <Box display="flex" flexDirection="row" width="65%" margin="auto" gap="15px" paddingBottom="5px">
        
        <Box display="flex" width="75%" borderRadius="5px">
          <MainCarousel />
        </Box>

        <Box display="flex" flexDirection="column" width="25%" bgcolor={shades.primary[700]} sx={{borderRadius:'10px', justifyContent:"center" }}>
          <SideCard imageSrc={darksoul3}  title={"Darksoul 3"} details="Prochainement"  />
          <SideCard imageSrc={deadside} title="DeadSide" details="Noubeautés" />
          <SideCard imageSrc={Fallout76} title="Fallout 76" details="Classic" />
          <SideCard imageSrc={ApexLegends} title="Apex-Legends" details="Battle Royal" />
          <SideCard imageSrc={supermario} title="super mario" details="Vintage" />
          <SideCard imageSrc={skyrim} title="Skyrim" details="No lollygaggin" />
        </Box>
        
      </Box>

      <Box display="flex" flexDirection="row" width="65%" margin="30px auto 30px auto" gap="15px" paddingTop="5px" bgcolor={shades.primary[600]}>
        <ItemCard imageSrc={fifa23} details={"FIFA 23 PC ORIGIN (EN)"} prize={"44,19 $CA"} disabledState={false} />
        <ItemCard imageSrc={uncharted} details={"UNCHARTED: LEGACY OF THIEVES COLLECTION PC"} prize={"35,69 $CA"} disabledState={false} />
        <ItemCard imageSrc={sponge} details={"SPONGEBOB SQUAREPANTS: THE COSMIC SHAKE PC"} prize={"38,19 $CA"} disabledState={false} />
        <ItemCard imageSrc={horizon} details={"HORIZON ZERO DAWN - COMPLETE EDITION PC"} prize={"15,29 $CA"} disabledState={false} />
        <ItemCard imageSrc={deadspace} details={"DEAD SPACE (REMAKE) PC (EN)"} prize={"67,99 $CA"} disabledState={false} />
        <ItemCard imageSrc={deadspace} details={"DEAD SPACE (REMAKE) PC (fr)"} prize={"67,99 $CA"} disabledState={false} />
      </Box>

      <Box display="flex" flexDirection="row" width="65%" margin="30px auto 30px auto" gap="15px" paddingTop="5px" bgcolor={shades.primary[600]}>
        <ItemCard imageSrc={ark} details={"ark"} prize={"47,19 $CA"} disabledState={false} />
        <ItemCard imageSrc={reddead} details={"RED DEAD REDEMPTION 2 PC"} prize={"30,69 $CA"} disabledState={false} />
        <ItemCard imageSrc={dayz} details={"DAYZ PC"} prize={"38,19 $CA"} disabledState={false} />
        <ItemCard imageSrc={returnal} details={"RETURNAL + BONUS PC"} prize={"10,29 $CA"} disabledState={false} />
        <ItemCard imageSrc={wildwest} details={"WILD WEST DYNASTY PC"} prize={"À VENIR"} disabledState={true} />
        <ItemCard imageSrc={squad} details={"SQUAD PC"} prize={"À VENIR"} disabledState={true} />
      </Box>

    </Box>
  );
}

export default Home;
