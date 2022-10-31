import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    height: '100%',
    position: 'fixed',
    display: 'flex',
  },

  menu: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  sidebar: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#ffffff',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.3)',
  },

  menuItemText: {
    textAlign: 'initial',
    color: '#6100d1',
  },
  '&.sc-dkrFOg': {
    backgroundColor: 'transparent !important',
  },

  logo: {
    display: 'flex',
    paddingLeft: 20,
    alignItems: 'start',
    paddingTop: 20,
  },
});
