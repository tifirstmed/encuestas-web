import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(3, { message: 'Al menos 3 caracteres' }),
  lastname: z.string().min(3, { message: 'Al menos 3 caracteres' }),
  phoneNumber: z
    .string()
    .regex(/^\d{9}$/, { message: 'Teléfono debe tener 9 dígitos' }),
  email: z.string().optional(),
  description: z
    .string()
    .min(2, { message: 'El tratamiento debe tener al menos 2 caracteres' }),
  priority: z.string(),
  canal: z.string(),
  treatment: z.string(),
  age: z.string(),
});
