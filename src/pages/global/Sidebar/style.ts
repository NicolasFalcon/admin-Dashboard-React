import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    position: 'fixed',
  },

  menu: {
    paddingTop: 20,
    paddingBottom: 20,

    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  sidebar: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
  },

  logo: {
    display: 'flex',
    paddingLeft: 10,
    alignItems: 'start',
  },
  menuItemText: {
    textAlign: 'initial',
    fontSize: 14,
    fontWeight: 500,
    color: '#ffffff',
  },
});
