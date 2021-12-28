import { Button, ButtonGroup } from '@mui/material';
import { FunctionComponent } from 'react';
import { AppRoutes } from '../AppRoutes';

const HomePage: FunctionComponent = () => {
  return (
    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
      <Button href={AppRoutes.home}>Home</Button>
      <Button href={AppRoutes.login}>Login</Button>
      <Button href={AppRoutes.signUp}>Sign Up</Button>
    </ButtonGroup>
  );
};

export default HomePage;
