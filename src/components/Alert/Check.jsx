import React from "react";
import Nav from "../Common/Content/Nav";
import Page from "../Dashboard/Page";

class Check extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',query:"",type:"",value:'1',every:"",offset:"",thresholdType:"",thresholdValue:0};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handle_change = (value) => {
      this.setState({ value })
  }
  
    handleChange(event) {
       
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
        </Nav>
        </Page>
      );
    }
  }
  export default Check;