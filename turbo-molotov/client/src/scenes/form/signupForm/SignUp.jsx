import * as React from 'react';
import Button from '@mui/material/Button';
import Calendar from '../../../components/Calendar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const theme = createTheme();

const SignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
    } else {
        try {
          const response = await fetch('http://localhost/Session%204/Projet-Web-Trans/Projet-Web-Trans/turbo-molotov/server/membre/enregMembre.php', {
              method: 'POST',
              body: data
          });
          const result = await response.json();
          console.log("fetch results: " + result);
      } catch (error) {
          console.error(error);
      }
    }
};

    
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >

              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} method="POST">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="Prénom"
                      autoFocus
                      color='primary'

                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Nom"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel value="F" name="gender" control={<Radio />} label="Female" />
                        <FormControlLabel value="M" name="gender" control={<Radio />} label="Male" />
                      </RadioGroup>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Calendar
                    fullWidth
                    required/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Courriel"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Mot de passe"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          required
                          fullWidth
                          name="confirmPassword"
                          label="Confirmer le mot de passe"
                          type="password"
                          id="confirmPassword"
                          autoComplete="new-password"
                      />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
    }
    
export default SignUp;