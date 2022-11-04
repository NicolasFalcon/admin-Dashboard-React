import { makeStyles } from '@mui/styles';

const drawerWidth = 260;

export const useStyles = makeStyles({
  container: {
    display: 'flex',
  },

  drawer: {
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
      backgroundColor: '#ffffff',
      borderRadius: '0px 40px 40px 0px',
      boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.4)',
      border: 'none',
    },
  },
  logo: {
    marginTop: 20,
    display: 'flex',
    paddingLeft: 25,
    alignItems: 'start',
  },

  listTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 16,
  },

  menu: {
    marginTop: 20,
  },
  focusVisible: {
    backgroundColor: '',
  },
});
