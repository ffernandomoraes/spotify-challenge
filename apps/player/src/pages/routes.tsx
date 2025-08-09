import { Navigate, Route, Routes } from 'react-router-dom';

import Artists from './private/Artists';
import Search from './private/Search';

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
        <Route index element={<Navigate to='/artists' replace />} />

        <Route path='/artists' element={<Artists />} />
        <Route path='/search' element={<Search />} />
      </Route>

      <Route path='*' element={<Navigate to='/artists' replace />} />
    </Routes>
  );
};

export default AppRoutes;
