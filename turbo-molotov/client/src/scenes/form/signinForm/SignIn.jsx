import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [role, setRole] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch('http://localhost/web-transaction/turbo-molotov/server/membre/connexion.php', {
          method: 'POST',
          body: data
      });
      const result = await response.json();
      console.log("fetch results: " + JSON.stringify(result));
      if(result.status === "OK"){
        localStorage.setItem('session', result.session);
        localStorage.setItem('role', result.role);
        setAuthenticated(true);
        console.log(localStorage.getItem("session"));
        console.log(localStorage.getItem("role"));
        navigate("/"+result.page);
        window.location.reload();
      };
  } catch (error) {
      console.error(error);
  }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Courriel"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label = "Souvenir de moi"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}