// Mọi thông tin liên hệ nằm ở đây — đổi số điện thoại / link chỉ cần sửa file này.
export const contact = {
  name: 'Happy Star Hotel Nha Trang',
  phoneDisplay: '0935 372 719',
  phoneIntl: '+84935372719',
  phoneDigits: '84935372719',
  email: 'happystarhotelnhatrang@gmail.com',
  address: {
    street: '132/40 Hùng Vương',
    ward: 'Lộc Thọ',
    city: 'Nha Trang',
    region: 'Khánh Hòa',
    country: 'VN',
    full: '132/40 Hùng Vương, Lộc Thọ, Nha Trang, Khánh Hòa',
  },
  geo: { lat: 12.2345051, lng: 109.1951799 },
  facebook: 'https://www.facebook.com/happystarhotelnhatrang/',
  messenger: 'https://m.me/happystarhotelnhatrang',
  mapsLink: 'https://maps.app.goo.gl/5aseMEwJnvL1VMHV7',
  agoda:
    'https://www.agoda.com/thang-bom-boutique-hotel_2/hotel/nha-trang-vn.html',
  checkIn: '14:00',
  checkOut: '12:00',
  rating: { score: 8.0, count: 108 },
};

export const links = {
  tel: `tel:${contact.phoneIntl}`,
  zalo: `https://zalo.me/${contact.phoneDigits.replace(/^84/, '0')}`,
  whatsapp: (text?: string) =>
    `https://wa.me/${contact.phoneDigits}` + (text ? `?text=${encodeURIComponent(text)}` : ''),
  email: (subject: string) =>
    `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`,
  mapEmbed: `https://maps.google.com/maps?q=${encodeURIComponent(
    'Happy Star Hotel Nha Trang',
  )}&ll=${contact.geo.lat},${contact.geo.lng}&z=17&output=embed`,
};
