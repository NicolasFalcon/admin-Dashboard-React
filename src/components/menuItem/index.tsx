import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MenuItem } from 'react-pro-sidebar';

import { useStyles } from './style';

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

export default MenuItemSide;
