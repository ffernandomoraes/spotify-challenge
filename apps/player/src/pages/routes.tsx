import { Navigate, Route, Routes } from 'react-router-dom';

import Artists from './private/Artists';

import Layout from '@/components/globals/Layout';
import PrivateRoute from '@/components/globals/PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path='/artists' element={<Artists />} />
      </Route>

      <Route path='*' element={<Navigate to='/artists' replace />} />
    </Routes>
  );
};

export default AppRoutes;
