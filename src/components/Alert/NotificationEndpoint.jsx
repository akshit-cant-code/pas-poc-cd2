import React from "react";
import Nav from "../Common/Content/Nav";
import Page from "../Dashboard/Page";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material/styles';


class NotificationEndpoint extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',url:"",email:"",endpointsList:[]};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
       
    }
    componentDidMount(){
      this.getEndpoints()
    }
    getEndpoints() {
      fetch("https://localhost:7239/api/Database/EndpointsList" ,{
       
       
    }).then(res =>
      res.json())
      .then(data => {
       
        console.log(data);
        this.setState({
          endpointsList: data.notificationEndpoints
        });
      
      });  
   

    }
  
    handleSubmit(event) {
           var Temp = { name : this.state.name,url:this.state.url,email:this.state.email}
              fetch("https://localhost:7239/api/Database/NotificationEndpoint" ,{
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(Temp)
            }).then(res =>
              res.json())
              .then(data => {
                this.getEndpoints();
               alert(data);
               
              });  
           
      event.preventDefault();
    }
  
    render() {
        
      return (
        <Page>
        <Nav>
        <div align="center" styles={{borderBottom: '100px'}}>
        <Box
        
      component="form"
      display="flex"
      justifyContent="center"
      alignItems="center"

      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        border: 4,
        height: 400,
        width: 600,
        borderColor: '#6d2077'
      }}
      noValidate
      autoComplete="off"
    >
        <form onSubmit={this.handleSubmit}>
          
          <div className="col-md-3">
          <TextField
          id="outlined-required"
          label="Name"
          size="small"
          style={{width: 460}}
          value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}
        />
        </div>
        <div className="col-md-3">
        <TextField
          id="outlined-required"
          label="Url"
          size="small"
          style={{width: 460}}
          value={this.state.url} onChange={(e) => this.setState({url: e.target.value})}
        />
        </div>
        <div className="col-md-3">
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          style={{width: 460}}
          maxRows={10}
          value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}
        />
                   </div>
                   <div align="center" style={{paddingTop: '20px'}}>
        <Button type="submit" variant="contained"style = {{backgroundColor:'#6d2077'}} onClick={(e) => this.handleSubmit({e})}>
        Create Notification Endpoint
        </Button>
        </div>
                   
        </form>
        </Box>
        </div>
        <br></br>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , border: 10}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{background: '#6d2077'}}>
            <TableCell sx={{border: 2, fontWeight: 700, fontSize: 16, color: 'lightgrey'}}>Name</TableCell>
            <TableCell align="right" sx={{border: 2, fontWeight: 700, fontSize: 16, color: 'lightgrey'}}>Status</TableCell>
            <TableCell align="right" sx={{border: 2, fontWeight: 700, fontSize: 16, color: 'lightgrey'}}>Type</TableCell>
            <TableCell align="right" sx={{border: 2, fontWeight: 700, fontSize: 16, color: 'lightgrey'}}>Method</TableCell>
            <TableCell align="right" sx={{border: 2, fontWeight: 700, fontSize: 16, color: 'lightgrey'}}>Url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.endpointsList.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row" sx={{border: 1}}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{border: 1}}>{row.status}</TableCell>
              <TableCell align="right" sx={{border: 1}}>{row.type}</TableCell>
              <TableCell align="right" sx={{border: 1}}>{row.method}</TableCell>
              <TableCell align="right" sx={{border: 1}}>{row.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Nav>
        </Page>
      );
    }
  }
  export default NotificationEndpoint;