import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from '@/components/globals/Layout';
import PrivateRoute from '@/components/globals/PrivateRoute';

const Artists = lazy(() => import('./private/Artists'));
const Search = lazy(() => import('./private/Search'));
const Welcome = lazy(() => import('./public/Welcome'));

const AppRoutes = () => {
  return (
    <Suspense>
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

        <Route path='/welcome' element={<Welcome />} />

        <Route path='*' element={<Navigate to='/artists' replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
