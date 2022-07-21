import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PropTypes } from "prop-types";
import { withTranslation } from "react-i18next";
import { sessionAction } from "../../redux/actions";
import { APP_CONSTANTS, I18N_CONSTANTS } from "../../constants";
import DashboardLayout from "./DashboardLayout";
import ReactGrid from "./ReactGrid";
import DynamicDashboard from "./DynamicDashboard";
import DynamicGraph from "./DynamicGraph";

import Nav from "../Common/Content/Nav";

class Dashboard extends Component {
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
    console.log(event.target.checked);

    actions.currentTheme(theme);
  }

  render() {
    const { session, t } = this.props;
    console.log(session.currentTheme);
    return (
      <div className="pASUI" style={{ background: "black" }}>
        <Nav
          onThemeChange={this.onThemeChange}
          currentTheme={session.currentTheme}
          t={t}
        >
          <DynamicDashboard />
        </Nav>
      </div>
    );
  }
}

Dashboard.propTypes = {
  session: PropTypes.shape({
    currentTheme: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    currentTheme: PropTypes.func.isRequired,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    session: state.session,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...sessionAction }, dispatch),
  };
}

const component = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default withTranslation(I18N_CONSTANTS.NAMESPACE.Dashboard)(component);
