import { makeStyles } from '@mui/styles';

import BackgroundImage from './../../assets/img/background.png';

export const useStyles = makeStyles({
  container: {
    height: 220,
    width: '100%',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    borderRadius: 25,
    backgroundPosition: 'center',
  },
  content: {
    textAlign: 'left',
    marginLeft: 30,
    paddingTop: 30,
  },

  welcome: {
    fontSize: 30,
    fontWeight: 600,
    color: '#fff',
  },
});
