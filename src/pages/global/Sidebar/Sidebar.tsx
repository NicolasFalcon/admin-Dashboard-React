import { useState } from 'react';
import { Sidebar, Menu, useProSidebar, MenuItem } from 'react-pro-sidebar';

import SbpayLogo from '../../../assets/logo/sbpay-logo-dark.svg';
import SbpayIcon from '../../../assets/logo/iconLogo.svg';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from './style';
import { themes } from '../../../theme';

interface IProps {
  title: string;
  to: string;
  icon: any;
  selected: string;
  setSelected: any;
}

const MenuItemSide = ({ title, to, icon, selected, setSelected }: IProps) => {
  const classes = useStyles();
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography className={classes.menuItemText}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SidebarNav = () => {
  const classes = useStyles();
  const { collapseSidebar, collapsed } = useProSidebar();
  const theme = useTheme();
  const colors = themes(theme.palette.mode);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      className={classes.container}
      sx={{
        '& .fpTHfu': {
          background: `${colors.grey[100]} !important`,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        },
        '& .bOQEtf': {
          border: 'none',
        },
        '& .djZVNf': {
          border: 'none',
        },
        '& .gnJkew': {
          background: `${colors.black[700]} !important`,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Sidebar className={classes.sidebar}>
        <Box className={classes.logo}>
          <IconButton onClick={() => collapseSidebar()} disableRipple={true}>
            {collapsed ? (
              <img src={SbpayIcon} alt='sbpay' width={35} />
            ) : (
              <img src={SbpayLogo} alt='sbpay' />
            )}
          </IconButton>
        </Box>

        <Menu>
          <MenuItem
            icon={
              <AccountCircleOutlinedIcon fontSize='medium' color={'primary'} />
            }
            routerLink={<Link to={'/'} />}
          >
            <Typography className={classes.menuItemText} variant='inherit'>
              Mi cuenta
            </Typography>
          </MenuItem>
          <MenuItem
            icon={<PaidOutlinedIcon fontSize='medium' color={'primary'} />}
            routerLink={<Link to={'/advance'} />}
          >
            <Typography className={classes.menuItemText} variant='inherit'>
              Avance
            </Typography>
          </MenuItem>
          <MenuItem
            icon={<PaymentsOutlinedIcon fontSize='medium' color={'primary'} />}
            routerLink={<Link to={'/payment'} />}
          >
            <Typography className={classes.menuItemText} variant='inherit'>
              Pagar
            </Typography>
          </MenuItem>
          <MenuItem
            icon={
              <CreditScoreOutlinedIcon fontSize='medium' color={'primary'} />
            }
            routerLink={<Link to={'/'} />}
          >
            <Typography className={classes.menuItemText} variant='inherit'>
              Mi tarjeta
            </Typography>
          </MenuItem>
          <MenuItem
            icon={<TrendingUpRoundedIcon fontSize='medium' color={'primary'} />}
            routerLink={<Link to={''} />}
          >
            <Typography className={classes.menuItemText} variant='inherit'>
              Aumenta tu cupo
            </Typography>
          </MenuItem>
          <MenuItem
            icon={<BarChartOutlinedIcon fontSize='medium' color={'primary'} />}
            routerLink={<Link to={''} />}
          >
            <Typography className={classes.menuItemText} variant='inherit'>
              Estado de cuenta
            </Typography>
          </MenuItem>
          <MenuItem
            icon={
              <CurrencyExchangeOutlinedIcon
                fontSize='medium'
                color={'primary'}
              />
            }
            routerLink={<Link to={''} />}
          >
            <Typography className={classes.menuItemText} variant='inherit'>
              Ver Movimientos
            </Typography>
          </MenuItem>
          <MenuItem
            icon={<AddCardOutlinedIcon fontSize='medium' color={'primary'} />}
            routerLink={<Link to={''} />}
          >
            <Typography className={classes.menuItemText} variant='inherit'>
              Linea de crédito
            </Typography>
          </MenuItem>
          <MenuItem
            icon={<LightbulbOutlinedIcon fontSize='medium' color={'primary'} />}
            routerLink={<Link to={''} />}
          >
            <Typography className={classes.menuItemText} variant='inherit'>
              Beneficios
            </Typography>
          </MenuItem>
          <MenuItem
            icon={<HandshakeOutlinedIcon fontSize='medium' color={'primary'} />}
            routerLink={<Link to={''} />}
          >
            <Typography className={classes.menuItemText} variant='inherit'>
              Contratos
            </Typography>
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarNav;
