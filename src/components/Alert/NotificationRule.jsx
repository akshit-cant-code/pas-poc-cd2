import React from "react";
import Nav from "../Common/Content/Nav";
import Page from "../Dashboard/Page";


class NotificationRule extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',endPointID:"",endpointsList:[],every:"",offset:"",conditionType:""};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
        <label>EndPoint:
        <select value={this.state.type} onChange={(e) => this.setState({endPointID: e.target.value})}>
        <option value="Test">--Select Endpoint--</option>
        {this.state.endpointsList.map(d => (<option value={d.id}>{d.name}</option>))} 
              
            </select>
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
        <label>Condition:
        <select value={this.state.conditionType} onChange={(e) => this.setState({conditionType: e.target.value})}>
        <option value="Test">--Select Condition--</option>
        <option value="CRIT">Critical</option>
              <option value="OK">OK</option>
              <option value="INFO">Info</option>
              <option value="WARN">Warning</option>
              <option value="UNKNOWN">Unknown</option>
              
            </select>
        </label>
        </div> 
       
                   </div>
                   <div><input type="submit" value="Create NotificationRule"></input></div>
        </form>
        </Nav>
        </Page>
      );
    }
  }
  export default NotificationRule;