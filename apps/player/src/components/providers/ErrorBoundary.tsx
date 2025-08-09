import { Component, ErrorInfo, ReactNode } from 'react';

import { Button } from 'antd';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary capturou um erro:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex min-h-screen flex-col items-center justify-center gap-8'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <h2 className='text-4xl font-bold'>Ops! Algo deu errado</h2>
            <p className='text-lg text-gray-500'>Ocorreu um erro inesperado na aplicação. Tente recarregar a página.</p>
          </div>

          <Button key='reload' onClick={this.handleReload}>
            Recarregar Página
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
