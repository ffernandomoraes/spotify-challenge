import { Avatar, Button, Dropdown } from 'antd';

const Profile = () => {
  // onclick: force error
  return (
    <Dropdown trigger={['click']}>
      <Button shape='circle' className='group bg-elevated-highlight w-12 h-12'>
        <Avatar size={34} className='bg-[#f573a0]'>
          <p className='text-base text-black font-semibold'>F</p>
        </Avatar>
      </Button>
    </Dropdown>
  );
};

export default Profile;
