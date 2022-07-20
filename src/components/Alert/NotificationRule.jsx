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
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

class NotificationRule extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',endPointID:"",rulesList:[],endpointsList:[],every:"",offset:"",conditionType:""};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
      this.getRules()
      this.getEndpoints()
    }
    getRules() {
      fetch("https://localhost:7239/api/Database/RulesList" ,{
       
       
    }).then(res =>
      res.json())
      .then(data => {
       
        console.log(data);
        this.setState({
          rulesList: data.notificationRules
        });
      
      });  
   

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
  
    handleChange(event) {
       
    }
  
    handleSubmit(event) {
           var Temp = { name : this.state.name,endPointID:this.state.endPointID,every:this.state.every,offset:this.state.offset,conditionType:this.state.conditionType}
              fetch("https://localhost:7239/api/Database/NotificationRule" ,{
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(Temp)
            }).then(res =>
              res.json())
              .then(data => {
                this.getRules();
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
            <div className="col-md-12">
         
          <div className="col-md-3">
          <TextField
          id="outlined-required"
          label="Name"
          size="small"
          value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}
        />
        <TextField
          id="outlined-select-currency-native"
          select
          label="Select Endpoint"
          value={this.state.type} onChange={(e) => this.setState({endPointID: e.target.value})}
          helperText="Please select endpoint"
          size="small"
        >
              {this.state.endpointsList.map(d => (<MenuItem value={d.id}>{d.name}</MenuItem>))} 

        </TextField>
        </div> 
        <div className="col-md-3">
        <TextField
          id="outlined-required"
          label="Schedule Every"
          size="small"
          value={this.state.every} onChange={(e) => this.setState({every: e.target.value})}
        />
        <TextField
          id="outlined-required"
          label="Offset"
          size="small"
          value={this.state.offset} offset={this.state.offset} onChange={(e) => this.setState({offset: e.target.value})}
        /> 
        </div>
        <div className="col-md-3">
        <TextField
          id="outlined-select-currency-native"
          select
          label="Select Condition"
          value={this.state.conditionType} onChange={(e) => this.setState({conditionType: e.target.value})}
          helperText="Please select threshold condition"
          size="small"
        >
              <MenuItem value="CRIT">Critical</MenuItem>
              <MenuItem value="OK">OK</MenuItem>
              <MenuItem value="INFO">Info</MenuItem>
              <MenuItem value="WARN">Warning</MenuItem>
              <MenuItem value="UNKNOWN">Unknown</MenuItem>

        </TextField>
        </div> 
       
                   </div>
                   <div align="center" style={{paddingTop: '20px'}}>
        <Button type="submit" variant="contained"style = {{backgroundColor:'#6d2077'}} onClick={(e) => this.handleSubmit({e})}>
        Create Notification Rule
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
            <TableCell align="right" sx={{border: 2, fontWeight: 700, fontSize: 16, color: 'lightgrey'}}>Endpoint ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.rulesList.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row" sx={{border: 1}}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{border: 1}}>{row.status}</TableCell>
              <TableCell align="right" sx={{border: 1}}>{row.type}</TableCell>
              <TableCell align="right" sx={{border: 1}}>{row.endpointID}</TableCell>
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
  export default NotificationRule;