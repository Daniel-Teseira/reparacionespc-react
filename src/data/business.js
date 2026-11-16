export const business = {
  name: 'Reparaciones PC',
  phone: '+543812012118',
  phoneLabel: '(+54) 381 201 2118',
  // Los celulares argentinos usan 549 + código de área + número, sin 0 ni 15.
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '5493812012118',
  street: 'Coronel Zelaya 451',
  city: 'San Miguel de Tucumán',
  region: 'Tucumán',
  hours: 'Lun. a vie. 09 a 20 · Sáb. 09 a 13',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Coronel+Zelaya+451%2C+San+Miguel+de+Tucum%C3%A1n',
};

export function whatsappUrl(message = 'Hola, necesito asistencia con mi computadora.') {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
