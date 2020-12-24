import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import TopBar from './components/TopBar';
import { Fab } from 'react-tiny-fab';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("xs"));
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const getCurrentLng = () => i18n.language || window.localStorage.i18nextLng || '';
  const [language, setLanguage] = useState(getCurrentLng());

  const changeLanguage = () => {
      console.log('here');
      if (language === 'en') {
          i18n.changeLanguage('es');
          setLanguage('es');
      } else {
          i18n.changeLanguage('en');
          setLanguage('en');
      }
  };

  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
            <Fab
                style={{ bottom: isSmallScreen?-20:0, left: isSmallScreen?-20:0 }}
                mainButtonStyles={{ backgroundColor: '#FFFFFF', borderRadius: 48, width: 40, height: 40 }}
                icon={<ReactCountryFlag countryCode={language==='en'?'GB':'ES'} svg />}
                //icon={language==='en'?'US':'ES'}
                alwaysShowTitle={true}
                onClick={changeLanguage}
            >

            </Fab>            
          </div>
        </div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
