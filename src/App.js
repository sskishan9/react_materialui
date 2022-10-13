import './App.css';
import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
function App() {
  const cards=[1,2,3,4,5,6,7,8,9]
  return (
    <div className="App">
      <>
        <CssBaseline/>
        <AppBar position='relative'>
          <Toolbar>
            <PhotoCamera/>
            <Typography variant="h6" style={{marginLeft:"20px"}}>Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div>
          <Container maxWidth="sm" style={{marginTop:"100px"}}>
            <Typography variant="h2" color='textPrimary' align='center' gutterBottom>Photo Album</Typography>
            <Typography variant="h5" align='center' color='textSecondary' paragraph>
            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant='contained' color='primary'>Main Call To Action</Button>
                    
                  </Grid>
                  <Grid item>
                  <Button variant='outlined' color='primary'>Secondary Action</Button>
                  </Grid>
              </Grid>
            </div>
          </Container>
          </div>
          <Container maxWidth="md">
            <Grid container spacing={4}>
              {cards.map(()=>
              <Grid item md="4">
              <Card>
                <CardMedia image="https://images.unsplash.com/random"/>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Heading
                  </Typography>
                  <Typography >
                  This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>View</Button>
                  <Button size='small' color='primary'>Edit</Button>
                </CardActions>
              </Card>
            </Grid>
            )}
              
            </Grid>
          </Container>
        </main>
        
      </>
    </div>
  );
}

export default App;
