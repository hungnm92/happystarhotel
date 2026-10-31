import type { Dict } from './vi';

const plural = (n: number, one: string, few: string, many: string) => {
  const m10 = n % 10;
  const m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
};

const ru: Dict = {
  lang: 'ru',
  htmlLang: 'ru',
  langLabel: 'Русский',
  meta: {
    title: 'Happy Star Hotel Нячанг – 300 м до пляжа, от 380 000 донгов',
    description:
      'Отель 3* на улице Хунг Выонг, 300 м до пляжа Чан Фу. 7 категорий номеров от 16 до 32 м², завтрак, большие балконы. Бронирование через WhatsApp, Zalo или по телефону +84 935 372 719.',
  },
  nav: {
    rooms: 'Номера',
    amenities: 'Удобства',
    location: 'Расположение',
    contact: 'Контакты',
    book: 'Забронировать',
    language: 'Язык',
    menu: 'Открыть меню',
  },
  hero: {
    title: 'Комфортный отдых и лёгкие прогулки по Нячангу',
    lead: 'Happy Star Hotel находится примерно в 300 м от пляжа Чан Фу. 7 категорий номеров и всё необходимое для отдыха. Подходит семьям, компаниям друзей и командированным — по разумной цене.',
    priceFrom: 'Номера от',
    perNight: '/ ночь',
    cta: (channel: string) => `Написать в ${channel}`,
    bannerAlt:
      'Happy Star Hotel – комфортный отдых в Нячанге. Чисто, удобно, дружелюбно. 132/40 Hung Vuong, Нячанг. Телефон +84 935 372 719',
  },
  intro: {
    title: 'Уютный отель в центре Нячанга',
    body: 'Мы принимаем семьи, пары, командированных и туристические группы. 30 номеров на 6 этажах, лифт, круглосуточная стойка регистрации. Утром завтрак в отеле, днём пляж, вечером пешком на ночной рынок.',
    facts: [
      { value: '300 м', label: 'до пляжа Чан Фу' },
      { value: '30', label: 'номеров, 7 категорий' },
      { value: '8,0', label: 'на Agoda (108 отзывов)' },
      { value: '24/7', label: 'стойка регистрации' },
    ],
    lobbyAlt: 'Лобби и стойка регистрации Happy Star Hotel',
  },
  rooms: {
    title: 'Номера для пар, семей и компаний',
    lead: 'Цены зависят от даты и сезона. Напишите даты и количество гостей — мы назовём лучшую цену на выбранный номер.',
    tiers: {
      window: 'Standard и Superior — номера с окном',
      balcony: 'Deluxe — номера с большим балконом',
    },
    size: 'Площадь',
    guests: 'Вместимость',
    beds: 'Кровати',
    adults: (n: number) => `${n} ${plural(n, 'взрослый', 'взрослых', 'взрослых')}`,
    children: (n: number) => `${n} ${plural(n, 'ребёнок', 'ребёнка', 'детей')}`,
    bed: (width: string, count: number) =>
      `${count} ${plural(count, 'кровать', 'кровати', 'кроватей')} ${width} м`,
    light: {
      smallWindow: 'Небольшое окно',
      largeWindow: 'Большое окно',
      smallBalcony: 'Большое окно, небольшой балкон',
      largeBalcony: 'Большой балкон',
    },
    bath: {
      shower: 'Душ',
      smallTub: 'Небольшая ванна',
      largeTub: 'Большая ванна',
    },
    askZalo: 'Узнать цену в Zalo',
    askWhatsApp: 'Узнать цену в WhatsApp',
    viewPhotos: (n: number) => `${n} фото`,
    whatsappText: (room: string) =>
      `Здравствуйте, Happy Star Hotel! Хочу узнать о номере ${room}. Дата заезда: …, гостей: …`,
  },
  amenities: {
    title: 'Удобства и услуги',
    inRoomTitle: 'В номере',
    inRoom: [
      'Бесплатный Wi-Fi',
      'Кондиционер',
      'Телевизор',
      'Холодильник',
      'Туалетный столик',
      'Собственная ванная с горячей водой',
      'Полотенца и туалетные принадлежности',
    ],
    servicesTitle: 'Услуги отеля',
    services: [
      'Завтрак',
      'Прачечная',
      'Терраса на крыше',
      'Общая кухня',
      'Парковка для мотобайков',
      'Лифт',
      'Круглосуточная стойка регистрации',
    ],
    practicalTitle: 'Полезно знать',
    checkIn: 'Заезд с',
    checkOut: 'Выезд до',
    kids: 'Дети до 6 лет проживают бесплатно',
    groups: 'Бронируете от 5 номеров? Спросите групповую цену',
  },
  reviews: {
    title: 'Отзывы гостей на Agoda',
    lead: 'Средние оценки проверенных гостей на Agoda.',
    overall: 'Отлично',
    basedOn: (n: number) => `${n} проверенных отзывов`,
    scores: {
      service: 'Обслуживание',
      cleanliness: 'Чистота',
      value: 'Цена и качество',
      location: 'Расположение',
      facilities: 'Удобства',
    },
    cta: 'Читать отзывы на Agoda',
  },
  gallery: {
    title: 'Фото отеля',
    open: 'Увеличить фото',
    corridorAlt: 'Коридор в Happy Star Hotel',
  },
  location: {
    title: 'Расположение: рядом с пляжем Чан Фу в центре Нячанга',
    lead: 'Отель по адресу 132/40 Hùng Vương находится в переулке, поэтому ночью здесь тихо. Если не найдёте вход, позвоните на стойку регистрации.',
    places: {
      beach: 'Пляж Чан Фу',
      nightMarket: 'Ночной рынок Нячанга',
      tower: 'Башня Чам Хыонг и площадь 2/4',
      cathedral: 'Кафедральный собор',
      station: 'Железнодорожный вокзал',
      damMarket: 'Рынок Чо Дам',
      oceanography: 'Океанографический институт',
      cableCar: 'Канатная дорога Vinpearl',
      airport: 'Аэропорт Камрань',
    },
    directions: 'Проложить маршрут в Google Maps',
    mapTitle: 'Карта с расположением Happy Star Hotel',
  },
  contact: {
    title: 'Бронируйте напрямую в отеле',
    lead: 'Напишите даты и количество гостей — администратор за несколько минут сообщит о свободных номерах и цене.',
    zalo: 'Zalo',
    whatsapp: 'WhatsApp',
    messenger: 'Messenger',
    call: 'Позвонить',
    email: 'Email',
    emailSubject: 'Запрос на бронирование – Happy Star Hotel',
    whatsappText: 'Здравствуйте, Happy Star Hotel! Хочу забронировать номер. Дата заезда: …, гостей: …',
    address: 'Адрес',
    hotline: 'Телефон',
  },
  footer: {
    tagline: 'Комфортный отдых по доступной цене.',
    rights: 'Все права защищены.',
  },
  mobileBar: { call: 'Звонок', zalo: 'Zalo', whatsapp: 'WhatsApp' },
  lightbox: { close: 'Закрыть', prev: 'Предыдущее фото', next: 'Следующее фото' },
  primaryChannel: 'whatsapp',
};

export default ru;
