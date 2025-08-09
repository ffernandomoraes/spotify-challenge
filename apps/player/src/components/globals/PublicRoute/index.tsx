import { Outlet } from 'react-router-dom';

const PublicRoute = () => {
  return (
    <main role='main'>
      <Outlet />
    </main>
  );
};

export default PublicRoute;
