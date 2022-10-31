import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MenuItem } from 'react-pro-sidebar';
import { useEffect } from 'react';

interface IProps {
  title: string;
  to: string;
  icon: any;
  selected: string;
  setSelected: any;
}

const MenuItemSide = ({ title, to, icon, selected, setSelected }: IProps) => {
  useEffect(() => {
    console.log('====================================');
    console.log(to);
    console.log('====================================');
  }, [to]);

  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} id='RouterNavLink' />
    </MenuItem>
  );
};

export default MenuItemSide;
