import { Button, Form, Input, Tooltip } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import HouseIcon from '@/components/shared/Icons/House';
import SearchIcon from '@/components/shared/Icons/Search';

type FormValues = {
  search: string;
};

const Search = () => {
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

  const onFinishFailed = (errorInfo: any) => {
    console.log('errorInfo', errorInfo);
  };

  const isHome = location.pathname === '/artists';

  return (
    <div className='flex items-center gap-1'>
      <Tooltip title='Voltar para o início'>
        <Button disabled={isHome} shape='circle' className='group' onClick={handleGoHome}>
          <HouseIcon className='w-5 h-5 fill-white/50 group-enabled:group-hover:fill-white transition-colors' />
        </Button>
      </Tooltip>

      <Form form={form} layout='inline' onFinish={onSubmit} onFinishFailed={onFinishFailed}>
        <Form.Item name='search'>
          <Input
            className='group w-108'
            placeholder='O que você quer ouvir?'
            suffix={
              <SearchIcon className='w-5 h-5 fill-white/50 group-hover:fill-white group-focus-within:fill-white transition-colors' />
            }
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Search;
