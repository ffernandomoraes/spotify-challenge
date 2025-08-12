import { Button } from 'antd';
import { Component, ErrorInfo, ReactNode } from 'react';

import { isDevelopment } from '@/envs';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
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

    this.setState({
      error,
      errorInfo
    });
  }

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className='w-full flex min-h-screen flex-col items-center justify-center gap-8'>
          <div className='w-full flex flex-col items-center justify-center gap-2 px-4'>
            <h2 className='text-4xl font-bold text-center'>Ops, algo deu errado.</h2>
            <p className='text-lg text-gray-500 text-center'>
              Ocorreu um erro inesperado na aplicação, lamentamos o transtorno.
            </p>
          </div>

          {isDevelopment && (
            <>
              {this.state.errorInfo && (
                <pre className='bg-elevated-highlight rounded-4xl p-4 text-xs text-red-300 overflow-auto mt-2'>
                  {this.state.error?.message}
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </>
          )}

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
