import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { useStyles } from './styles';
import {
  Box,
  useTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

import { themes } from '../../../theme/index';
import SbpayLogo from '../../../assets/logo/white-logo.svg';

import { menuItems } from '../../../contants/menuItem';
import { useLocation, useNavigate } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  const theme = useTheme();
  const colors = themes(theme.palette.mode);

  const handlerNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Box className={classes.container}>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        open={false}
      >
        <Box
          style={{
            background: colors.black[700],
            height: '100%',
          }}
        >
          <Box className={classes.logo}>
            <img src={SbpayLogo} alt='sbpay' width={120} />
          </Box>

          <Box className={classes.menu}>
            <List>
              {menuItems.map((item) => (
                <ListItem
                  key={item.text}
                  onClick={() => handlerNavigate(item.path)}
                >
                  <ListItemButton
                    selected={location.pathname === item.path ? true : false}
                    focusVisibleClassName={classes.focusVisible}
                  >
                    <ListItemIcon>
                      <img src={item.icon} width={30} alt='sbpay' />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        variant: 'body2',
                        color: 'white',
                        fontWeight: 500,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;
