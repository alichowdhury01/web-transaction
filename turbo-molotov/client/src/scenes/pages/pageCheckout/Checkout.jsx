import React, { useEffect, useState, useRef} from 'react'
import { Box, Typography, Button, Modal,TextField, IconButton, CardMedia } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const Checkout = () => {
    const [open, setOpen] = useState(false);
    const [openAdressF, setOpenAdressF] = useState(false);
    const [openAdressL, setOpenAdressL] = useState(false);
    const [name, setName] = useState('');  
    const [adresseFacturation, setAdresseFacturation] = useState('');
    const [villeFacturation, setVilleFacturation] = useState('');
    const [provinceFacturation, setProvinceFacturation] = useState('');
    const [codePostalFacturation, setCodePostalFacturation] = useState('');
    const [adresseLivraison, setAdresseLivraison] = useState('');
    const [villeLivraison, setVilleLivraison] = useState('');
    const [provinceLivraison, setProvinceLivraison] = useState('');
    const [codePostalLivraison, setCodePostalLivraison] = useState('');
    const handleOpenPwd = () => setOpen(true);
    const handleClosePwd = () => setOpen(false);
    const handleOpenAdressF = () => setOpenAdressF(true);
    const handleCloseAdressF = () => setOpenAdressF(false);
    const handleOpenAdressL = () => setOpenAdressL(true);
    const handleCloseAdressL = () => setOpenAdressL(false);
    
    const [picture, setPicture] = React.useState([]);
    const [desiredQuantities, setDesiredQuantities] = useState({});
    const quantityInputRef = useRef(null);
   


    React.useEffect(() => {
        const handleAccount = async () => {
        let data = new FormData();
        data.append('email', sessionStorage.getItem('email'));
        data.append('action', 'getAccount');
        try {
          const response = await fetch('http://localhost/web-transaction/turbo-molotov/server/membre/controleurMembre.php', {
          method: 'POST',
          body: data
          });
          const result = await response.json();
          setName(result[0][0].nom + " " + result[0][0].prenom); 
  
  
        } catch (error) {
          console.error(error+"error");
        }
    };
  
    const handleAdressFacturation = async () => {
      let data = new FormData();
      data.append('email', sessionStorage.getItem('email'));
      data.append('action', 'getAdresssFacturation');
      try {
            const response = await fetch('http://localhost/web-transaction/turbo-molotov/server/membre/controleurMembre.php', {
            method: 'POST',
            body: data
            });
            const result = await response.json();
            setAdresseFacturation(result[0][0].adresse);
            setVilleFacturation(result[0][0].ville);
            setProvinceFacturation(result[0][0].province);
            setCodePostalFacturation(result[0][0].cp);
      } catch (error) {
          console.error(error+"error");
      }
    }    
      const handleAdressLivraison = async () => {
        let data = new FormData();
        data.append('email', sessionStorage.getItem('email'));
        data.append('action', 'getAdresssLivraison');
        try {
          const response = await fetch('http://localhost/web-transaction/turbo-molotov/server/membre/controleurMembre.php', {
          method: 'POST',
          body: data
          });
          const result = await response.json();
          setAdresseLivraison(result[0][0].adresse);
          setVilleLivraison(result[0][0].ville);
          setProvinceLivraison(result[0][0].province);
          setCodePostalLivraison(result[0][0].cp);
        } catch (error) {
          console.error(error+"error");
        }
      }
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
    handleAccount();
    handleAdressFacturation();
    handleAdressLivraison();
    getPic();
    },[]);

      const handleUpdateAdressFacturation = async (event) => {
        event.preventDefault();
        let data = new FormData(event.currentTarget);
        data.append('email', sessionStorage.getItem('email'));
        data.append('action', 'updateAdressFacturation');
        const adresse = data.get('adresse');
        const ville = data.get('ville');
        const province = data.get('province');
        const cp = data.get('cp');

        try {
            const response = await fetch('http://localhost/web-transaction/turbo-molotov/server/membre/controleurMembre.php', {
            method: 'POST',
            body: data
            });
            const result = await response.json();
            console.log(result);
            if(result !== 'success'){
                alert('Adresse modifié avec succès');
                handleCloseAdressF();
                window.location.reload();
            }else{
                alert('Erreur lors de la modification de l\'adresse');
            }
        } catch (error) {
            console.error(error+"error");
        }        
    }

    const handleUpdateAdressLivraison = async (event) => {
        event.preventDefault();
        let data = new FormData(event.currentTarget);
        data.append('email', sessionStorage.getItem('email'));
        data.append('action', 'updateAdressLivraison');
        const adresse = data.get('adresse');
        const ville = data.get('ville');
        const province = data.get('province');
        const cp = data.get('cp');
        console.log(data);
        try {
            const response = await fetch('http://localhost/web-transaction/turbo-molotov/server/membre/controleurMembre.php', {
            method: 'POST',
            body: data
            });
            const result = await response.json();
            console.log(result);
            if(result !== 'success'){
                alert('Adresse modifié avec succès');
                handleCloseAdressL();
                window.location.reload();
            }else{
                alert('Erreur lors de la modification de l\'adresse');
            }
        } catch (error) {
            console.error(error+"error");
        }

    }

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const subtotal = cartItems.reduce((sum, item) => {
        return sum + item.price * desiredQuantities[item.id];
      }, 0);

  return (
    <Box
        display={'flex'}
        flexDirection={'column'}
        width={'100vw'}
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={'#1f143d'}
    >
        <Typography sx={{color:'#fff', margin:'2rem auto 0.5rem auto', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="h2">PAYEMENT SÉCURISÉ</Typography>
       <Box bgcolor="#0c0020" width="40%" marginTop="3rem">
            <Box 
                border="1px solid blue" 
                bgcolor="#386fbbb3" 
                boxShadow="inset 0 1px 0 rgb(255 255 255 / 27%), 0 0 12px 1px rgb(37 146 238 / 80%)"  
                width={'70%'} 
                height="50px" 
                margin="auto"  
                sx={{transform:"translateY(-50%)", textShadow:"0 0 9px #4eb0f0, 0 0 9px #4eb0f0, 0 0 9px #4eb0f0, 0 0 9px #4eb0f0"}}  
                display="flex" 
                justifyContent="center">
                <Typography variant="h3" sx={{color:"#fff", textDecoration:"none", margin:"auto", paddingLeft:"10px", paddingRight:"10px"}}>
                    1. INFORMATIONS DE FACTURATION
                </Typography>
            </Box>
            <Box display="flex" flexDirection="column" margin="auto" padding='1rem'>
            <Box display='flex' flexDirection='column' width='90%' margin='auto'>
                <Typography  sx={{color:'GrayText'}} component={'p'}>NOM</Typography>
                <Typography sx={{color:'#fff', marginTop:'0.5rem', textTransform:'uppercase'}} component={'p'}>{name}</Typography>
            </Box>
            <Box display='flex' flexDirection='column' width='90%' margin='1rem auto auto auto'>
                <Typography  sx={{color:'GrayText'}} component={'p'}>ADRESSES</Typography>
                <Typography sx={{color:'#fff', marginTop:'0.5rem', textTransform:'uppercase'}} component={'p'}>{adresseFacturation+','} {villeFacturation+','} {provinceFacturation+','} {codePostalFacturation} </Typography>
                <Button onClick={handleOpenAdressF}  sx={{marginTop:'1rem', marginBottom:'1rem', backgroundColor:'#1f143d', width:'15rem', color:'#fff', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="contained">
                  <Typography  variant="p">Modifier l'adresse</Typography>
                </Button>
                <Modal
                  open={openAdressF}
                  onClose={handleCloseAdressF}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Box display='flex' flexDirection='column' marginLeft='auto' marginRight='auto' >
                            <Typography sx={{justifyContent: 'center', marginLeft: 'auto', mr: 'auto'}}  variant="h6" component="h2">
                                Modification d'adresse de facturation
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <Box display='flex' flexDirection='column' marginLeft='auto' marginRight='auto' component='form' onSubmit={handleUpdateAdressFacturation} method="POST">
                                <TextField
                                    sx={{marginBottom:'0.5rem'}}
                                    required
                                    id="outlined-required"
                                    label="Adresse"
                                    name='adresse'
                                    variant="outlined"
                                    />
                                <TextField
                                    sx={{marginBottom:'0.5rem'}}
                                    required
                                    id="outlined-required"
                                    label="Ville"
                                    name='ville'
                                    variant="outlined"
                                    />
                                <TextField
                                    sx={{marginBottom:'0.5rem'}}
                                    required
                                    id="outlined-required"
                                    label="Province"
                                    name='province'
                                    variant="outlined"
                                    />
                                <TextField
                                    sx={{marginBottom:'0.5rem'}}
                                    required
                                    id="outlined-required"
                                    label="Code postal"
                                    name='cp'
                                    variant="outlined"
                                    />
                                <Button
                                 sx={{backgroundColor:'#1f143d', color:'#fff', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="contained"
                                 type='submit'
                                 >
                                    <Typography  variant="p">Modifier</Typography>
                                </Button>
                            </Box>
                            </Typography>
                        </Box>
                    </Box>
                </Modal>  
                </Box>             
            </Box>
        </Box>

        <Box bgcolor="#0c0020" width="40%" marginTop="5rem">
            <Box 
                border="1px solid blue" 
                bgcolor="#386fbbb3" 
                boxShadow="inset 0 1px 0 rgb(255 255 255 / 27%), 0 0 12px 1px rgb(37 146 238 / 80%)"  
                width={'70%'} 
                height="50px" 
                margin="auto"  
                sx={{transform:"translateY(-50%)", textShadow:"0 0 9px #4eb0f0, 0 0 9px #4eb0f0, 0 0 9px #4eb0f0, 0 0 9px #4eb0f0"}}  
                display="flex" 
                justifyContent="center">
                <Typography variant="h3" sx={{color:"#fff", textDecoration:"none", margin:"auto", paddingLeft:"10px", paddingRight:"10px"}}>
                    2. INFORMATIONS DE LIVRAISON
                </Typography>
            </Box>
            <Box display="flex" flexDirection="column" margin="auto" padding='1rem'>

            <Box display='flex' flexDirection='column' width='90%' margin='auto'>
                <Typography  sx={{color:'GrayText'}} component={'p'}>NOM</Typography>
                <Typography sx={{color:'#fff', marginTop:'0.5rem', textTransform:'uppercase'}} component={'p'}>{name}</Typography>
            </Box>
            <Box display='flex' flexDirection='column' width='90%' margin='1rem auto auto auto'>
                <Typography  sx={{color:'GrayText'}} component={'p'}>ADRESSES</Typography>
                <Typography sx={{color:'#fff', marginTop:'0.5rem', textTransform:'uppercase'}} component={'p'}>{adresseLivraison+','} {villeLivraison+','} {provinceLivraison+','} {codePostalLivraison} </Typography>
                <Button onClick={handleOpenAdressL}  sx={{marginTop:'1rem', marginBottom:'1rem', backgroundColor:'#1f143d', width:'15rem', color:'#fff', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="contained">
                  <Typography  variant="p">Modifier l'adresse</Typography>
                </Button>
                <Modal
                  open={openAdressL}
                  onClose={handleCloseAdressL}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Box display='flex' flexDirection='column' marginLeft='auto' marginRight='auto' >
                            <Typography sx={{justifyContent: 'center', marginLeft: 'auto', mr: 'auto'}}  variant="h6" component="h2">
                                Modification d'adresse de livraison
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <Box display='flex' flexDirection='column' marginLeft='auto' marginRight='auto' component='form' onSubmit={handleUpdateAdressLivraison} method="POST">
                                <TextField
                                    sx={{marginBottom:'0.5rem'}}
                                    required
                                    id="outlined-required"
                                    label="Adresse"
                                    name='adresse'
                                    variant="outlined"
                                    />
                                <TextField
                                    sx={{marginBottom:'0.5rem'}}
                                    required
                                    id="outlined-required"
                                    label="Ville"
                                    name='ville'
                                    variant="outlined"
                                    />
                                <TextField
                                    sx={{marginBottom:'0.5rem'}}
                                    required
                                    id="outlined-required"
                                    label="Province"
                                    name='province'
                                    variant="outlined"
                                    />
                                <TextField
                                    sx={{marginBottom:'0.5rem'}}
                                    required
                                    id="outlined-required"
                                    label="Code postal"
                                    name='cp'
                                    variant="outlined"
                                    />
                                <Button
                                 sx={{backgroundColor:'#1f143d', color:'#fff', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="contained"
                                 type='submit'
                                 >
                                    <Typography  variant="p">Modifier</Typography>
                                </Button>
                            </Box>
                            </Typography>
                        </Box>
                    </Box>
                </Modal>  
            </Box>
            </Box>
        </Box>

        <Box bgcolor="#0c0020" width="40%" marginTop="5rem">
            <Box 
                border="1px solid blue" 
                bgcolor="#386fbbb3" 
                boxShadow="inset 0 1px 0 rgb(255 255 255 / 27%), 0 0 12px 1px rgb(37 146 238 / 80%)"  
                width={'70%'} 
                height="50px" 
                margin="auto"  
                sx={{transform:"translateY(-50%)", textShadow:"0 0 9px #4eb0f0, 0 0 9px #4eb0f0, 0 0 9px #4eb0f0, 0 0 9px #4eb0f0"}}  
                display="flex" 
                justifyContent="center">
                <Typography variant="h3" sx={{color:"#fff", textDecoration:"none", margin:"auto", paddingLeft:"10px", paddingRight:"10px"}}>
                    RÉCAPITULATIF DE LA COMMANDE
                </Typography>
            </Box>
            <Box>
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


            </Box>
        </Box>
        <Typography variant="h3" sx={{color:"#fff", margin:"auto"}}>
    Subtotal: ${subtotal.toFixed(2)}
  </Typography>



    </Box>
  )
}

export default Checkout