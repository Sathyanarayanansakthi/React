import { Typography, AppBar, CssBaseline, Toolbar, Container, Grid, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import theme from '../Theme'; 
import { ThemeProvider } from '@mui/material/styles'; 
import pcImage from "../assets/pc.jpg"
import mATW from "../assets/matw.jpg"
import {Link} from 'react-router-dom'



const Home = () => {
  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <BookRoundedIcon />
          <Typography variant="h6" >
            Hi Soldiers
          </Typography>
        </Toolbar>
      </AppBar>
      <main>

    
        <Container maxWidth="sm" sx={{ marginTop: '100px' }}>
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            BlogSite
          </Typography>

          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Hi, Im Sathya Narayanan and this is my new try to write a blog.
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button component={Link} to ="/Login"variant="contained" color="primary">Login</Button>
            </Grid>
            <Grid item>
              <Button component={Link} to="/SignUp" variant="outlined" color="secondary">Sign Up</Button>
            </Grid>
          </Grid>

        </Container>

        
        <Container sx={{ padding: '30px', maxWidth: 'sm' }}> 
   <Card>
    <CardMedia
      component="img"
      height="300"
      image={mATW}
      sx={{
        width: '100%', 
        height: { xs: '200px', sm: '300px' }, 
        objectFit: 'cover',
      }} 
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Blog Post Title
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This is a brief description of the blog post content.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">Read More</Button>
    </CardActions>
  </Card>
</Container>



        <Container sx={{ padding: '20px' }}> 
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={pcImage}
         
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Blog Post Title
              </Typography>
              <Typography variant="body2" color="textSecondary">
                This is a brief description of the blog post content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">Read More</Button>
            </CardActions>
          </Card>
        </Container>


        <Container sx={{ padding: '20px' }}> 
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random"
              alt="Random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Blog Post Title
              </Typography>
              <Typography variant="body2" color="textSecondary">
                This is a brief description of the blog post content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">Read More</Button>
            </CardActions>
          </Card>
        </Container>


        <Container sx={{ padding: '20px' }}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="./assets/pc.jpg"
              alt="Random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Blog Post Title
              </Typography>
              <Typography variant="body2" color="textSecondary">
                This is a brief description of the blog post content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">Read More</Button>
            </CardActions>
          </Card>
        </Container>

      </main>
    </ThemeProvider>
  );
}

export default Home;
