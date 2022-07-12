import React, { Component } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import Page from './Page'
import { Card } from '@mui/material';
import EmptyPage from './EmptyPage'
import Form from './Form'
import Point from '../Graph/Point'
import { PropTypes } from 'prop-types';
import { withTranslation } from 'react-i18next';
import { sessionAction } from '../../redux/actions';
import { APP_CONSTANTS, I18N_CONSTANTS } from '../../constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from './NavBar';



 class DashboardLayout extends Component {
  state = {
    content: <EmptyPage></EmptyPage> ,
    dataList:[]
   }
 
  constructor(props, context) {
    super(props, context);
  console.log(props)
 
    this.onThemeChange = this.onThemeChange.bind(this);
  }

  handleCallback = (childData) =>{      
        var Tag = Point;
        if("name" in childData){
           Tag=childData.Graph
           var Temp = {Graph: childData.Graph.name, query : childData.name}
              fetch("https://localhost:7239/InfluxClient?query="+childData.Url,{
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(Temp)
            }).then(data => {
                this.setState({dataList:data});
              });           
        } 
    this.setState({content: <Tag Url={childData.name} dataList={this.state.dataList}></Tag>
     })   

} 



  componentDidMount() {};

  onThemeChange(event) {
    const { actions } = this.props;
   
    const theme = event.target.checked
      ? APP_CONSTANTS.THEME.DARK
      : APP_CONSTANTS.THEME.DEFAULT;
    actions.currentTheme(theme);
  }
  
  render() {

    
    const { session, t } = this.props;
    return (
  
      <Page title="Dashboard" >
      <Container maxWidth="xl" style={{paddingLeft: 0, paddingRight: 0}}>
        <Typography variant="h4" sx={{ mb: 3 }}>
       
        </Typography>
  
        <Grid container spacing={1}>
        
          <Grid item xs={12} sm={8} md={8} style={{paddingLeft: 0, paddingRight: 0}}>
          <Card sx={{  background:"rgb(24, 22, 22)"}}>           
               {this.state.content}
              </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <NavBar></NavBar>
          <Card sx={{  background:"rgb(24, 22, 22)"}}>           
               {<Form parentCallback = {this.handleCallback}></Form> }
              </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={7} style={{height: 540, paddingRight: 0}}>
          
          </Grid>
  
          </Grid>
      </Container>
    </Page>
  
    );
  }
}

DashboardLayout.propTypes = {
  session: PropTypes.shape({
    currentTheme: PropTypes.string.isRequired
  }).isRequired,
  actions: PropTypes.shape({
    currentTheme: PropTypes.func.isRequired
  }).isRequired,
  t: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    session: state.session
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...sessionAction }, dispatch)
  };
}

const component = connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
export default withTranslation(I18N_CONSTANTS.NAMESPACE.DashboardLayout)(component);


