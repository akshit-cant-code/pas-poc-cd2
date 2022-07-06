import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Switch
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LabelIcon from '@material-ui/icons/Label';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { APP_CONSTANTS } from '../../../constants';

const useStyles = makeStyles(() => ({
  container: {},
  sectionLeftContent: {
    minHeight: '100vh',
    justifyContent: 'center',
    backgroundImage: 'url("/assets/images/welcome-logo.png")',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '100%',
    backgroundColor: '#000'
  },
  sectionRightContent: {
    padding: '24px'
  },
  content: {
    padding: '32px 16px'
  },
  contentHeading: {
    marginBottom: '16px'
  },
  contentSubHeading: {
    marginBottom: '8px'
  },
  contentListItem: {
    alignItems: 'flex-start'
  },
  contentListItemIcon: {
    marginTop: '4px',
    fontSize: '16px'
  },
  contentLink: {},
  contentSubListItem: {
    paddingTop: '2px',
    paddingBottom: '2px',
    alignItems: 'center'
  },
  contentSubListItemIcon: {
    fontSize: '12px'
  },
  contentFooter: {
    margin: '16px 0'
  }
}));

const WelcomePage = ({ onThemeChange, currentTheme, t }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Grid container spacing={0} justifyContent="center">
          <Grid item xs={12} md={5}>
            <div className={classes.sectionLeftContent} />
          </Grid>
          <Grid item xs={12} md={7}>
            <div className={classes.sectionRightContent}>
              <Typography variant="subtitle1" className="padding-16">
                <Grid
                  component="label"
                  container
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Grid item>Default Theme</Grid>
                  <Grid item>
                    <Switch
                      checked={currentTheme === APP_CONSTANTS.THEME.DARK}
                      onChange={onThemeChange}
                      name="themeButton"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </Grid>
                  <Grid item>Dark Theme</Grid>
                </Grid>
              </Typography>
              <div className={classes.content}>
                <Typography variant="h5" className={classes.contentHeading}>
                  {t('home.welcomePage.heading')}
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.contentSubHeading}
                >
                  {t('home.welcomePage.subHeading1')}
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.contentSubHeading}
                >
                  {t('home.welcomePage.subHeading2')}
                </Typography>
                <List component="nav" aria-label="main content">
                  <ListItem className={classes.contentListItem}>
                    <ListItemIcon>
                      <LabelIcon className={classes.contentListItemIcon} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <>
                          <Link
                            href="#"
                            target="_blank"
                            className={classes.contentLink}
                            variant="subtitle2"
                          >
                            {t('home.welcomePage.labels.quickStart')}
                          </Link>
                          {' - '}
                          {t('home.welcomePage.descriptions.quickStart')}
                        </>
                      }
                    />
                  </ListItem>
                  <ListItem className={classes.contentListItem}>
                    <ListItemIcon>
                      <LabelIcon className={classes.contentListItemIcon} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <>
                          <Link
                            href="https://labs.globallogic.com/desidev/generator/frameworks/react/base/es6-spa-flat-responsiveweb/-/wikis/Guide"
                            target="_blank"
                            className={classes.contentLink}
                            variant="subtitle2"
                          >
                            {t('home.welcomePage.labels.cdCliGuide')}
                          </Link>
                          {' - '}
                          {t('home.welcomePage.descriptions.cdCliGuide')}
                        </>
                      }
                    />
                  </ListItem>
                  <ListItem className={classes.contentListItem}>
                    <ListItemIcon>
                      <LabelIcon className={classes.contentListItemIcon} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <>
                          <Link
                            href="#"
                            target="_blank"
                            className={classes.contentLink}
                            variant="subtitle2"
                          >
                            {t('home.welcomePage.labels.coreFeatures')}
                          </Link>
                          {' - '}
                          <List
                            component="nav"
                            aria-label="main mailbox folders"
                          >
                            <ListItem className={classes.contentSubListItem}>
                              <ListItemIcon>
                                <FiberManualRecordIcon
                                  className={classes.contentSubListItemIcon}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <>
                                    Routing framework with{' '}
                                    <Link
                                      href="https://reactrouter.com/"
                                      target="_blank"
                                      className={classes.contentLink}
                                      variant="subtitle2"
                                    >
                                      react-router
                                    </Link>
                                  </>
                                }
                              />
                            </ListItem>
                            <ListItem className={classes.contentSubListItem}>
                              <ListItemIcon>
                                <FiberManualRecordIcon
                                  className={classes.contentSubListItemIcon}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <>
                                    In-Built{' '}
                                    <Link
                                      href="https://material-ui.com/"
                                      target="_blank"
                                      className={classes.contentLink}
                                      variant="subtitle2"
                                    >
                                      material-ui
                                    </Link>{' '}
                                    components
                                  </>
                                }
                              />
                            </ListItem>
                            <ListItem className={classes.contentSubListItem}>
                              <ListItemIcon>
                                <FiberManualRecordIcon
                                  className={classes.contentSubListItemIcon}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <>
                                    Internationalisation support with{' '}
                                    <Link
                                      href="https://www.i18next.com/"
                                      target="_blank"
                                      className={classes.contentLink}
                                      variant="subtitle2"
                                    >
                                      i18next
                                    </Link>
                                  </>
                                }
                              />
                            </ListItem>
                            <ListItem className={classes.contentSubListItem}>
                              <ListItemIcon>
                                <FiberManualRecordIcon
                                  className={classes.contentSubListItemIcon}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <>
                                    State management framework with{' '}
                                    <Link
                                      href="https://redux.js.org/"
                                      target="_blank"
                                      className={classes.contentLink}
                                      variant="subtitle2"
                                    >
                                      Redux
                                    </Link>
                                    /
                                    <Link
                                      href="https://redux-saga.js.org/"
                                      target="_blank"
                                      className={classes.contentLink}
                                      variant="subtitle2"
                                    >
                                      Redux-Saga
                                    </Link>
                                  </>
                                }
                              />
                            </ListItem>
                            <ListItem className={classes.contentSubListItem}>
                              <ListItemIcon>
                                <FiberManualRecordIcon
                                  className={classes.contentSubListItemIcon}
                                />
                              </ListItemIcon>
                              <ListItemText primary="Common utilities" />
                            </ListItem>

                            <ListItem className={classes.contentSubListItem}>
                              <ListItemIcon>
                                <FiberManualRecordIcon
                                  className={classes.contentSubListItemIcon}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <>
                                    <Link
                                      href="https://webpack.js.org/"
                                      target="_blank"
                                      className={classes.contentLink}
                                      variant="subtitle2"
                                    >
                                      Webpack
                                    </Link>{' '}
                                    5 integration
                                  </>
                                }
                              />
                            </ListItem>
                          </List>
                        </>
                      }
                    />
                  </ListItem>
                  <ListItem className={classes.contentListItem}>
                    <ListItemIcon>
                      <LabelIcon className={classes.contentListItemIcon} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <>
                          <strong>
                            <Link
                              href="http://del1-vm-pocalm:9000"
                              target="_blank"
                              className={classes.contentLink}
                              variant="subtitle2"
                            >
                              {t('home.welcomePage.labels.reusableComponents')}
                            </Link>
                            {' - '}
                          </strong>
                          {t(
                            'home.welcomePage.descriptions.reusableComponents'
                          )}
                        </>
                      }
                    />
                  </ListItem>
                  <ListItem className={classes.contentListItem}>
                    <ListItemIcon>
                      <LabelIcon className={classes.contentListItemIcon} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <>
                          <strong>
                            <Link
                              href="http://localhost:8080"
                              target="_blank"
                              variant="subtitle2"
                              className={classes.contentLink}
                            >
                              {t('home.welcomePage.labels.testCoverage')}
                            </Link>
                            {' - '}
                          </strong>
                          {t('home.welcomePage.descriptions.testCoverage')}
                        </>
                      }
                    />
                  </ListItem>
                </List>
                <Typography variant="body1" className={classes.contentFooter}>
                  {t('home.welcomePage.disclaimer')}
                </Typography>
                <Typography
                  variant="body2"
                  className="welcome-section welcome-footer"
                >
                  {t('home.welcomePage.removeWelcome')}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

WelcomePage.defaultProps = {};

WelcomePage.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default WelcomePage;
