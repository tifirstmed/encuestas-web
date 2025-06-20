import axios from 'axios';
import {
  initFacebookPixel,
  trackFacebookEvent,
  getFacebookEventId,
} from '@/app/utils/facebookPixel';
const BACK_EXPRESS_API_META = process.env.NEXT_PUBLIC_BACK_EXPRESS; //api-meta
const BACK_REGISTER_LEAD_ZOHOCRM = process.env.NEXT_PUBLIC_BACK_ZOHOCRM; //leads zohocrm
const BACK_REGISTER_LEAD_BD_ORGANICO =
  process.env.NEXT_PUBLIC_BACK_REGISTER_LEAD_BD_ORGANICO;
const BACK_REGISTER_LEAD_BD_TIKTOK =
  process.env.NEXT_PUBLIC_BACK_REGISTER_LEAD_BD_TIKTOK;
const BACK_REGISTER_LEAD_BD = process.env.NEXT_PUBLIC_BACK_REGISTER_LEAD_BD;

const generateEventId = () => {
  return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
};
export async function createLead(data) {
  const {
    name,
    lastName,
    phone,
    email,
    description,
    canal,
    producto,
    prioridad,
    age,
    treatment,
  } = data;
  if (canal == 'facebook') {
    const eventId = generateEventId();

    const formattedDataBBDD = {
      id: eventId,
      nombres: data.name,
      apellidos: data.lastName,
      celular: `+51 ${phone}`,
      correo: data.email,
      descripcion: data.description,
      producto: producto,
    };

    const formattedDataTrack = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      flag: true,
      eventId: getFacebookEventId(),
    };

    try {
      const response_track = await axios.post(
        BACK_EXPRESS_API_META,
        formattedDataTrack, // Datos a enviar
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Success:', response_track.status);
    } catch (error) {
      console.log('Error con el Servidor para Meta');
    }
    try {
      const response = await axios.post(
        BACK_REGISTER_LEAD_BD,
        formattedDataBBDD,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        console.log('Lead Registrado DDBB.');
      } else {
        console.log('Error al registrar el Lead en DDBB.');
      }
    } catch (error) {
      console.log('Error en el servidor de Registros');
    }
    try {
      const formattedDataZohoCRM = {
        data: [
          {
            Last_Name: lastName,
            First_Name: name,
            Mobile: `51${phone}`,
            Email: email,
            S_ntoma: description,
            UTM_Campaign: `General`,
            UTM_Content: '',
            UTM_Medium: '',
            UTM_Source: 'Facebook',
            UTM_Term: '',
            Lead_Status: 'Nuevo',
            Lead_Source: 'Facebook',
            Prioridad: prioridad,
            Nombre_de_Producto: producto,
            Segmento_Cliente: 'B2C',
            Edad: age,
            Tratamiento_medico: treatment,
            Fuente_del_Chatbot: 'Redes Sociales',
          },
        ],
        trigger: ['workflow', 'blueprint'],
        lar_id: '6422115000017259392',
      };
      const response = await axios.post(
        BACK_REGISTER_LEAD_ZOHOCRM,
        formattedDataZohoCRM,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        // Llama al evento 'CompleteRegistration' de Facebook Pixel
        trackFacebookEvent('CompleteRegistration', {
          eventId: getFacebookEventId(),
        });
        logEvent('Form', 'Submit');

        console.log('Datos enviados correctamente al CRM');
        // Aquí podrías redirigir o mostrar un mensaje de éxito
      } else {
        console.log('Error al enviar los datos al CRM');
        // Manejar el caso de error según sea necesario
      }
    } catch (error) {
      console.log('Error en el servidor de Registros');
    }
  } else if (canal == 'tiktok') {
    const eventId = generateEventId();

    const formattedDataBBDD_tiktok = {
      id: eventId,
      nombres: data.name,
      apellidos: data.lastName,
      celular: `+51 ${phone}`,
      correo: data.email,
      descripcion: data.description,
      producto: producto,
    };
    try {
      const response = await axios.post(
        BACK_REGISTER_LEAD_BD_TIKTOK,
        formattedDataBBDD_tiktok,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 201) {
        console.log('Lead Registrado DDBB.');
      } else {
        console.log('Error al registrar el Lead en DDBB.');
      }
    } catch (error) {
      console.log('Error en el servidor de Registros');
    }

    try {
      const formattedDataZohoCRM = {
        data: [
          {
            Last_Name: lastName,
            First_Name: name,
            Mobile: `51${phone}`,
            Email: email,
            S_ntoma: description,
            UTM_Campaign: `General`,
            UTM_Content: '',
            UTM_Medium: '',
            UTM_Source: 'Tik Tok',
            UTM_Term: '',
            Lead_Status: 'Nuevo',
            Lead_Source: 'Tik Tok',
            Prioridad: prioridad,
            Nombre_de_Producto: producto,
            Segmento_Cliente: 'B2C',
            Edad: age,
            Tratamiento_medico: treatment,
            Fuente_del_Chatbot: 'Redes Sociales',
          },
        ],
        trigger: ['workflow', 'blueprint'],
        lar_id: '6422115000017259392',
      };
      const response = await axios.post(
        BACK_REGISTER_LEAD_ZOHOCRM,
        formattedDataZohoCRM,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        console.log('Datos enviados correctamente al CRM');
      } else {
        console.log('Error al enviar los datos al CRM');
      }
    } catch (error) {
      console.log(error);
    }
  } else if (canal == 'eventos') {
    try {
      const formattedDataZohoCRM = {
        data: [
          {
            Last_Name: lastName,
            First_Name: name,
            Company: name,
            Mobile: `51${phone}`,
            Email: email,
            S_ntoma: description,
            UTM_Campaign: `General`,
            UTM_Content: '',
            UTM_Medium: '',
            UTM_Source: 'Eventos',
            UTM_Term: '',
            Lead_Status: 'Nuevo',
            Lead_Source: 'Eventos',
            Prioridad: prioridad,
            Nombre_de_Producto: '-',
            Segmento_Cliente: 'B2B',
            Edad: age,
            Tratamiento_medico: treatment,
            Fuente_del_Chatbot: '',
          },
        ],
        trigger: ['workflow', 'blueprint'],
        lar_id: '6422115000017259392',
      };
      const response = await axios.post(
        BACK_REGISTER_LEAD_ZOHOCRM,
        formattedDataZohoCRM,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        // Llama al evento 'CompleteRegistration' de Facebook Pixel
        console.log('Datos enviados correctamente al CRM');
        // Aquí podrías redirigir o mostrar un mensaje de éxito
      } else {
        console.log('Error al enviar los datos al CRM');
        // Manejar el caso de error según sea necesario
      }
    } catch (error) {
      console.log('Error en el servidor de Registros');
    }
  } else {
    const id_unique_user = `${Date.now()}`;
    const formattedDataBBDD_organico = {
      id: id_unique_user,
      nombres: data.name,
      apellidos: data.lastName,
      celular: `+51 ${phone}`,
      correo: data.email,
      descripcion: data.description,
      producto: producto,
    };

    try {
      const response = await axios.post(
        BACK_REGISTER_LEAD_BD_ORGANICO,
        formattedDataBBDD_organico,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 201) {
        console.log('Lead Registrado DDBB.');
      } else {
        console.log('Error al registrar el Lead en DDBB.');
      }
    } catch (error) {
      console.log('Error en el servidor de Registros');
    }

    try {
      const formattedDataZohoCRM = {
        data: [
          {
            Last_Name: lastName,
            First_Name: name,
            Mobile: `51${phone}`,
            Email: email,
            S_ntoma: description,
            UTM_Campaign: `General`,
            UTM_Content: '',
            UTM_Medium: '',
            UTM_Source: 'Form Landing Page',
            UTM_Term: '',
            Lead_Status: 'Nuevo',
            Lead_Source: 'Instagram',
            Prioridad: prioridad,
            Nombre_de_Producto: producto,
            Segmento_Cliente: 'B2C',
            Edad: age,
            Tratamiento_medico: treatment,
            Fuente_del_Chatbot: 'Redes Sociales',
          },
        ],
        trigger: ['workflow', 'blueprint'],
        lar_id: '6422115000017259392',
      };
      const response = await axios.post(
        BACK_REGISTER_LEAD_ZOHOCRM,
        formattedDataZohoCRM,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        console.log('Datos enviados correctamente al CRM');
      } else {
        console.log('Error al enviar los datos al CRM');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return {
    status: 200,
    message: 'Lead creado correctamente',
  };
}
