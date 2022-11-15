import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useStyles } from './style';
import Card from '../../assets/img/creditCard/card.svg';
import { themes } from '../../theme/index';

const CreditCard = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <img src={Card} alt='Credit Card' className={classes.card} />

      <Grid container className={classes.content}>
        <Grid item xs={6}>
          <Typography variant='h6' color={themes(theme.palette.mode).grey[700]}>
            Estado de tarjeta
          </Typography>
          <Typography
            variant='h6'
            color={themes(theme.palette.mode).grey[700]}
            marginTop={1}
          >
            Proximos pagos
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h6' color={themes(theme.palette.mode).grey[700]}>
            Tarjeta activa
          </Typography>
          <Button href='#text-buttons' style={{ textTransform: 'lowercase' }}>
            Ver detalles
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreditCard;
