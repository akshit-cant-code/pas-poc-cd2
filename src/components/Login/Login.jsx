
import React from 'react';
import { PropTypes } from 'prop-types';
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Content from '../Common/Content/index'
import { useHistory } from "react-router-dom";

const initialState = {
  username: "admin",
  password: "admin",
};
const Login = ({ onThemeChange, currentTheme, t }) => {
  const history = useHistory();
    // const classes = useStyles();
    const [loginData, setLoginData] = useState(initialState);
  
    const handleInputChange = (event, property) => {
      setLoginData({ ...loginData, [property]: event.target.value });
    };
  
    const onSubmit = () => {
      if (loginData.username === "admin" && loginData.password === "admin") {
        let path = `dashboard`; 
        history.push(path);
      } else {
        alert("Invalid credentials");
      }
     
    };
    return (
      <>
      <span
        style={{
          height: "50vh",
          width: "99vw",
          background: "#6D2077",
          position: "absolute",
          zIndex: -1,
        }}
      >
        <h3 style={{ color: "#fff", paddingLeft: "1vh" }}>Entrust</h3>
        <p style={{ color: "#fff", paddingLeft: "1vh" }}>PAS POC</p>
      </span>
    
        <Grid item container  pt={10} justifyContent="center" alignItems="center">
          <Grid
            item
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
            sx={{
              background: "#fff",
              padding: "12vh 4vh",
              maxWidth: 300,
              boxShadow:
                "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
              borderRadius: "1vh",
            }}
          >
            <Grid
              item
              container
              display="flex"
              justifyContent="center"
              direction="column"
              sx={{ width: "100%"}}
            
            >
              <Grid item>
                <TextField
                  label="Username"
                  variant="outlined"
                  size="small"
                  required
                  fullWidth
                  value={loginData.username}
                  onChange={(e) => handleInputChange(e, "username")}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  variant="outlined"
                  size="small"
                  required
                  fullWidth
                  type="password"
                  sx={{ margin: "4vh 0 5vh" }}
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, "password")}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              sx={{ width: "100%" }}
              display="flex"
              justifyContent="center"
              direction="column"
              alignItems="stretch"
            >
              <Button variant="contained" style={{ backgroundColor: 'rgb(109, 32, 119)' }}  sx={{ width: "100%" }} onClick={onSubmit}>
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>

    </>
    )

}

Login.defaultProps = {};

Login.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default Login;


