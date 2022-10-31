import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../../../theme/index';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { useStyles } from './style';

const Topbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const colorMode = useContext(ThemeContext);

  return (
    <Box className={classes.container}>
      <Box className={classes.navBar}>
        <Box className={classes.navBarLeftLogo}></Box>
        <Box className={classes.navBarRight}>
          <IconButton>
            <PersonOutlineOutlinedIcon
              color={theme.palette.mode === 'dark' ? 'secondary' : 'inherit'}
            />
          </IconButton>
          <IconButton onClick={colorMode.toggleTheme}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlinedIcon color='secondary' />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
