import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import LayerIcon from '@material-ui/icons/Layers'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FolderIcon from '@material-ui/icons/Folder'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  BottomNavigation,
  BottomNavigationAction,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogContentText,
  DialogActions,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainFeauturesPost: {
    position: 'realtive',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  mainFeauturesPostContent: {
    position: 'realtive',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: '90.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4),
  },
}))

const App = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState('recents')
  const [open, setOpen] = React.useState(false)
  const handleChange = (e, newevalue) => {
    setValue(newevalue)
  }
  const handleClickOpen = () =>{
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Material UI
            </Typography>
            <Box mr={3}>
              <Button
                color="inherit"
                variant="outlined"
                onClick={handleClickOpen}
              >
                Log in
              </Button>

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledBy="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to watch videos</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Adress"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Log in
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">
              Sign up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper
          className={classes.mainFeauturesPost}
          style={{
            background: `url(https://www.zastavki.com/pictures/originals/2015/Auto___Subaru_Car_Subaru_WRX_in_a_dark_forest_104156_.jpg)`,
          }}
        >
          <Container fixed>
            <Grid Container>
              <Grid item md={6}>
                <div className={classes.mainFeauturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Material UI
                  </Typography>
                  <Typography component="h5" color="inherit" paragraph>
                    Adipisicing veniam dolor deserunt eu laborum veniam veniam
                    ullamco pariatur quis.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>

        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Material UI
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Sint anim consectetur ex deserunt irure aliqua. Pariatur
              incididunt commodo ullamco eu aute officia excepteur. Id nisi ad
              elit do nulla quis. Lorem pariatur proident quis fugiat Lorem
              ipsum dolore. Incididunt dolore adipisicing labore exercitation
              duis minim occaecat elit laboris ad. Tempor eiusmod enim dolore
              reprehenderit cupidatat anim ullamco nostrud cillum duis sint.
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Start Now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((item) => {
              return (
                <Grid item key={item} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://resh.edu.ru/uploads/lesson_extract/4043/20190315173425/OEBPS/objects/c_peace_1_5_1/47d73ef6-4ff7-4239-bf2f-3dcdf3c14602.jpeg"
                      title="image Title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" gutterBottom>
                        Blog Post
                      </Typography>
                      <Typography>
                        Deserunt aliqua nulla sint quis consequat esse eu aute
                        id labore eu.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" clor="primary">
                        view
                      </Button>
                      <Button size="small" clor="primary">
                        edit
                      </Button>
                      <LayerIcon />
                      <PlayCircleFilledIcon />
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography varinat="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
        <Typography
          align="center"
          color="textSecondary"
          component="p"
          variant="subtitle1"
        >
          React Material UI first Project
        </Typography>
      </footer>
    </>
  )
}

export default App
