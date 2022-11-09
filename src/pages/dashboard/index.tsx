import { Box, Grid, Typography } from '@mui/material';
import { CuposCard } from '../../components/cuposCard';
import WelcomeCard from '../../components/welcomeCard';
import { useStyles } from './style';
import CardMovements from '../../components/cardMovements/index';

const Dashboard = () => {
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
          <CardMovements />
        </Grid>
        <Grid item xs={6} md={4} style={{ backgroundColor: 'blue' }}>
          <Typography variant='h4' component='h1' gutterBottom>
            xs=6 md=8
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
