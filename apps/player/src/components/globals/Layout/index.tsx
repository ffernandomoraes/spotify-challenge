import { Outlet } from 'react-router-dom';

import Content from './Content';

const Layout = () => {
  return (
    <Content>
      <Outlet />
    </Content>
  );
};

export default Layout;
