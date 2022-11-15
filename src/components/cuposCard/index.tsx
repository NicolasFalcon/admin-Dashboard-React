import {
  Box,
  Card,
  CardContent,
  useTheme,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import { useStyles } from './styles';
import { themes } from '../../theme/index';
import IconDolarGreen from './../../assets/icons/dolar.svg';
import IconDolarRed from './../../assets/icons/dolar_red.svg';

interface IProps {
  title: string;
  available: string;
  total: string;
}

export const CuposCard = ({ title, available, total }: IProps) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box
      sx={{
        marginTop: 2,
      }}
    >
      <Card
        sx={{
          backgroundColor: themes(theme.palette.mode).grey[800],
          borderRadius: 4,
        }}
      >
        <CardContent className={classes.cardContent}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={10}>
              <Typography
                variant='h5'
                color={themes(theme.palette.mode).grey[700]}
              >
                {title}
              </Typography>
              <Grid className={classes.content} direction='row'>
                <Grid item xs container direction='row'>
                  <img src={IconDolarGreen} alt='sbpay' width={18} />
                  <Typography
                    variant='h6'
                    color={themes(theme.palette.mode).grey[700]}
                    className={classes.text}
                  >
                    Total: {total}
                  </Typography>
                </Grid>
                <Grid item xs container direction='row'>
                  <img src={IconDolarRed} alt='sbpay' width={18} />
                  <Typography
                    onClick={() => console.log('click')}
                    variant='h6'
                    color={themes(theme.palette.mode).grey[700]}
                    className={classes.text}
                  >
                    Disponible: {available}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} marginTop={4}>
              <Button
                href='#text-buttons'
                style={{ textTransform: 'lowercase' }}
              >
                Ver detalles
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CuposCard;
