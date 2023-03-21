import React from 'react'
import { Box, Button, Typography, Modal} from "@mui/material";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      console.log("fetch results: " + JSON.stringify(result));
      return result;
    } catch (error) {
      console.error(error+"error");
    }
  }
   
  return (
    <Box onLoad={handleAccount}
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
            <Typography id='fullName' sx={{color:'#fff', margin:'1rem 3rem 0.1rem 3rem'}} variant="p">Nom :  </Typography>
            <Typography id='email' sx={{color:'#fff', margin:'0.1rem 3rem 1rem 3rem'}} variant="p">Email : {sessionStorage.getItem('email')}</Typography>

            <Button onClick={handleOpen} sx={{margin:'1rem 3rem 1rem 3rem', backgroundColor:'#1f143d', width:'15rem', color:'#fff', textShadow:' 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36), 0 0 12px rgba(100,162,235,.36)'}} variant="contained">
              <Typography  variant="p">Modifier le mot de pass</Typography>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Modification du mot de pass
                  </Typography>

                </Box>
            </Modal>
          </Box>

            <Box 
              display="flex"
              flexDirection="row"
              width='100%'
              marginTop='3rem'
              marginBottom='3rem'>

              <Box
                bgcolor='#0c0020'
                display="flex"
                flexDirection="column"
                width='50%'
                margin='auto 10px auto auto'
            
                >
                <Typography sx={{color:'#fff', margin:'1rem 3rem 1rem 3rem'}} variant="p">ADRESSE DE FACTURATION PAR DÉFAULT</Typography>
                </Box>

                <Box
                bgcolor='#0c0020'
                display="flex"
                flexDirection="column"
                width='50%'
                margin='auto auto auto 10px'
             
                >
                <Typography sx={{color:'#fff', margin:'1rem 3rem 1rem 3rem'}} variant="p">ADRESSE DE LIVRAISON PAR DÉFAULT</Typography>
                </Box>



            </Box>

        </Box>

        
    </Box>
  )
}

export default Membre