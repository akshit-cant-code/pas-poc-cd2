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
          <label>
            Pick your Alert type:
            <select value={this.state.type} onChange={(e) => this.setState({type: e.target.value})}>
            <option value="Test">--Select Type--</option>
              <option value="CRIT">Critical</option>
              <option value="OK">OK</option>
              <option value="INFO">Info</option>
              <option value="WARN">Warning</option>
              <option value="UNKNOWN">Unknown</option>
            </select>
          </label>
          </div>
          <div className="col-md-3">
          <label>Name:
        <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
        </label> 
        </div>
        <div className="col-md-3">
          <label>Schedule Every:
        <input type="text" value={this.state.every} onChange={(e) => this.setState({every: e.target.value})} />
        </label> 
        <label>Offset:
        <input type="text" value={this.state.offset} onChange={(e) => this.setState({offset: e.target.value})} />
        </label> 
        </div>
       
        <div className="col-md-3">
          <label>Threshold :
          <select value={this.state.thresholdType} onChange={(e) => this.setState({thresholdType: e.target.value})}>
            <option value="test">--Select Condition--</option>
              <option value="greater">Greater</option>
              <option value="lesser">Lesser</option>
            </select>
        
      
        <input type="number" value={this.state.thresholdValue} onChange={(e) => this.setState({thresholdValue: e.target.value})} />
        </label> 
        </div>
    
       
        <div className="col-md-3">
          <label>Query:
            <textarea value={this.state.query} onChange={(e) => this.setState({query: e.target.value})} /> 
                   </label>
                   </div>
                   </div>
                   <div><input type="submit" value="Create Alert"></input></div>
        </form>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.checkList.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.thresholds.map((k)=>k.level)}</TableCell>
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
  export default Check;