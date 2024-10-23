//import React from 'react'
import { Typography,Container,Button,CssBaseline,TextField,ThemeProvider,Grid, Paper } from "@mui/material"
import theme from "../Theme"

const SignUp = () => {
  return (
  <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs" sx={{display:'flex' ,justifyContent:'center' ,alignItems:'center', height:'100vh'}}>
      <CssBaseline />
      <Paper elevation={21} sx={{padding:'20px',width:'100%' }}>
        <Typography variant="h5" align="center" gutterBottom>SignUp Form</Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField 
              variant="filled"
              fullWidth
              label="Email"
              type="email"
             
              required sx={{backgroundColor:'backgroud.paper'}}></TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField 
              variant="filled"
              fullWidth
              label="First Name"
              type="fname"
            
              required sx={{backgroundColor:'backgroud.paper'}}></TextField>
            </Grid>


            <Grid item xs={12}>
              <TextField 
              variant="filled"
              fullWidth
              label="Last Name"
              type="lname"
              required sx={{backgroundColor:'backgroud.paper'}}></TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField 
              variant="filled"
              fullWidth
              label="Password"
              type="password"
              required sx={{backgroundColor:'backgroud.paper'}}></TextField>
            </Grid>
            <Grid item xs={20}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>

  </ThemeProvider>
    
  )
}

export default SignUp