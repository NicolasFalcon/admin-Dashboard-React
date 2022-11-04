import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    padding: 10,
    width: '100%',
  },
  navBar: {
    display: 'flex',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  navBarLeftLogo: {
    marginLeft: 100,
  },
  navBarRight: {
    display: 'flex',
    marginRight: 100,
  },
});
