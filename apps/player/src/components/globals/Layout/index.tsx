import { Outlet } from 'react-router-dom';

import Content from './Content';
import Controls from './Controls';
import Topbar from './Topbar';

const Layout = () => {
  return (
    <div className='h-dvh flex flex-col'>
      <Topbar />

      <Content>
        <Outlet />
      </Content>

      <Controls />
    </div>
  );
};

export default Layout;
