import * as React from 'react';
import { Typography, Box } from '@mui/material';
import { shades } from "../../../theme";
import SignUp from '../../form/signupForm/SignUp';
import SignIn from '../../form/signinForm/SignIn';




export default function Connexion() {


  return (

     
        <Box width="100%" bgcolor={shades.primary[600]} borderTop="1px solid rgba(255,255,255,0.25)" paddingBottom="50px">
          <Box display="flex" flexDirection="row" width="65%" bgcolor={shades.primary[600]} marginLeft="auto" marginRight="auto" marginBottom="50px" gap="20px" height="40em">
          <Box bgcolor="#ffffff" width="50%" marginTop="90px">
            <Box border="1px solid blue" bgcolor="#386fbbb3" boxShadow="inset 0 1px 0 rgb(255 255 255 / 27%), 0 0 12px 1px rgb(37 146 238 / 80%)"  width="220px" height="50px" margin="auto"  sx={{transform:"translateY(-50%)", textShadow:"0 0 9px #4eb0f0, 0 0 9px #4eb0f0, 0 0 9px #4eb0f0, 0 0 9px #4eb0f0"}}  display="flex" justifyContent="center">
                <Typography variant="h3" sx={{color:"#fff", textDecoration:"none", margin:"auto", paddingLeft:"10px", paddingRight:"10px"}}>
                    SE CONNECTER
                </Typography>
              </Box>

                <Box>
                    <SignIn/>
                </Box>

            </Box>

            <Box bgcolor="#ffffff" width="50%" marginTop="90px" >
            <Box border="1px solid blue" bgcolor="#386fbbb3" boxShadow="inset 0 1px 0 rgb(255 255 255 / 27%), 0 0 12px 1px rgb(37 146 238 / 80%)"  width="260px" height="50px" margin="auto"  sx={{transform:"translateY(-50%)", textShadow:"0 0 9px #4eb0f0, 0 0 9px #4eb0f0, 0 0 9px #4eb0f0, 0 0 9px #4eb0f0"}} display="flex" justifyContent="center">
                <Typography variant="h3" sx={{color:"#fff", textDecoration:"none", margin:"auto", paddingLeft:"10px", paddingRight:"10px"}}>
                  CRÉER UN COMPTE
                </Typography>
              </Box>
              <Box>
                <SignUp/>
              </Box>
            </Box>
          </Box>
        </Box>
       


  );
}