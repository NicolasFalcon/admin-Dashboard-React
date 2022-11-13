import { useStyles } from './style';
import Divider from '@mui/material/Divider';
import { Box, Grid, Typography, useTheme, Container } from '@mui/material';

import { themes } from '../../theme';

const CardMovements = ({ movements }: any) => {
  const { concepto, fecha, importe } = movements;
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Grid container spacing={4} className={classes.content}>
          <Grid item xs={4}>
            <Typography
              variant='h6'
              color={themes(theme.palette.mode).grey[700]}
            >
              {concepto}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant='h6'
              color={themes(theme.palette.mode).grey[700]}
            >
              {fecha}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant='h6'
              color={themes(theme.palette.mode).grey[700]}
            >
              {importe}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
      </Container>
    </Box>
  );
};

export default CardMovements;
