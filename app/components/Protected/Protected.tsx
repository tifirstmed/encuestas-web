'use client';
import { useState, useEffect } from 'react';
import Content from '../Content/Content';

const PASSWORD_AUTHORIZED = process.env.NEXT_PUBLIC_PASSWORD as string;

const Protected = () => {
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Verifica si la contraseña ya está guardada en localStorage
    const storedPassword = localStorage.getItem('authorized');
    if (storedPassword === 'true') {
      setIsAuthorized(true);
    }
  }, []);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const checkPassword = () => {
    const correctPassword = PASSWORD_AUTHORIZED;
    if (password === correctPassword) {
      setIsAuthorized(true);
      localStorage.setItem('authorized', 'true');
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {!isAuthorized ? (
        <div className="p-4 bg-gray-100 rounded-md shadow-md">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="border p-2 mb-2 w-full"
            placeholder="Introduce la contraseña"
          />
          <button
            onClick={checkPassword}
            className="bg-blue-500 text-white p-2 rounded-md w-full"
          >
            Acceder
          </button>
        </div>
      ) : (
        <Content />
      )}
    </div>
  );
};

export default Protected;
