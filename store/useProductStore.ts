import { create } from 'zustand';

// Definimos la interfaz para los productos
export interface PropsStoreProduct {
  nombre: string;
}

// Definimos la interfaz para el store
interface ProductStore {
  productName: PropsStoreProduct;
  utmSource: string;
  completedForm: boolean;
  finalTrack: boolean;
  updateName: (newName: string) => void; // Función para actualizar el nombre del producto
  updateUtmSource: (umt: string) => void;
  updateCompletedForm: (value: boolean) => void;
  updateFinalTrack: (value: boolean) => void;
}

// Creamos el store usando Zustand
const useProductStore = create<ProductStore>((set) => ({
  // Estado inicial del producto
  productName: { nombre: '' },
  utmSource: '',
  completedForm: false,
  finalTrack: false,
  // Función para actualizar el nombre del producto
  updateName: (newName: string) =>
    set(() => ({
      productName: { nombre: newName },
    })),
  updateUtmSource: (utm: string) =>
    set(() => ({
      utmSource: utm,
    })),
  updateCompletedForm: (value: boolean) =>
    set(() => ({
      completedForm: value,
    })),
  updateFinalTrack: (value: boolean) =>
    set(() => ({
      finalTrack: value,
    })),
}));

export default useProductStore;
