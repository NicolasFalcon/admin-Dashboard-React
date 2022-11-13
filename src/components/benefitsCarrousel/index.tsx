import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import { useStyles } from './style';

import { beneficios } from './../../data/data';
import { useEffect } from 'react';

const BenefitsCarrousel = () => {
  const classes = useStyles();

  useEffect(() => {
    console.log(beneficios[0].img);
  }, []);

  return (
    <Carousel animation='fade'>
      {beneficios.map((item) => (
        <Box>
          <img
            src={item.img}
            alt={item.title}
            width={360}
            height={220}
            style={{ borderRadius: 20 }}
          />
        </Box>
      ))}
    </Carousel>
  );
};

export default BenefitsCarrousel;
