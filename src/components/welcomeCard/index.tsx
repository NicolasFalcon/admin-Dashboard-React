import React from 'react';
import { useStyles } from './style';
import { Typography, Box } from '@mui/material';
import CustomButton from '../customButton';

const WelcomeCard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <Typography variant='h4' color={'#ffffff'}>
          Bienvenido de vuelta
        </Typography>
        <Typography variant='h4' color={'#ffffff'}>
          Nicolas Falcon
        </Typography>
        <Typography variant='h6' color={'#ffffff'} marginTop={2}>
          Tienes un avance en línea disponible de $880.000
        </Typography>
        <Box marginTop={3}>
          <CustomButton> Ver mas</CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeCard;
