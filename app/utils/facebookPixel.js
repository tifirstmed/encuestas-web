const crypto = require('crypto');

// Generar un event_id único
const generateUniqueEventId = () => {
  return crypto.randomBytes(16).toString('hex');
};

const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID;

export const initFacebookPixel = () => {
  const eventId = generateUniqueEventId();
  localStorage.removeItem('facebook_event_id');
  localStorage.setItem('facebook_event_id', eventId);
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  );
  fbq('init', PIXEL_ID); // Reemplaza con tu ID de píxel de Facebook
};

export const trackFacebookEvent = (event, params = {}) => {
  const eventId = params.eventId || localStorage.getItem('facebook_event_id');
  fbq('track', event, params, { eventID: eventId });
};

export const getFacebookEventId = () => {
  return localStorage.getItem('facebook_event_id');
};
