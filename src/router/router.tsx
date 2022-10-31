import { Routes, Route } from 'react-router-dom';
import Advance from '../pages/advance';
import Dashboard from '../pages/dashboard';
import Payment from '../pages/payment';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/advance' element={<Advance />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </>
  );
};
