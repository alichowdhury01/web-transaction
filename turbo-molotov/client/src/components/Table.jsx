import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Button, Backdrop, Modal, Fade, TextField, Input } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


const headCells = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'ID Articles',
  },
  {
    id: 'images',
    numeric: true,
    disablePadding: false,
    label: 'Image',
  },
  {
    id: 'nom',
    numeric: true,
    disablePadding: false,
    label: 'Nom',
  },
  {
    id: 'categorie',
    numeric: true,
    disablePadding: false,
    label: 'Catégorie',
  },
  {
    id: 'descriptions',
    numeric: true,
    disablePadding: false,
    label: 'Description',
  },
  {
    id: 'prix',
    numeric: true,
    disablePadding: false,
    label: 'Prix',
  },
  {
    id: 'quantiteInventaire',
    numeric: true,
    disablePadding: false,
    label: 'Quantité',
  },
  {
    id: 'modifier',
    numeric: true,
    disablePadding: false,
    
  },
  {
    id: 'supprimer',
    numeric: true,
    disablePadding: false,
    
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'normal' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
          
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  
const ajoutArticle = async() => {
  let data = new FormData();
  data.append('action', 'createArticle');
  data.append('nom', document.getElementById('inputNom').value);
  data.append('categorie', document.getElementById('inputCategorie').value);
  data.append('descriptions', document.getElementById('inputDescriptions').value);
  data.append('prix', document.getElementById('inputPrix').value);
  data.append('images', document.getElementById('inputImage').files[0]);
  try {
      const response = await fetch('http://localhost/web-transaction/turbo-molotov/server/article/controlleurArticle.php', {
          method: 'POST',
          body: data
      });
      const json = await response.json();
      console.log(json);
  } catch (error) {
      console.log(error);
  }
}

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Articles
        </Typography>
        <Button>Lister</Button>
        <Button onClick={handleOpen}>Ajouter</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '60vh',
            minWidth: '40vw',
            maxWidth: '80vw',
            bgcolor: 'background.paper',
            boxShadow: 24,        
            }}>
      
          <Box bgcolor="#ffffff" width="50%" marginLeft='auto' marginRight='auto'>
            <Box 
              border="1px solid blue" 
              bgcolor="#386fbbb3" 
              boxShadow="inset 0 1px 0 rgb(255 255 255 / 27%), 0 0 12px 1px rgb(37 146 238 / 80%)"  
              width="260px" 
              height="50px" 
              margin="auto" 
               sx={{transform:"translateY(-50%)", 
               textShadow:"0 0 9px #4eb0f0, 0 0 9px #4eb0f0, 0 0 9px #4eb0f0, 0 0 9px #4eb0f0"}} 
               display="flex" 
               justifyContent="center">
                <Typography variant="h3" sx={{color:"#fff", textDecoration:"none", margin:"auto", paddingLeft:"10px", paddingRight:"10px"}}>
                  AJOUT ARTICLE
                </Typography>
              </Box>
              <Box>
                <Box sx={{display:"flex", flexDirection:"column", marginTop:"20px"}}>
                <ThemeProvider theme={theme}>
                  <TextField id="inputNom" label="Nom" variant="outlined" sx={{color:'primary'}} />
                  <TextField id="inputCategorie" label="Catégorie" variant="outlined" sx={{marginTop:"15px"}} />
                  <TextField id="inputDescription" label="Descriptions" variant="outlined" sx={{marginTop:"15px"}} />
                  <TextField id="inputPrix" label="Prix" variant="outlined" sx={{marginTop:"15px"}}/>
                  <TextField id="inputQuantite" label="Quantité" variant="outlined" sx={{marginTop:"15px"}}/>
                  <Input id="inputImage"  variant="outlined"  type="file" sx={{marginTop:"15px"}} />
                  
                  <Button onClick={ajoutArticle} variant="contained" sx={{marginTop:"15px", backgroundColor:"#386fbb", color:"#fff"}}>Ajouter</Button>
                </ThemeProvider>
                </Box>
              
              </Box>
            </Box>
          </Box> 
        </Fade>
      </Modal>
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [rows, setRows] = React.useState([]);

  const requeteUpdateArticle = async(id, nom, categorie, descriptions, prix, quantiteInventaire) => {
    let data = new FormData();
    data.append('action', 'updateArticle');
    data.append('id', id);
    data.append('nom', nom);
    data.append('categorie', categorie);
    data.append('descriptions', descriptions);
    data.append('prix', prix);
    data.append('quantiteInventaire', quantiteInventaire);
    try {
        const response = await fetch('http://localhost/web-transaction/turbo-molotov/server/article/controlleurArticle.php', {
            method: 'POST',
            body: data,
        });
        } catch (error) {
            console.error(error);
        }
    }


  const requeteGetAllArticle = async() => {
      let data = new FormData();
      data.append('action', 'getAllArticle');
      try {
          const response = await fetch('http://localhost/web-transaction/turbo-molotov/server/article/controlleurArticle.php', {
              method: 'POST',
              body: data
          });
          const result = await response.json();
          //console.log("fetch results: " + JSON.stringify(result));
          if(result.status === "OK"){
              let resultSet = [];
              for(let obj of result.data) {
                  resultSet.push(obj);
              }
              return resultSet;
              };
          } catch (error) {
              console.error(error);
          }
      }

      const requeteDeleteArticle = async(id) => {
          let data = new FormData();
          data.append('action', 'deleteArticle');
          data.append('id', id);
          try {
              const response = await fetch('http://localhost/web-transaction/turbo-molotov/server/article/controlleurArticle.php', {
                  method: 'POST',
                  body: data
              });
              window.location.reload();
            } catch (error) {
                console.error(error);
            }
        }




      
      React.useEffect(() => {
          const fetchData = async () => {
              try {
                  const result = await requeteGetAllArticle();
                  setRows(result);
              } catch (error) {
                  console.error(error);
              }
          };
          fetchData();
      }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%'}}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell align="right">{row.id}</TableCell>
                      <TableCell id='images' contentEditable='true'  align="right">
                        <img
                        src= {'../../../server/database/'+row.images}
                        width={60}
                        alt='game cover'
                        ></img>
                    </TableCell>
                      <TableCell id='nom' contentEditable='true' align="right">{row.nom}</TableCell>
                      <TableCell id='categorie' contentEditable='true' align="right">{row.categorie}</TableCell>
                      <TableCell id='descriptions' contentEditable='true' align="right">{row.descriptions}</TableCell>
                      <TableCell id='prix' contentEditable='true' align="right">{row.prix+"$"}</TableCell>
                      <TableCell id='quantiteInventaire' contentEditable='true' align="right">{row.quantiteInventaire}</TableCell>
                      <TableCell align="right">
                        <Button onClick={requeteUpdateArticle} sx={{backgroundColor: '#f1c232'}}><AutoFixHighIcon />Modifier</Button>
                    </TableCell>
                      <TableCell align="right">
                        <Button onClick={() => {requeteDeleteArticle(row.id)}}

                         sx={{backgroundColor: '#ed8302'}}><DeleteIcon />Supprimer</Button>
                    </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}