const BACK_ACCESS_TOKEN_WOZTELL = process.env.NEXT_PUBLIC_WOZTELL_ACCESS_TOKEN;
const WABA_ID = process.env.NEXT_PUBLIC_WOZTELL_WABA_ID;

export async function sendWoztellMessage(data) {
  const { name, phone } = data;
  const channelId = '6812b4c6da1aa5d2d49c0fbf';
  const recipientId = `51${phone}`;
  if (!BACK_ACCESS_TOKEN_WOZTELL || !name) {
    return {
      status: 400,
      message: 'Faltan datos requeridos (token o nombre)',
    };
  }

  const url = `https://bot.api.woztell.com/sendResponses?accessToken=${BACK_ACCESS_TOKEN_WOZTELL}`;

  const bodyToSend = {
    channelId,
    recipientId,
    response: [
      {
        type: 'TEMPLATE',
        integrationId: '6812b4c6da1aa505279c0fc0',
        wabaId: '1373463544100794',
        wabaId:WABA_ID,
        namespace: 'b0b5781c_ad9f_45e1_9703_31f096e87a16',
        components: [
          {
            type: 'button',
            sub_type: 'quick_reply',
            index: '0',
            parameters: [
              {
                type: 'payload',
                payload: 'Empezar',
              },
            ],
          },
        ],
        elementName: 'redes_sociales_derivar_asesor_v2',
        languageCode: 'es',
        languagePolicy: 'deterministic',
        content: [
          {
            type: 'BODY',
            text: '¡Hola! Soy tu asesor de Firstmed y estoy aquí para ayudarte. 😊 Presiona "Empezar" para atenderte.',
          },
          {
            type: 'BUTTONS',
            buttons: [
              {
                type: 'QUICK_REPLY',
                text: 'Empezar',
              },
            ],
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyToSend),
    });
    const result = await response.json();
    return {
      status: response.ok ? 200 : 400,
      message: result,
    };
  } catch (error) {
    console.error('Error enviando mensaje:', error);
    return {
      status: 500,
      message: 'Error interno del servidor',
    };
  }
}
