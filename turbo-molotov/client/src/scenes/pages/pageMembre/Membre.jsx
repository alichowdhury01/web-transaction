import React, { useEffect, useState } from 'react'
import { Box, Button, Typography, Modal, TextField } from "@mui/material";

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

const Membre = () => {
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
    }

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

    const handleUpdateAdressFacturation = async (event) => {
        event.preventDefault();
        let data = new FormData(event.currentTarget);
        data.append('email', sessionStorage.getItem('email'));
        data.append('action', 'updateAdressFacturation');
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
                handleCloseAdressF();
            }else{
                alert('Erreur lors de la modification de l\'adresse');
            }
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
            }else{
                alert('Erreur lors de la modification de l\'adresse');
            }
        } catch (error) {
            console.error(error+"error");
        }

    }

    const handleUpdatePwd = async (event) => {
        event.preventDefault();
        let data = new FormData(event.currentTarget);
        data.append('email', sessionStorage.getItem('email'));
        data.append('action', 'updatePwd');
        const password = data.get('password');
        const passwordConfirm = data.get('passwordConfirm');

        if(password !== passwordConfirm){
            alert('Les mots de passe ne sont pas identiques');
        }else{
            try {
                const response = await fetch('http://localhost/web-transaction/turbo-molotov/server/membre/controleurMembre.php', {
                method: 'POST',
                body: data
                });
                const result = await response.json();
                if(result !== 'success'){
                    alert('Mot de passe modifié avec succès');
                    handleClosePwd();
                }else{
                    alert('Erreur lors de la modification du mot de passe');
                }
            } catch (error) {
                console.error(error+"error");
            }
        }
    }



  return (
    <Box onLoad={handleAccount()}
      bgcolor={'#1f143d'}
      width={'100vw'}
      display="flex"
      flexDirection="column">
  
        <Box
          bgcolor='#1f143d'
          display="flex"
          flexDirection="column"
          width='65vw'
          margin='auto'
          >
          <Typography sx={{color:'#fff', marginBottom:'1rem', marginTop: '1rem', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="h2">Mon tableau de bord</Typography>
          <Typography sx={{color:'#fff', marginBottom:'1rem', marginTop: '1rem'}} variant="p">Bonjour, cher client !</Typography>
          <Typography sx={{color:'#fff', width:'70%'}} variant="p">Le Tableau de bord du compte vous donne un aperçu de l'activité récente dans votre compte et vous permet de mettre à jour vos informations. Cliquez sur un lien ci-dessous pour voir ou modifier vos informations.</Typography>
          <Typography sx={{color:'#fff', textAlign:'center', width:'100%', marginTop:'3rem', marginBottom:'3rem', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="h1">Mon compte</Typography>
          <Typography sx={{color:'#fff', marginBottom:'1rem', marginTop: '1rem', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="p">Informations du compte</Typography>

          <Box
            bgcolor='#0c0020'
            display="flex"
            flexDirection="column"
            width='100%'
            margin='auto'
            padding='1rem'
            >
            <Typography sx={{color:'#fff', margin:'1rem 3rem 1rem 3rem'}} variant="p">INFORMATIONS DE CONTACT</Typography>
            <Typography id='fullName' sx={{color:'#fff', margin:'1rem 3rem 0.1rem 3rem'}} variant="p">Nom : {name} </Typography>
            <Typography id='email' sx={{color:'#fff', margin:'0.1rem 3rem 1rem 3rem'}} variant="p">Email : {sessionStorage.getItem('email')}</Typography>

            <Button onClick={handleOpenPwd} sx={{margin:'1rem 3rem 1rem 3rem', backgroundColor:'#1f143d', width:'15rem', color:'#fff', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="contained">
              <Typography  variant="p">Modifier le mot de pass</Typography>
            </Button>
            <Modal
              open={open}
              onClose={handleClosePwd}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Box display='flex' flexDirection='column' marginLeft='auto' marginRight='auto' >
                        <Typography sx={{justifyContent: 'center', marginLeft: 'auto', mr: 'auto'}}  variant="h6" component="h2">
                            Modification du mot de pass
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Box display='flex' flexDirection='column' marginLeft='auto' marginRight='auto' component='form' onSubmit={handleUpdatePwd} method="POST">
                            <TextField
                                sx={{marginBottom:'0.5rem'}}
                                id="outlined-password-input"
                                label="Nouveau mot de pass"
                                type="password"
                                name='password'
                                autoComplete="current-password"
                                variant="outlined"
                                />
                            <TextField
                                sx={{marginBottom:'0.5rem'}}
                                id="outlined-password-input"
                                label="Confirmer le mot de pass"
                                type="password"
                                name='passwordConfirm'
                                autoComplete="current-password"
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

            <Box 
              display="flex"
              flexDirection="row"
              width='100%'
              marginTop='3rem'
              marginBottom='3rem'>

              <Box onLoad={handleAdressFacturation()}
                bgcolor='#0c0020'
                display="flex"
                flexDirection="column"
                width='50%'
                margin='auto 10px auto auto'
            
                >
                <Typography sx={{color:'#fff', margin:'1rem 3rem 1rem 3rem'}} variant="p">ADRESSE DE FACTURATION PAR DÉFAULT</Typography>
                <Typography id='adresse' sx={{color:'#fff', margin:'0.5rem 3rem 0.5rem 3rem'}} variant="p">Adresse : {adresseFacturation} </Typography>
                <Typography id='ville' sx={{color:'#fff', margin:'0.5rem 3rem 0.5rem 3rem'}}variant="p">Ville : {villeFacturation} </Typography>
                <Typography id='province' sx={{color:'#fff', margin:'0.5rem 3rem 0.5rem 3rem'}} variant="p">Province : {provinceFacturation} </Typography>
                <Typography id='codePostal' sx={{color:'#fff', margin:'0.5rem 3rem 0.5rem 3rem'}} variant="p">Code postal : {codePostalFacturation} </Typography>
                <Button onClick={handleOpenAdressF}  sx={{margin:'1rem 3rem 1rem 3rem', backgroundColor:'#1f143d', width:'15rem', color:'#fff', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="contained">
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

                <Box onLoad={handleAdressLivraison()}
                  bgcolor='#0c0020'
                  display="flex"
                  flexDirection="column"
                  width='50%'
                  margin='auto auto auto 10px'>
                <Typography sx={{color:'#fff', margin:'1rem 3rem 1rem 3rem'}} variant="p">ADRESSE DE LIVRAISON PAR DÉFAULT</Typography>
                <Typography id='adresse' sx={{color:'#fff', margin:'0.5rem 3rem 0.5rem 3rem'}} variant="p">Adresse : {adresseLivraison} </Typography>
                <Typography id='ville' sx={{color:'#fff', margin:'0.5rem 3rem 0.5rem 3rem'}} variant="p">Ville : {villeLivraison} </Typography>
                <Typography id='province' sx={{color:'#fff', margin:'0.5rem 3rem 0.5rem 3rem'}} variant="p">Province : {provinceLivraison} </Typography>
                <Typography id='codePostal' sx={{color:'#fff', margin:'0.5rem 3rem 0.5rem 3rem'}} variant="p">Code postal : {codePostalLivraison} </Typography>
                <Button onClick={handleOpenAdressL} sx={{margin:'1rem 3rem 1rem 3rem', backgroundColor:'#1f143d', width:'15rem', color:'#fff', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="contained">
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

        
    </Box>
  )
}

export default Membre;