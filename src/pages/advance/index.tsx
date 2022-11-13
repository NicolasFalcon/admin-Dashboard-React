import { Box } from '@mui/material';
import React from 'react';
import { WelcomeCard } from '../../components';
import { useStyles } from './styles';

const Advance = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <WelcomeCard />
    </Box>
  );
};

export default Advance;
