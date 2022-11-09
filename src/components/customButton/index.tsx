import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { themes } from '../../theme/index';

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: themes(theme.palette.mode).black[900],
  backgroundColor: themes(theme.palette.mode).black[600],
  fontSize: 12,
  fontWeight: 600,
  padding: '10px 40px',
  borderRadius: 16,
  '&:hover': {
    backgroundColor: themes(theme.palette.mode).black[100],
  },
}));

export default CustomButton;
