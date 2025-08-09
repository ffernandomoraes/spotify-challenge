import { Button } from 'antd';
import { useState } from 'react';

const Artists = () => {
  const [array, setArray] = useState<number[]>([]);

  return (
    <>
      <p className='text-xl mb-4'>Dashboard</p>

      <Button onClick={() => setArray([...array, array.length + 1])}>Adicionar</Button>
      <Button onClick={() => setArray([])}>Limpar</Button>

      <div className='flex flex-col gap-2'>
        {array.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </>
  );
};

export default Artists;
