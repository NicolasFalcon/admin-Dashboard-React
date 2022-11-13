import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { CuposCard } from '../../components/cuposCard';
import WelcomeCard from '../../components/welcomeCard';
import { useStyles } from './style';
import CardMovements from '../../components/cardMovements/index';
import { CustomButton } from '../../components';
import { themes } from '../../theme';
import { movimientos } from '../../data/data';
import BenefitsCarrousel from '../../components/benefitsCarrousel';

const Dashboard = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <WelcomeCard />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <CuposCard
                title='Cupos de compra'
                available={'$1.200.000'}
                total={'$1.200.000'}
              />
            </Grid>
            <Grid item xs={6}>
              <CuposCard
                title='Cupo de avance'
                available={'800.000'}
                total={'$800.000'}
              />
            </Grid>
          </Grid>

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
                <Typography
                  variant='h5'
                  color={themes(theme.palette.mode).grey[700]}
                >
                  Últimos movimientos
                </Typography>

                {movimientos.map((movimiento) => (
                  <CardMovements movements={movimiento} />
                ))}
              </CardContent>
              <CustomButton sx={{ marginBottom: 2 }}>Ver mas</CustomButton>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant='h4' component='h1' gutterBottom>
            <BenefitsCarrousel />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
