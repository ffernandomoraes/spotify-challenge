import { StyleProvider } from '@ant-design/cssinjs';
import { App, ConfigProvider } from 'antd';
import ptBR from 'antd/locale/pt_BR';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

import antdTheme from '@/assets/theme/antd';

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
  const { i18n } = useTranslation();

  const validateMessages = {
    required: i18n.t('form.requiredField')
  };

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
