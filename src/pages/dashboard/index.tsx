import { Box, Grid, Typography } from '@mui/material';
import { useStyles } from './style';

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container spacing={2}>
        <Grid xs={6} md={8} style={{ backgroundColor: 'red' }}>
          <Typography variant='h4' component='h1' gutterBottom>
            xs=6 md=8
          </Typography>
        </Grid>
        <Grid xs={6} md={4} style={{ backgroundColor: 'blue' }}>
          <Typography variant='h4' component='h1' gutterBottom>
            xs=6 md=8
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
