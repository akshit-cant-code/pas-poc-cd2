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
import { BorderAllTwoTone } from "@material-ui/icons";

class Check extends React.Component {
    constructor(props) {
      super(props);
      this.state = {checkList:[],name: '',query:"",type:"",value:'1',every:"",offset:"",thresholdType:"",thresholdValue:0};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handle_change = (value) => {
      this.setState({ value })
  }
  
    handleChange(event) {
       
    }
    componentDidMount(){
      this.getChecks()
    }
    getChecks() {
      fetch("https://localhost:7239/api/Database/ChecksList" ,{
       
       
    }).then(res =>
      res.json())
      .then(data => {
       
        console.log(data);
        this.setState({
          checkList: data.checks
        });
      
      });  
   

    }
  
    handleSubmit(event) {
           var Temp = {query: this.state.query, name : this.state.name,type:this.state.type,every:this.state.every,offset:this.state.offset,thresholdType:this.state.thresholdType,thresholdValue:this.state.thresholdValue}
              fetch("https://localhost:7239/api/Database/Check" ,{
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(Temp)
            }).then(res =>
              res.json())
              .then(data => {
                this.getChecks();
               alert(data); 
              });  
           
      event.preventDefault();
    }
  
    render() {
      const darkTheme = createTheme({
        palette: {
        mode: 'dark',
        },
        });
      return (
        <Page>
        <Nav>
        {/* <ThemeProvider theme={darkTheme}> */}
          <div align="center" styles={{borderBottom: '100px'}}>
        <Box
        
      component="form"
      display="flex"
      justifyContent="center"
      alignItems="center"

      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        border: 4,
        height: 500,
        width: 600,
        borderColor: '#6d2077'
      }}
      noValidate
      autoComplete="off"
    >
        <form onSubmit={this.handleSubmit}>
          <div>
          <TextField
          id="outlined-select-currency-native"
          select
          label="Select Alert"
          value={this.state.type} onChange={(e) => this.setState({type: e.target.value})}
          helperText="Please select Alert type"
          size="small"
        >
              <MenuItem value="CRIT">Critical</MenuItem>
              <MenuItem value="OK">OK</MenuItem>
              <MenuItem value="INFO">Info</MenuItem>
              <MenuItem value="WARN">Warning</MenuItem>
              <MenuItem value="UNKNOWN">Unknown</MenuItem>

        </TextField>

          <TextField
          id="outlined-required"
          label="Name"
          size="small"
          value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}
        />
        </div>
        <div>
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
        <div>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Select condition"
          value={this.state.thresholdType} onChange={(e) => this.setState({thresholdType: e.target.value})}
          helperText="Please select threshold condition"
          size="small"
        >
              <MenuItem value="greater"> Greater</MenuItem>
              <MenuItem value="lesser"> Lesser</MenuItem>
        </TextField>
      
            <TextField
          id="outlined-required"
          label="Value"
          defaultValue="0"
          size="small"
          value={this.state.thresholdValue} onChange={(e) => this.setState({thresholdValue: e.target.value})}
        /> 
        </div>
       <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Query"
          multiline
          maxRows={4}
          value={this.state.query} onChange={(e) => this.setState({query: e.target.value})}
        />
        </div>
        <div align="center" style={{paddingTop: '20px'}}>

        <Button type="submit" variant="contained"style = {{backgroundColor:'#6d2077'}} onClick={(e) => this.handleSubmit({e})}>
        Create Check
        </Button>
        </div>
        </form>
        </Box>
        </div>
        <br></br>
        
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , border: 10}} aria-label="simple table">
        <TableHead >
          <TableRow sx={{background: '#6d2077'}}>
            <TableCell sx={{border: 2, fontWeight: 700, fontSize: 16, color: 'lightgrey'}}>Name</TableCell>
            <TableCell align="right" sx={{border: 2, fontWeight: 700, fontSize: 16, color: 'lightgrey'}}>Status</TableCell>
            <TableCell align="right" sx={{border: 2, fontWeight: 700, fontSize: 16, color: 'lightgrey'}}>Type</TableCell>
            <TableCell align="right" sx={{border: 2, fontWeight: 700, fontSize: 16, color: 'lightgrey'}}>Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.checkList.map((row) => (
            <TableRow
              key={row.name}
              
            >
              <TableCell component="th" scope="row" sx={{border: 1}}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{border: 1}}>{row.status}</TableCell>
              <TableCell align="right" sx={{border: 1}}>{row.type}</TableCell>
              <TableCell align="right" sx={{border: 1}}>{row.thresholds.map((k)=>k.level)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* </ThemeProvider> */}
        </Nav>
        </Page>
      );
    }
  }
  export default Check;