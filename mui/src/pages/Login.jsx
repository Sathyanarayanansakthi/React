import { useState } from 'react';
import theme from '../Theme';
import {
  TextField, Button, Typography, Container, Grid, CssBaseline, Paper, Snackbar, Alert,
  ThemeProvider, Link, Box,
} from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false); // State to control Snackbar visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);

    // Show Snackbar message
    setOpen(true);

    // Clear the fields after submission (optional)
    setEmail('');
    setPassword('');
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CssBaseline />
        <Paper elevation={21} sx={{ padding: '20px', width: '100%' }}>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{ backgroundColor: 'background.paper' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  sx={{ backgroundColor: 'background.paper' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>

          {/* Forgot Password Link */}
          <Box sx={{ textAlign: 'center', marginTop: 5 }}>
            <Link href="#" variant="body3" onClick={() => alert('Forgot Password functionality can be implemented here.')}>
              Forgot Password?
            </Link>
          </Box>
        </Paper>

        {/* Snackbar for feedback message */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Login successful!
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
