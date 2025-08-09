import { StyleProvider } from '@ant-design/cssinjs';
import { App, ConfigProvider } from 'antd';
import ptBR from 'antd/locale/pt_BR';
import dayjs from 'dayjs';
import ptBr from 'dayjs/locale/pt-br';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { PropsWithChildren } from 'react';

import antdTheme from '@/assets/theme/antd';

dayjs.locale(ptBr);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Sao_Paulo');

const validateMessages = {
  required: 'O campo é obrigatório'
};

const RequiredMark = ({ labelNode, info }: { labelNode: React.ReactNode; info: { required: boolean } }) => {
  if (!info.required) {
    return <>{labelNode}</>;
  }

  return (
    <>
      {labelNode} <span className='ml-1 text-red-500'>*</span>
    </>
  );
};

const AntdProvider = ({ children }: PropsWithChildren) => {
  return (
    <StyleProvider layer>
      <ConfigProvider
        theme={antdTheme}
        locale={ptBR}
        form={{
          requiredMark: (labelNode, info) => <RequiredMark labelNode={labelNode} info={info} />,
          validateMessages
        }}
      >
        <App message={{ duration: 5, maxCount: 3 }}>{children}</App>
      </ConfigProvider>
    </StyleProvider>
  );
};

export default AntdProvider;
