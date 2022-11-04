import { Box } from '@mui/material';
import React from 'react';
import { useStyles } from './styles';

const Advance = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <h1>Advance</h1>
    </Box>
  );
};

export default Advance;
