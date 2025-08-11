import { Button, Form, Input, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import HouseIcon from '@/components/shared/Icons/House';
import SearchIcon from '@/components/shared/Icons/Search';

type FormValues = {
  search: string;
};

const HomeAndSearch = () => {
  const { t } = useTranslation();

  const [form] = Form.useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoHome = () => {
    form.resetFields();
    navigate('/artists');
  };

  const onSubmit = (values: FormValues) => {
    console.log('submit', values);
    navigate(`/search?q=${values.search}`);
  };

  const isHome = location.pathname === '/artists';

  return (
    <div className='flex items-center gap-1'>
      <Tooltip title={t('topbar.buttonHome')}>
        <Button disabled={isHome} shape='circle' className='group' onClick={handleGoHome}>
          <HouseIcon className='w-5 h-5 fill-white/50 group-enabled:group-hover:fill-white transition-colors' />
        </Button>
      </Tooltip>

      <Form form={form} layout='inline' onFinish={onSubmit}>
        <Form.Item name='search'>
          <Input
            className='group w-108'
            placeholder={t('topbar.search.placeholder')}
            suffix={
              <SearchIcon className='w-5 h-5 fill-white/50 group-hover:fill-white group-focus-within:fill-white transition-colors' />
            }
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default HomeAndSearch;
