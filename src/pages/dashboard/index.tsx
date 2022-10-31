import { Box, Typography } from '@mui/material';
import { useStyles } from './style';

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <h1>My Account</h1>
      <p>Here is where you can manage your account.</p>
      <Typography>Hello</Typography>
    </Box>
  );
};

export default Dashboard;
