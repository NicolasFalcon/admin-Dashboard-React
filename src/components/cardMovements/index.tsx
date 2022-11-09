import { useStyles } from './style';
import Divider from '@mui/material/Divider';
import { movimientos } from '../../data/data';
import {
  Box,
  Card,
  Grid,
  Typography,
  useTheme,
  CardContent,
  Container,
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { themes } from '../../theme';
import CustomButton from '../customButton';

const CardMovements = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box
      sx={{
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <Card
        sx={{
          backgroundColor: themes(theme.palette.mode).grey[100],
          borderRadius: 4,
        }}
      >
        <CardContent>
          <Typography variant='h5' color={themes(theme.palette.mode).grey[700]}>
            Últimos movimientos
          </Typography>
          {movimientos.map((item) => (
            <Container>
              <Grid container spacing={2} className={classes.content}>
                <Grid item xs={1}>
                  <ArrowForwardIcon />
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant='h6'
                    color={themes(theme.palette.mode).grey[700]}
                    className={classes.text}
                  >
                    {item.concepto}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant='h6'
                    color={themes(theme.palette.mode).grey[700]}
                  >
                    {item.fecha}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant='h6'
                    color={themes(theme.palette.mode).grey[700]}
                  >
                    {item.importe}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
            </Container>
          ))}
        </CardContent>
        <CustomButton sx={{ marginTop: 2, marginBottom: 2 }}>
          Ver mas
        </CustomButton>
      </Card>
    </Box>
  );
};

export default CardMovements;
