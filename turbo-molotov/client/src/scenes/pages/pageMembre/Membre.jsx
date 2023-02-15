import React from 'react'
import { Box, Typography} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import Header from './Header';

const Membre = () => {
  const theme = useTheme();

  //get data from database
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost/web-transaction/turbo-molotov/server/membre/connexion.php")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [  ]);

 

  const rows = [
    data.map((row) => ({
      id: row.id,
      appartement: row.appartement,
      etage: row.etage,
      vacant: row.vacant,
      Immeuble: row.Immeuble,
    }))
  ];

  const columns = [
    {
        field: "id", 
        headerName: "ID", 
        flex: 0.5 
    },
    {
        field: "appartement",
        headerName: "Appartement",
        flex: 1,
        cellClassName: "name-column--cell",
    },  
    {   
        field: "etage",
        headerName: "Etage",
        flex: 1,
    },  
    {   
        field: "vacant",
        headerName: "Vacant",
        flex: 1,
    },  
    {   
        field: "Immeuble",
        headerName: "Immeuble",
        flex: 1,
    },
  ];



  

  return (
  

    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="Liste des Appartements"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color:"green",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "blue",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "yellow",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "pink",
          },
          "& .MuiCheckbox-root": {
            color: `${"black"} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${"gray"} !important`,
          },
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Membre