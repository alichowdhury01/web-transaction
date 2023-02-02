import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import { shades } from '../../../theme';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ContactForm = () => {
  return (
    <ThemeProvider>
    <CssBaseline />
    <Box width="100%" bgcolor={shades.primary[600]} borderTop="1px solid rgba(255,255,255,0.25)" minHeight="50rem" overflow="hidden" >
    <Box display="flex" flexDirection="row" width="65%" bgcolor={shades.primary[600]} marginLeft="auto" marginRight="auto"   gap="20px" >


      <Box bgcolor="#ffffff" marginTop="90px" >
      <Box border="1px solid blue" bgcolor="#386fbbb3" boxShadow="inset 0 1px 0 rgb(255 255 255 / 27%), 0 0 12px 1px rgb(37 146 238 / 80%)"  width="260px" height="50px" margin="auto"  sx={{transform:"translateY(-50%)", textShadow:"0 0 9px #4eb0f0, 0 0 9px #4eb0f0, 0 0 9px #4eb0f0, 0 0 9px #4eb0f0"}} display="flex" justifyContent="center">
          <Typography variant="h3" sx={{color:"#fff", textDecoration:"none", margin:"auto"}}>
            Nous rejoindre
          </Typography>
        </Box>
        <Box>

            <Container  maxWidth="lg">
                <Grid  justifyContent="center" spacing={1}>
                  <Grid  item xs={12}>
                    <Box  style={{ padding: '20px' }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="h3" >
                                Contactez-Nous
                            </Typography>
                            <Box style={{ marginTop: '20px', textAlign: 'left' }}>
                              <p>Nous aimerions avoir de vos nouvelles! Veuillez remplir le formulaire ci-dessous et nous vous contacterons dans les plus brefs délais.</p>
                              <TextField
                                label="Nom"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                              />
                              <TextField
                                label="Courriel"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                              />
                              <TextField
                                label="Sujet"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                              />
                              <TextField
                                label="Message"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                multiline
                                minRows={4}
                              />
                              <Button variant="contained" color="primary">
                                Envoyer
                              </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography variant="h3" >
                          Information
                        </Typography>
                          <Box style={{ marginTop: '20px', textAlign: 'left' }}>
                            <p>Courr: contact@example.com</p>
                            <p>Phone: 123-456-7890</p>
                            <p>Address: 123 Main St, Anytown USA 12345</p>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
            </Container>
        </Box>
      </Box>
    </Box>
  </Box></ThemeProvider>

   
  );
};

export default ContactForm;
