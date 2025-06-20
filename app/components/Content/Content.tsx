import RegisterForm from '@/app/components/Form/RegisterForm';
import { useEffect, useState } from 'react';
import { set } from 'zod';

const Content = () => {

  const [productoName, setProductoName] = useState('');
  return (
    <>
      <div className="w-full bg-[#E3E3E2] flex flex-col lg:flex-row h-full justify-center items-center">
        <div className="flex justify-center items-center w-full">
          <RegisterForm 
            setProductoName={setProductoName}
            productoName={productoName}
          />
        </div>
      </div>
    </>
  );
};

export default Content;
