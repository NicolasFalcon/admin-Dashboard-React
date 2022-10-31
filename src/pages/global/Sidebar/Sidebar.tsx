import { useState } from 'react';
import { Sidebar, Menu, useProSidebar } from 'react-pro-sidebar';
import SbpayLogo from '../../../assets/logo/sbpay-logo-dark.svg';
import SbpayIcon from '../../../assets/logo/iconLogo.svg';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { Box, IconButton } from '@mui/material';

import { useStyles } from './style';
import MenuItemSide from '../../../components/menuItem';

const SidebarNav = () => {
  const classes = useStyles();
  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, setSelected] = useState('advance');

  return (
    <Box className={classes.container}>
      <Sidebar className={classes.sidebar}>
        <IconButton
          onClick={() => collapseSidebar()}
          disableRipple={true}
          className={classes.logo}
        >
          {collapsed ? (
            <img src={SbpayIcon} alt='sbpay' width={35} />
          ) : (
            <img src={SbpayLogo} alt='sbpay' />
          )}
        </IconButton>

        <Menu className={classes.menu}>
          <MenuItemSide
            title='Mi cuenta'
            to='/'
            icon={<CreditCardOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <MenuItemSide
            title='Avance'
            to='/advance'
            icon={<CreditCardOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <MenuItemSide
            title='Pagar'
            to='/payment'
            icon={<CreditCardOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarNav;
