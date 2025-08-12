import { Button, Form, Input, Tooltip } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import HouseIcon from '@/components/shared/Icons/House';
import SearchIcon from '@/components/shared/Icons/Search';

type FormValues = {
  search: string;
};

const HomeAndSearch = () => {
  const [form] = Form.useForm();

  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  const handleGoHome = () => {
    form.resetFields();
    navigate('/artists');
  };

  const onSubmit = (values: FormValues) => {
    console.log('submit', values);
    navigate(`/search?q=${values.search}`);
  };

  const isHome = location.pathname === '/artists';

  useEffect(() => {
    if (query) {
      form.setFieldsValue({ search: query });
    }
  }, [form, query]);

  return (
    <div className='flex items-center gap-2'>
      <Tooltip title={t('topbar.buttonHome')}>
        <Button disabled={isHome} shape='circle' className='group' onClick={handleGoHome}>
          <HouseIcon className='w-5 h-5 fill-white/50 group-enabled:group-hover:fill-white transition-colors' />
        </Button>
      </Tooltip>

      <div className='hidden md:block'>
        <Form form={form} layout='inline' onFinish={onSubmit}>
          <Form.Item name='search'>
            <Input
              className='group w-124 hidden md:flex'
              placeholder={t('topbar.search.placeholder')}
              suffix={
                <SearchIcon className='w-5 h-5 fill-white/50 group-hover:fill-white group-focus-within:fill-white transition-colors' />
              }
            />
          </Form.Item>
        </Form>
      </div>

      <div className='block md:hidden'>
        <Button shape='circle' className='group'>
          <SearchIcon className='w-5 h-5 fill-white/50 group-enabled:group-hover:fill-white transition-colors' />
        </Button>
      </div>
    </div>
  );
};

export default HomeAndSearch;
