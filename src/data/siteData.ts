export const images = {
  hero: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1920",
  about: "https://images.pexels.com/photos/2463016/pexels-photo-2463016.jpeg?auto=compress&cs=tinysrgb&w=800",
  
  artists: [
    "https://images.pexels.com/photos/3785706/pexels-photo-3785706.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&w=600"
  ],

  styles: [
    "https://images.pexels.com/photos/1002779/pexels-photo-1002779.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2173383/pexels-photo-2173383.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&w=600"
  ],

  gallery: [
    "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1002779/pexels-photo-1002779.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2173383/pexels-photo-2173383.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5012090/pexels-photo-5012090.jpeg?auto=compress&cs=tinysrgb&w=600"
  ],

  process: [
    "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1557913/pexels-photo-1557913.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1194412/pexels-photo-1194412.jpeg?auto=compress&cs=tinysrgb&w=600"
  ],

  testimonials: [
    "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=200"
  ],

  certificates: [
    "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/7283367/pexels-photo-7283367.jpeg?auto=compress&cs=tinysrgb&w=400"
  ]
};

export const artists = [
  {
    id: 1,
    name: "Александр Черный",
    role: "Основатель, Мастер реализма",
    experience: "12+ лет",
    specialization: "Реализм, портреты, черно-белые работы",
    image: images.artists[0],
    description: "Специализируется на фотореалистичных портретах и сложных композициях. Работал с международными клиентами."
  },
  {
    id: 2,
    name: "Мария Колор",
    role: "Мастер акварельных татуировок",
    experience: "8+ лет",
    specialization: "Акварель, флористика, абстракция",
    image: images.artists[1],
    description: "Создает уникальные акварельные композиции с яркими цветовыми переходами и авторским стилем."
  },
  {
    id: 3,
    name: "Дмитрий Нео",
    role: "Мастер геометрии и орнаментов",
    experience: "10+ лет",
    specialization: "Геометрия, дотворк, орнаментал",
    image: images.artists[2],
    description: "Эксперт в создании сложных геометрических паттернов и симметричных композиций."
  },
  {
    id: 4,
    name: "Анна Лайн",
    role: "Мастер минимализма",
    experience: "6+ лет",
    specialization: "Минимализм, лайнворк, тонкие линии",
    image: images.artists[3],
    description: "Создает элегантные минималистичные дизайны с идеально ровными линиями."
  }
];

export const styles = [
  {
    id: 1,
    name: "Реализм",
    description: "Фотореалистичные портреты и композиции с детальной проработкой",
    image: images.styles[0],
    price: "от 15 000 ₽"
  },
  {
    id: 2,
    name: "Акварель",
    description: "Яркие цветовые переходы и эффект акварельной живописи",
    image: images.styles[1],
    price: "от 12 000 ₽"
  },
  {
    id: 3,
    name: "Геометрия",
    description: "Точные геометрические формы и симметричные паттерны",
    image: images.styles[2],
    price: "от 10 000 ₽"
  },
  {
    id: 4,
    name: "Минимализм",
    description: "Лаконичные дизайны с тонкими линиями",
    image: images.styles[3],
    price: "от 8 000 ₽"
  },
  {
    id: 5,
    name: "Традишнл",
    description: "Классический американский стиль с яркими цветами",
    image: images.styles[4],
    price: "от 9 000 ₽"
  },
  {
    id: 6,
    name: "Блэкворк",
    description: "Полностью черные композиции и заливки",
    image: images.styles[5],
    price: "от 11 000 ₽"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Екатерина Смирнова",
    avatar: images.testimonials[0],
    rating: 5,
    date: "15 марта 2024",
    text: "Невероятная работа! Александр создал потрясающий портрет моей бабушки. Каждая деталь проработана до мелочей. Студия чистая, атмосфера приятная. Рекомендую!",
    tattooStyle: "Реализм"
  },
  {
    id: 2,
    name: "Игорь Петров",
    avatar: images.testimonials[1],
    rating: 5,
    date: "2 марта 2024",
    text: "Дмитрий - настоящий профессионал! Геометрическая композиция на рукаве получилась идеальной. Все линии ровные, симметрия соблюдена. Спасибо!",
    tattooStyle: "Геометрия"
  },
  {
    id: 3,
    name: "Анастасия Волкова",
    avatar: images.testimonials[2],
    rating: 5,
    date: "28 февраля 2024",
    text: "Мария создала для меня волшебную акварельную татуировку! Цвета просто сказочные, переходы плавные. Это настоящее произведение искусства на моем теле.",
    tattooStyle: "Акварель"
  },
  {
    id: 4,
    name: "Максим Соколов",
    avatar: images.testimonials[3],
    rating: 5,
    date: "20 февраля 2024",
    text: "Первая татуировка в моей жизни, и я очень доволен! Анна все подробно объяснила, подобрала идеальный дизайн. Минимализм - это мое!",
    tattooStyle: "Минимализм"
  },
  {
    id: 5,
    name: "Дарья Козлова",
    avatar: images.testimonials[4],
    rating: 5,
    date: "10 февраля 2024",
    text: "Лучшая тату-студия в городе! Профессиональный подход, стерильность на высшем уровне. Результат превзошел все ожидания. Обязательно вернусь!",
    tattooStyle: "Традишнл"
  }
];

export const processSteps = [
  {
    id: 1,
    title: "Консультация",
    description: "Обсуждаем вашу идею, стиль, размер и расположение татуировки. Подбираем оптимальное решение.",
    image: images.process[0],
    duration: "30-60 мин"
  },
  {
    id: 2,
    title: "Создание эскиза",
    description: "Мастер разрабатывает индивидуальный эскиз на основе ваших пожеланий. Вносим правки до полного утверждения.",
    image: images.process[1],
    duration: "1-7 дней"
  },
  {
    id: 3,
    title: "Подготовка",
    description: "Обработка кожи, подготовка оборудования, нанесение трафарета. Все инструменты стерильны и одноразовы.",
    image: images.process[2],
    duration: "15-20 мин"
  },
  {
    id: 4,
    title: "Нанесение",
    description: "Процесс создания татуировки. Делаем перерывы при необходимости. Следим за вашим комфортом.",
    image: images.process[3],
    duration: "1-8 часов"
  }
];

export const faqItems = [
  {
    question: "Больно ли делать татуировку?",
    answer: "Уровень болевых ощущений индивидуален и зависит от места нанесения, размера работы и болевого порога. Большинство клиентов описывают ощущения как терпимые. Мы делаем все для вашего комфорта и можем делать перерывы."
  },
  {
    question: "Сколько времени заживает татуировка?",
    answer: "Первичное заживление занимает 2-3 недели. Полное восстановление кожи происходит в течение 1-2 месяцев. Мы предоставляем подробные инструкции по уходу."
  },
  {
    question: "Можно ли набивать татуировку летом?",
    answer: "Да, можно. Важно защищать свежую татуировку от прямых солнечных лучей в период заживления и использовать солнцезащитный крем после заживления."
  },
  {
    question: "Сколько стоит татуировка?",
    answer: "Стоимость зависит от размера, сложности, стиля и времени работы. Минимальная цена - 5000₽. Точную стоимость определяем после консультации и создания эскиза."
  },
  {
    question: "Нужна ли предоплата?",
    answer: "Да, для бронирования времени мы берем предоплату 3000₽, которая входит в общую стоимость работы. Это гарантирует серьезность намерений обеих сторон."
  },
  {
    question: "Можно ли исправить старую татуировку?",
    answer: "Да, мы делаем перекрытия (кавер-ап) старых татуировок. Приходите на консультацию, и мы оценим возможности и подберем оптимальное решение."
  },
  {
    question: "Какие есть противопоказания?",
    answer: "Беременность, кормление грудью, острые заболевания, проблемы со свертываемостью крови, алкогольное/наркотическое опьянение, возраст до 18 лет."
  },
  {
    question: "Как подготовиться к сеансу?",
    answer: "Хорошо выспитесь, поешьте за 2 часа до сеанса, не употребляйте алкоголь за сутки. Место нанесения должно быть чистым, без повреждений. Одежда должна обеспечивать доступ к месту работы."
  }
];

export const pricing = [
  {
    id: 1,
    name: "Консультация",
    price: "Бесплатно",
    description: "Обсуждение идеи и подбор стиля",
    features: [
      "Личная встреча с мастером",
      "Обсуждение дизайна",
      "Оценка стоимости",
      "Рекомендации по уходу"
    ]
  },
  {
    id: 2,
    name: "Минимальная работа",
    price: "от 5 000 ₽",
    description: "Небольшие татуировки до 5 см",
    features: [
      "Простые дизайны",
      "Минималистичные работы",
      "Надписи",
      "Символы"
    ]
  },
  {
    id: 3,
    name: "Средняя работа",
    price: "от 10 000 ₽",
    description: "Татуировки среднего размера 5-15 см",
    features: [
      "Детализированные работы",
      "Цветные татуировки",
      "Средняя сложность",
      "2-4 часа работы"
    ],
    popular: true
  },
  {
    id: 4,
    name: "Крупная работа",
    price: "от 25 000 ₽",
    description: "Большие татуировки от 15 см",
    features: [
      "Сложные композиции",
      "Рукава, спина",
      "Реалистичные портреты",
      "4-8 часов работы"
    ]
  }
];

export const timeSlots = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00"
];