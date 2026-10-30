// Dữ liệu hạng phòng. Trang không niêm yết giá từng hạng, chỉ ghi "Giá từ" minPrice.
// Ảnh: đường dẫn tương đối trong src/assets/rooms/, ảnh đầu tiên là ảnh chính.

export type Bed = { width: 1.2 | 1.6 | 1.8; count: number };
export type Light = 'smallWindow' | 'largeWindow' | 'smallBalcony' | 'largeBalcony';
export type Bath = 'shower' | 'smallTub' | 'largeTub';

export interface Room {
  slug: string;
  name: string;
  tier: 'window' | 'balcony';
  size: number;
  beds: Bed[];
  adults: number;
  children: number;
  light: Light;
  bath: Bath;
  roomNumbers: string[];
  images: string[];
}

export const rooms: Room[] = [
  {
    slug: 'standard-double',
    name: 'Standard Double',
    tier: 'window',
    size: 16,
    beds: [{ width: 1.6, count: 1 }],
    adults: 2,
    children: 0,
    light: 'smallWindow',
    bath: 'shower',
    roomNumbers: ['204', '304', '404', '504', '604', '704'],
    images: [
      'standard-double/standard-double-03.jpg',
      'standard-double/standard-double-02.jpg',
      'standard-double/standard-double-01.jpg',
      'standard-double/standard-double-04.jpg',
      'standard-double/standard-double-05.jpg',
    ],
  },
  {
    slug: 'superior-double',
    name: 'Superior Double',
    tier: 'window',
    size: 23,
    beds: [{ width: 1.8, count: 1 }],
    adults: 2,
    children: 1,
    light: 'largeWindow',
    bath: 'shower',
    roomNumbers: ['205', '305', '405', '505', '605', '705'],
    images: [
      'superior-double/superior-double-01.jpg',
      'superior-double/superior-double-02.jpg',
      'superior-double/superior-double-03.jpg',
      'superior-double/superior-double-05.jpg',
      'superior-double/superior-double-04.jpg',
    ],
  },
  {
    slug: 'superior-twin',
    name: 'Superior Twin',
    tier: 'window',
    size: 25,
    beds: [{ width: 1.2, count: 2 }],
    adults: 2,
    children: 0,
    light: 'smallBalcony',
    bath: 'smallTub',
    roomNumbers: ['506', '606', '706'],
    images: [
      'superior/superior-twin-main.jpg',
      'superior/superior-05.jpg',
      'superior/superior-03.jpg',
      'superior/superior-06.jpg',
      'superior/superior-04.jpg',
    ],
  },
  {
    slug: 'superior-triple',
    name: 'Superior Triple',
    tier: 'window',
    size: 25,
    beds: [
      { width: 1.6, count: 1 },
      { width: 1.2, count: 1 },
    ],
    adults: 3,
    children: 1,
    light: 'smallBalcony',
    bath: 'smallTub',
    roomNumbers: ['206', '306', '406'],
    images: [
      'superior/superior-triple-main.jpg',
      'superior/superior-01.jpg',
      'superior/superior-02.jpg',
      'superior/superior-07.jpg',
      'superior/superior-08.jpg',
    ],
  },
  {
    slug: 'deluxe-twin',
    name: 'Deluxe Twin',
    tier: 'balcony',
    size: 30,
    beds: [{ width: 1.2, count: 2 }],
    adults: 2,
    children: 0,
    light: 'largeBalcony',
    bath: 'largeTub',
    roomNumbers: ['302', '402', '502', '602', '702'],
    images: [
      'deluxe-twin/deluxe-twin-01.jpg',
      'deluxe-twin/deluxe-twin-02.jpg',
      'deluxe-twin/deluxe-twin-09.jpg',
      'deluxe-twin/deluxe-twin-05.jpg',
      'deluxe-twin/deluxe-twin-06.jpg',
      'deluxe-twin/deluxe-twin-08.jpg',
    ],
  },
  {
    slug: 'deluxe-triple',
    name: 'Deluxe Triple',
    tier: 'balcony',
    size: 32,
    beds: [
      { width: 1.6, count: 1 },
      { width: 1.2, count: 1 },
    ],
    adults: 3,
    children: 1,
    light: 'largeBalcony',
    bath: 'smallTub',
    // 202 (giường 1,8m + 1,2m, ban công lớn) được xếp chung nhóm này
    roomNumbers: ['201', '202', '301', '401'],
    images: [
      'deluxe-family/deluxe-triple-main.jpg',
      'deluxe-family/deluxe-family-06.jpg',
      'deluxe-family/deluxe-family-05.jpg',
      'deluxe-family/deluxe-family-03.jpg',
      'deluxe-family/deluxe-family-08.jpg',
    ],
  },
  {
    slug: 'deluxe-family',
    name: 'Deluxe Family',
    tier: 'balcony',
    size: 32,
    beds: [{ width: 1.6, count: 2 }],
    adults: 4,
    children: 2,
    light: 'largeBalcony',
    bath: 'smallTub',
    roomNumbers: ['501', '601', '701'],
    images: [
      'deluxe-family/deluxe-family-01.jpg',
      'deluxe-family/deluxe-family-09.jpg',
      'deluxe-family/deluxe-family-04.jpg',
      'deluxe-family/deluxe-family-02.jpg',
      'deluxe-family/deluxe-family-07.jpg',
    ],
  },
];

// Giá thấp nhất (Standard Double, ngày thường), VND / đêm
export const minPrice = 380000;
export const totalRooms = rooms.reduce((n, r) => n + r.roomNumbers.length, 0);

// Ảnh cho thư viện ảnh chung
export const galleryImages = [
  'hotel/lobby.jpg',
  'rooms/deluxe-twin/deluxe-twin-08.jpg',
  'hotel/corridor.jpg',
  'rooms/superior-double/superior-double-03.jpg',
  'rooms/deluxe-family/deluxe-family-05.jpg',
  'rooms/superior/superior-07.jpg',
  'rooms/deluxe-twin/deluxe-twin-03.jpg',
  'rooms/superior-double/superior-double-04.jpg',
];
