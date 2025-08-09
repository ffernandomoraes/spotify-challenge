import { Link } from 'react-router-dom';

import { Button } from 'antd';

const Welcome = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <div className='flex max-w-md flex-col gap-8'>
        <div className='flex justify-center'>
          <svg className='w-24' width='100%' height='100%' viewBox='-10.5 -9.45 21 18.9'>
            <circle cx='0' cy='0' r='2' fill='currentColor' />

            <g stroke='currentColor' strokeWidth='1' fill='none'>
              <ellipse rx='10' ry='4.5' />
              <ellipse rx='10' ry='4.5' transform='rotate(60)' />
              <ellipse rx='10' ry='4.5' transform='rotate(120)' />
            </g>
          </svg>
        </div>

        <h1 className='text-5xl font-bold text-white'>Olá, dev.</h1>

        <div className='flex flex-col gap-2 text-lg text-gray-400'>
          <p>
            Este é um template base para projetos React. Ele contém uma estrutura básica para um projeto React com
            TypeScript, Vite, Tailwind CSS e Ant Design.
          </p>
        </div>

        <div className='flex w-full justify-center gap-4'>
          <Button>
            <Link to='/dashboard'>Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
