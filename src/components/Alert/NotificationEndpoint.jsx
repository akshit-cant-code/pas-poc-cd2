import React from "react";
import Nav from "../Common/Content/Nav";
import Page from "../Dashboard/Page";


class NotificationEndpoint extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',url:""};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
       
    }
  
    handleSubmit(event) {
           var Temp = { name : this.state.name,url:this.state.url}
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
       
       
                   </div>
                   <div><input type="submit" value="Create Endpoint"></input></div>
        </form>
        </Nav>
        </Page>
      );
    }
  }
  export default NotificationEndpoint;