import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { withTranslation } from 'react-i18next';
import { sessionAction } from '../../redux/actions';
import { APP_CONSTANTS, I18N_CONSTANTS } from '../../constants';
// import { WelcomePage } from '../Common';
import Login  from '../Login/Login';
class Home extends Component {
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

    actions.currentTheme(theme);
  }

  render() {
    const { session, t } = this.props;
    return (
      <div className="pASUI">
        <Login
          onThemeChange={this.onThemeChange}
          currentTheme={session.currentTheme}
          t={t}
        />
      </div>
    );
  }
}

Home.propTypes = {
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

const component = connect(mapStateToProps, mapDispatchToProps)(Home);
export default withTranslation(I18N_CONSTANTS.NAMESPACE.HOME)(component);
