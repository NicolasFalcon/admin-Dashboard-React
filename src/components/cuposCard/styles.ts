import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  card: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    backgroundPosition: 'center',
  },
  content: {
    paddingTop: 10,
    flexDirection: 'row',
  },

  cardContent: {
    textAlign: 'left',
  },
  text: {
    paddingLeft: 10,
  },

  btn: {
    fontSize: 4,
    textTransform: 'lowercase',
  },
});
