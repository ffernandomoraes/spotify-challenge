import { Button } from 'antd';
import { Component, ErrorInfo, ReactNode } from 'react';

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
        <div className='w-full flex min-h-screen flex-col items-center justify-center gap-8'>
          <div className='w-full flex flex-col items-center justify-center gap-2 px-4'>
            <h2 className='text-4xl font-bold text-center'>Ops, algo deu errado.</h2>
            <p className='text-lg text-gray-500 text-center'>
              Ocorreu um erro inesperado na aplicação, lamentamos o transtorno.
            </p>
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
