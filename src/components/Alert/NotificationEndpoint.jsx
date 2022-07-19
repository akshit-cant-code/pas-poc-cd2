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
               alert(data);
               
              });  
           
      event.preventDefault();
    }
  
    render() {
        
      return (
        <Page>
        <Nav>
        <form onSubmit={this.handleSubmit}>
            <div className="col-md-12">
          
          <div className="col-md-3">
          <label>Name:
        <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
        </label> 
        </div>
        <div className="col-md-3">
          <label>Url:
        <input type="text" value={this.state.url} onChange={(e) => this.setState({url: e.target.value})} />
        </label> 
        </div>
        <div className="col-md-3">
          <label>Email Addresses:
            <textarea value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} /> 
                   </label>
                   </div>
       
       
                   </div>
                   <div><input type="submit" value="Create Endpoint"></input></div>
        </form>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Method</TableCell>
            <TableCell align="right">Url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.endpointsList.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.method}</TableCell>
              <TableCell align="right">{row.url}</TableCell>
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