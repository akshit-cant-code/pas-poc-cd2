import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Tooltip from "@mui/material/Tooltip";
import Switch from "@mui/material/Switch";
import { PropTypes } from 'prop-types';
import { APP_CONSTANTS } from '../../../constants';
import Export from '../../Graph/Export'
// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Grid } from "@mui/material";
import { dark } from "@material-ui/core/styles/createPalette";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Nav = ({ onThemeChange, currentTheme, t,children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const history = useHistory();

   //const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  
  const navigate = () => {
      let path = `/`; 
      history.push(path);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ background:"rgb(109, 32, 119)" }}>
        <Toolbar variant="dense">
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton> */}
          <Grid container alignItems="center">
            <Grid item xs={8}>
              <Typography variant="label" noWrap component="div">
                Entrust
              </Typography>
              
            </Grid>
         
            
            {/* <Tooltip>
        
            </Tooltip> */}
            <Grid item xs={2}>
            <Export></Export>

            </Grid>
           
             <Grid>
            

          <Tooltip title="Admin">
           
          <IconButton>
            <AccountCircle sx={{ color: "#fff" }} />
          </IconButton>
          </Tooltip>
          <Tooltip title="Logout">
          <IconButton onClick={() => navigate("/")}>
            <LogoutIcon sx={{ color: "#fff" }} />
          </IconButton>
          </Tooltip>
          
          
          
        </Grid>
            </Grid>
            
        
        </Toolbar>
      </AppBar>
      {/* <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Graphs"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer> */}
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}

Nav.defaultProps = {};

Nav.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default Nav;
