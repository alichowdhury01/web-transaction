import React from "react";
import { Box} from "@mui/material";
import { shades } from "../../theme";
import { MainCarousel, SideCard, ItemCard } from "../../components/index.js";
import {darksoul3, deadside, Fallout76, skyrim, fifa23, uncharted, sponge, horizon, deadspace, ApexLegends, supermario, dayz, ark, reddead, returnal, wildwest, squad} from "../../assets/cardPicture/index";

function Home() {
  const [firstRowItems, setFirstRowItems] = React.useState([]);
  const [secondRowItems, setSecondRowItems] = React.useState([]);

  React.useEffect(() => {
    const fetchItems = async () => {
      const data = new FormData();
      data.append("action", "getAllArticle");
      try {
        const response = await fetch(
          "http://localhost/web-transaction/turbo-molotov/server/article/controlleurArticle.php",
          {
            method: "POST",
            body: data,
          }
        );
        const result = await response.json();
        console.log(result);


        setFirstRowItems(result[0].slice(0, 6));
        setSecondRowItems(result[0].slice(6, 1));
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, []);

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
        {firstRowItems.map((item) => ( <ItemCard key={item.id} imageSrc={"./"+item.images} id={item.id}  nom={item.nom} descriptions={item.descriptions} prix={item.prix} disabledState={false} />))}
      </Box>

      <Box display="flex" flexDirection="row" width="65%" margin="30px auto 30px auto" gap="15px" paddingTop="5px" bgcolor={shades.primary[600]}>
        {secondRowItems.map((item) => ( <ItemCard key={item.id} id={item.id}  nom={item.nom} descriptions={item.descriptions} prix={item.prix} disabledState={false} />))}
      </Box> 

    </Box>
  );
}

export default Home;
