import { Avatar, Button, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Dropdown
      arrow
      placement='bottomRight'
      trigger={['click']}
      menu={{
        items: [
          {
            key: 'profile',
            label: t('topbar.profile.title')
          },
          {
            key: 'settings',
            label: t('topbar.profile.settings')
          },
          {
            key: 'divider',
            type: 'divider'
          },
          {
            key: 'language',
            type: 'group',
            label: t('topbar.profile.language'),
            children: [
              {
                key: 'pt_BR',
                label: 'Português (BR)',
                onClick: () => handleChangeLanguage('pt_BR'),
                className: i18n.language === 'pt_BR' ? 'bg-brand/5' : ''
              },
              {
                key: 'en',
                label: 'Inglês (US)',
                onClick: () => handleChangeLanguage('en'),
                className: i18n.language === 'en' ? 'bg-brand/5' : ''
              }
            ]
          },
          {
            key: 'divider',
            type: 'divider'
          },
          {
            key: 'logout',
            label: t('topbar.profile.logout')
          }
        ]
      }}
    >
      <Button shape='circle' className='group bg-elevated-highlight w-12 h-12'>
        <Avatar size={34} className='bg-[#f573a0]'>
          <p className='text-base text-black font-semibold'>F</p>
        </Avatar>
      </Button>
    </Dropdown>
  );
};

export default Profile;
