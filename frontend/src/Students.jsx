//import React from 'react'
import {Typography, Container, Button, TextField, Grid, Paper} from '@mui/material'

const Students = () => {
  return (
    <>
      <Container maxWidth='xs' sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'
      }}>
        <Paper elevation={20} sx={{ padding: 2, width: '100%' }}>
          <Typography variant='h5' align='center' gutterBottom>
            Student Form
          </Typography>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  variant='filled' label='Name' fullWidth type="text"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant='filled' label="Roll Number" fullWidth type='text'
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant='filled' label='Course' fullWidth type="text"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant='filled' label='Department' fullWidth type="text"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant='filled' label='Email ID' fullWidth type="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant='filled' label="Phone Number" fullWidth type='number'
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant='contained' fullWidth type='submit' >
                  Submit
                </Button>
              </Grid>

            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  )
}

export default Students
