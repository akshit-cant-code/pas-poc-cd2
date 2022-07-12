import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTranslation } from 'react-i18next';
import { sessionAction } from '../../redux/actions';
import { APP_CONSTANTS, I18N_CONSTANTS } from '../../constants';
import DashboardLayout from './DashboardLayout'
import Nav from '../Common/Content/Nav'

 class QueryPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.onThemeChange = this.onThemeChange.bind(this);
  }

  componentDidMount() {}

  onThemeChange(event) {
    const { actions } = this.props;

    const theme = event.target.checked
      ? APP_CONSTANTS.THEME.DARK
      : APP_CONSTANTS.THEME.DEFAULT;
      console.log(event.target.checked)

    actions.currentTheme(theme);
    
  }

  render() {
    const { session, t } = this.props;
    console.log(session.currentTheme)
    return (
      <div className="pASUI" style={{background:"black"}}>
        <Nav onThemeChange={this.onThemeChange}
          currentTheme={session.currentTheme}  t={t}>
        <DashboardLayout onThemeChange={this.onThemeChange}
          currentTheme={session.currentTheme}         
        />
        </Nav>
       
      </div>
    );
  }
}


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

const component = connect(mapStateToProps, mapDispatchToProps)(QueryPage);
export default withTranslation(I18N_CONSTANTS.NAMESPACE.QueryPage)(component);


