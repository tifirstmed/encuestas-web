'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from './userScheema';
import { useState, useEffect } from 'react';
import CompletedForm from '../CompletedForm/CompletedForm';
import { createLead } from '@/app/lib/createLead';
import { sendWoztellMessage } from '@/app/lib/sendMessage';
import { RegisterFormProps } from './RegisterForm.type';
import useProductStore from '@/store/useProductStore';
import axios from 'axios';

const productos = [
  'Lipoblocker',
  'Fertility Woman',
  '5 Alive',
  'Saw Palmetto Plus',
  'Fortidefensas',
  'Bio Slender',
  'Reverage',
  'Women Ut Plus',
  'Candida Support',
  'Finura',
  'Magne One',
  'Gioxil 36',
  'NAD+',
  'Pylori Defense',
  'Inulina',
  'NAD + RESVERATROL',
  'Skin Bright',
  'Mood Support',
  'Dormilón M',
  'Probiat',
  'C-Joven',
  'C-Joven Plus',
  'Vitamina C',
  'Vitamina C + ALA',
  'Nerverón',
  'NMN',
  'Infladex',
  'Hepaprotec',
  'Resveratrol',
  'Bio Slender Plus',
  'Magnesio Glicinato',
  'Gastro Plus',
  'Alergest',
  'Cáncer Support Forte',
  'Flexost',
  'Osteo Plus',
  'Gioxil D',
  'Max Forte Hombre',
  'Men Ut Plus',
  'Sperm Mobility',
  'Cebrocaz',
  'Ashwagandha +',
  'Memory Plus',
  'Stressnol',
  'Julvelin',
  'Cúrcuma +',
  'Renal Plus',
  'Reumostop',
  'Testogel',
  'BIRH 3',
  'Inositol',
  'Inmuno Defense',
  'Neurosine',
  'Energizeme',
];

type User = {
  name: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  description: string;
  priority: string;
  canal: string;
  age: string;
  treatment: string;
  nickname: string;
};
const BACK_GOOGLE_SHEETS = process.env.NEXT_PUBLIC_BACK_GOOGLE_SHEETS as string;

const ID_SHEET_GOOGLE = process.env.NEXT_PUBLIC_ID_SHEET_GOOGLE as string;

const RegisterForm: React.FC<RegisterFormProps> = ({
  productoName,
  setProductoName,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      treatment: 'No', // 👈 valor inicial
    },
  });
  const { updateName, utmSource } = useProductStore();
  const onSubmit = async (data: User) => {
    setFormCompleted(true);
    console.log('testeando');
    let email = data.email;
    if (email == '') {
      email = 'sin_correo@firstmedperu.com';
    } else {
      if (!email.includes('@')) {
        email = 'sin_correo@firstmedperu.com';
      } else {
        if (
          email.split('@')[0].includes(' ') ||
          email.split('@')[1].includes(' ') ||
          !email.split('@')[1].includes('.')
        ) {
          email = 'sin_correo@firstmedperu.com';
        }
      }
    }

    const number_priority = data.priority;
    const formattedData = {
      name: data.name,
      lastName: data.lastname,
      phone: `${data.phoneNumber}`, // Asegurarse de que el número de teléfono esté correctamente formateado
      email: data.email,
      description: data.description,
      producto: productoName,
      source: utmSource,
      canal: data.canal,
      age: data.age,
      prioridad: number_priority,
      treatment: data.treatment,
    };
    try {
      const response = await axios.post(
        BACK_GOOGLE_SHEETS,
        {
          id: '-',
          name: data.name,
          lastName: data.lastname,
          phone: data.phoneNumber,
          email: email,
          description: data.description,
          spreadsheetId: ID_SHEET_GOOGLE,
          canal: data.canal,
          nickname: data.nickname,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        console.log('Success:', response.status);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    try {
      const response = await createLead(formattedData);

      if (response) {
        console.log('Datos enviados correctamente al CRM');
      } else {
        console.log('Error al enviar los datos al CRM');
      }
    } catch (error) {
      console.log(error);
    }
    try {
      if (data.canal !== 'eventos') {
        const response = await sendWoztellMessage(formattedData);
        if (response) {
          console.log(response);
          console.log('Mensaje enviado correctamente a Woztell');
        } else {
          console.log('Error al enviar el mensaje a Woztell');
        }
      } else {
        console.log(
          'No se envió el mensaje a Woztell porque el canal es eventos'
        );
      }
    } catch (error) {
      console.log(error);
    }

    console.log('Datos enviados correctamente al CRM', formattedData);
  };
  // Función para normalizar el nombre de los productos
  const normalizeString = (str: string) => {
    return str.toLowerCase().replace(/\s+/g, '-'); // Convierte a minúsculas y reemplaza espacios por guiones
  };
  const [formCompleted, setFormCompleted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        console.log('Intentando enviar...');
        handleSubmit(onSubmit)(e);
      }}
      className="max-w-[576px] h-[780px] md:h-[780px] w-full bg-[#FFFFFF] rounded-lg font-sans relative"
    >
      <div className="h-[26px] md:h-[38px] bg-black w-full md:w-[576px] flex justify-center items-center lg:rounded-t-lg">
        <h1 className="text-white font-semibold text-base md:text-xl text-center">
          FORMULARIO ORGÁNICOS
        </h1>
      </div>
      <div className="flex flex-col items-center space-y-2 md:space-y-3 ml-[30px] mr-[30px] md:mx-10">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full mt-[28px] lg:mt-[38px] md:gap-x-[10px] h-[64px] lg:h-[38px] gap-y-2">
          <div className="flex flex-col h-[32px] md:h-[38px] w-[310px] sm:w-full lg:w-[242px]">
            <input
              placeholder="Nombres"
              className="border border-black px-2 rounded-[10px] focus:outline-black h-[32px] lg:h-full text-sm md:text-base"
              id="name"
              {...register('name')}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col h-[32px] lg:h-[38px] w-[310px] sm:w-full lg:w-[242px]">
            <input
              placeholder="Apellidos"
              className="border border-black px-2 rounded-[10px] focus:outline-black h-[32px] lg:h-full text-sm md:text-base"
              id="lastname"
              {...register('lastname')}
            />
            {errors.lastname && (
              <span className="text-red-500 text-xs">
                {errors.lastname.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col h-[32px] lg:h-[38px] w-[310px] sm:w-full">
          <input
            placeholder="Nickname"
            className="border border-black px-2 rounded-[10px] focus:outline-black h-[32px] md:h-full text-sm md:text-base"
            id="nickname"
            {...register('nickname')}
          />
          {errors.nickname && (
            <span className="text-red-500 text-xs">
              {errors.nickname.message}
            </span>
          )}
        </div>
        <div className="flex flex-col h-[32px] lg:h-[38px] w-[310px] sm:w-full">
          <input
            placeholder="Celular"
            className="border border-black px-2 rounded-[10px] focus:outline-black h-[32px] md:h-full text-sm md:text-base"
            id="phoneNumber"
            {...register('phoneNumber')}
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-xs">
              {errors.phoneNumber.message}
            </span>
          )}
        </div>
        <div className="flex flex-col h-[32px] lg:h-[38px] w-[310px] sm:w-full">
          <input
            placeholder="Edad"
            defaultValue="+18"
            className="border border-black px-2 rounded-[10px] focus:outline-black h-[32px] md:h-full text-sm md:text-base"
            id="age"
            {...register('age')}
          />
          {errors.age && (
            <span className="text-red-500 text-xs">{errors.age.message}</span>
          )}
        </div>
        <div className="flex flex-col h-[32px] lg:h-[38px] w-[310px] sm:w-full">
          <input
            placeholder="Correo electrónico"
            className="border border-black px-2 rounded-[10px] focus:outline-black h-[32px] md:h-full text-sm md:text-base"
            id="email"
            {...register('email')}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col space-y-2 w-[310px] sm:w-full">
          <label className="text-sm md:text-base font-medium">
            ¿Está llevando tratamiento?
          </label>
          <select
            id="treatment"
            className={`border px-2 rounded-[10px] focus:outline-black h-[32px] md:h-full text-sm md:text-base
      ${watch('treatment') === 'No' ? 'border-red-500 text-red-500' : ''}
      ${watch('treatment') === 'Si' ? 'border-[#64A231] text-[#64A231]' : ''}`}
            defaultValue="No"
            {...register('treatment')}
          >
            <option value="Si">Sí</option>
            <option value="No">No</option>
          </select>
          {errors.treatment && (
            <span className="text-red-500 text-xs">
              {errors.treatment.message}
            </span>
          )}
        </div>
        <div className="flex flex-col w-[310px] sm:w-full">
          <textarea
            placeholder="¿Qué desea tratar?"
            rows={5}
            className="border border-black px-2 rounded-[10px] focus:outline-black resize-none text-sm md:text-base"
            id="description"
            {...register('description')}
          />
          {errors.description && (
            <span className="text-red-500 text-xs">
              {errors.description.message}
            </span>
          )}
        </div>
        <div className="flex flex-col h-[32px] lg:h-[38px] w-[310px] sm:w-full">
          <select
            className="border border-black px-2 rounded-[10px] focus:outline-black h-[32px] md:h-full text-sm md:text-base"
            id="priority"
            defaultValue="Alta"
            {...register('priority')}
          >
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
          {errors.priority && (
            <span className="text-red-500 text-xs">
              {errors.priority.message}
            </span>
          )}
        </div>
        <div className="flex flex-col h-[32px] lg:h-[38px] w-[310px] sm:w-full">
          <select
            className="border border-black px-2 rounded-[10px] focus:outline-black h-[32px] md:h-full text-sm md:text-base"
            id="canal"
            {...register('canal')}
          >
            <option value="facebook">Facebook</option>
            <option value="ig">Instagram</option>
            <option value="tiktok">Tiktok</option>
            <option value="eventos">Eventos</option>
          </select>
          {errors.canal && (
            <span className="text-red-500 text-xs">{errors.canal.message}</span>
          )}
        </div>
        <div className="flex flex-col h-[32px] lg:h-[38px] w-[310px] sm:w-full">
          <select
            className="border border-black px-2 rounded-[10px] focus:outline-black h-[32px] md:h-full text-sm md:text-base"
            id="producto"
            value={productoName}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setProductoName(e.target.value);
              updateName(normalizeString(e.target.value));
            }}
          >
            <option value="" disabled>
              Producto
            </option>
            {productos.map((item: string, ix: number) => (
              <option key={ix} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button
          disabled={formCompleted}
          className="w-[310px] sm:w-full h-10 bg-[#6CA936] text-[#FFFFFF] font-semibold rounded-[10px] text-center text-sm md:text-base"
          type="submit"
        >
          ENVIAR
        </button>
      </div>
      {formCompleted && <CompletedForm formCompleted={formCompleted} />}
    </form>
  );
};

export default RegisterForm;
