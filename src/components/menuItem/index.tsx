import { Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { useStyles } from './style';

interface IProps {
  title?: string;
  icon?: any;
}

const MenuItem = ({ title, icon }: IProps) => {
  const classes = useStyles();

  return (
    <Box>
      <p>{title}</p>
      <img src={icon} width={30} alt='sbpay' />
    </Box>
  );
};

export default MenuItem;
