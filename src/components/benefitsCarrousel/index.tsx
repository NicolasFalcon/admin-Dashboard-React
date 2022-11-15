import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import { useStyles } from './style';

import { beneficios } from './../../data/data';

const BenefitsCarrousel = () => {
  const classes = useStyles();

  return (
    <Carousel
      animation='fade'
      indicatorContainerProps={{
        style: {
          display: 'none',
        },
      }}
    >
      {beneficios.map((item) => (
        <Box>
          <img src={item.img} alt={item.title} className={classes.card} />
        </Box>
      ))}
    </Carousel>
  );
};

export default BenefitsCarrousel;
