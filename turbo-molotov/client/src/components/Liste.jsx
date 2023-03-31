import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Liste() {
    const [row, setRows] = React.useState([]);

    // const requeteGetAllContacts = async() => {
    //     let data = new FormData();
    //     data.append('action', 'getAllArticle');
    //     try {
    //         const response = await fetch('http://localhost/web-transaction/turbo-molotov/server/contacts/controlleurContacts.php', {
    //             method: 'POST',
    //             body: data
    //         });
    //         const result = await response.json();
    //         //console.log("fetch results: " + JSON.stringify(result));
    //         if(result.status === "OK"){
    //             let resultSet = [];
    //             for(let obj of result.data) {
    //                 resultSet.push(obj);
    //             }
    //             return resultSet;
    //             };
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }

    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const result = await requeteGetAllContacts();
    //             setRows(result);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchData();
    // }, []);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Nom</TableCell>
            <TableCell align="right">Prenom</TableCell>
            <TableCell align="right">Telephone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       
        {row.map((item) => (
  <TableRow key={item.id}>
    <TableCell component="th" scope="row">
      {item.id}
    </TableCell>
    <TableCell align="right">{item.nom}</TableCell>
    <TableCell align="right">{item.prenom}</TableCell>
    <TableCell align="right">{item.telephone}</TableCell>
  </TableRow>
))}

         
        </TableBody>
      </Table>
    </TableContainer>
  );
}