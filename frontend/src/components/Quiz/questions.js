export const personalityTraits = {
  intelligent: { 
    emoji: '🧠', 
    name: 'Intelligent; Leadership', 
    description: '🧠 Ухаалаг ба удирдан чиглүүлэгч зан чанартай хүмүүс логик сэтгэлгээ сайтай, шийдвэр гаргахдаа эрсдэлээс айдаггүй, бусдыг урамшуулж, зөв чиглэлд хөтөлдөг. Тэд аливаа асуудлыг өргөн хүрээнд харах чадвартай, аливаа зорилгыг системтэйгээр төлөвлөж биелүүлдэг.' 
  },

  analytical: { 
    emoji: '📊', 
    name: 'Analytical; Thoughtful', 
    description: '📊 Аналитик буюу бодлоготой хүмүүс аливаа зүйлийг дүгнэлттэй, баримттайгаар ханддаг. Тэд мэдээлэлд тулгуурлан шийдвэр гаргадаг, асуудлыг жижиг хэсгүүдэд хувааж шийдэхийг илүүд үздэг бөгөөд бодитой, логик дүгнэлт гаргах чадвартай.' 
  },

  creative: { 
    emoji: '🎨', 
    name: 'Creative; Imaginative', 
    description: '🎨 Бүтээлч ба уран сэтгэмжтэй хүмүүс шинэ санаа, өвөрмөц шийдэл гаргах чадвартай. Тэд урлаг, дизайнд дуртай, ер бусын өнцгөөс аливаа зүйлийг харж чаддаг. Энэ төрлийн хүмүүс инноваци, төсөөлөл, уран сэтгэлгээгээрээ бусдыг гайхшруулдаг.' 
  },

  reliable: { 
    emoji: '🤝', 
    name: 'Reliable; Responsible', 
    description: '🤝 Найдвартай ба хариуцлагатай хүмүүс үүрэг хариуцлагаа ухамсарладаг, бусдын итгэлийг алдахгүйгээр ажилладаг. Тэд үргэлж цагтаа, итгэл дааж, бусдад туслахад бэлэн байдаг тул хамт олондоо итгэл төрүүлдэг.' 
  },

  empathetic: { 
    emoji: '❤️', 
    name: 'Empathetic; Caring', 
    description: '❤️ Энэрэнгүй, халамжтай хүмүүс бусдын сэтгэл хөдлөлийг мэдэрч чаддаг, дотроо сайхан сэтгэлтэй байдаг. Тэд бусдад туслах, урам зориг өгөх, ойлголцох чадвартай бөгөөд хамт олондоо дулаан уур амьсгал бүрдүүлдэг.' 
  },

  adventurous: { 
    emoji: '🚀', 
    name: 'Adventurous; Energetic', 
    description: '🚀 Адал явдалд дуртай, эрч хүчтэй хүмүүс шинэ зүйл туршихаас айдаггүй, зоримог алхам хийдэг. Тэд идэвхтэй, урам зоригтой, амьдралд үргэлж шинэ сорилт эрж байдаг. Энэ төрлийн хүмүүс бусдыг эрч хүчээрээ татдаг.' 
  },

  optimistic: { 
    emoji: '😊', 
    name: 'Optimistic; Social', 
    description: '😊 Эерэг сэтгэлгээтэй, нийгэмд нээлттэй хүмүүс бусдыг урамшуулж, инээмсэглэлээр амьдралыг гэрэлтүүлдэг. Тэд асуудлыг сайнаар хардаг, бусадтай амархан ойлголцдог, найрсаг, хамт олондоо баяр баясгалан түгээдэг.' 
  }
};


export const questions = [
  {
    text: 'Юу хамгийн түрүүнд харсан бэ?',
    image: '/quiz-images/img1.webp',
    choices: [
  { label: 'Эрэгтэй хүн', value: 1, traits: { intelligent: 1, analytical: 1 } },
  { label: 'Эмэгтэй хүн', value: 2, traits: { empathetic: 1, optimistic: 1 } },
  { label: 'Ширээ', value: 3, traits: { reliable: 1, analytical: 1 } },
    ]
  },
  {
    text: 'Юу хамгийн түрүүнд харсан бэ?',
    image: '/quiz-images/img2.webp',
    choices: [
  { label: 'Машин', value: 1, traits: { adventurous: 1, analytical: 1 } },
  { label: 'Дурантай хүн', value: 2, traits: { creative: 1, empathetic: 1 } },
  { label: 'А үсэг', value: 3, traits: { intelligent: 1, analytical: 1 } }
    ]
  },
  {
    text: 'Юу хамгийн түрүүнд харсан бэ?',
    image: '/quiz-images/img3.webp',
    choices: [
  { label: 'Хүүхэд', value: 1, traits: { empathetic: 1, optimistic: 1 } },
  { label: 'Хосууд', value: 2, traits: { creative: 1, empathetic: 1 } },
  { label: 'Мод', value: 3, traits: { reliable: 1, analytical: 1 } }
    ]
  },
  {
    text: 'Юу хамгийн түрүүнд харсан бэ?',
    image: '/quiz-images/img4.webp',
    choices: [
  { label: 'Зураач', value: 1, traits: { creative: 1, intelligent: 1 } },
  { label: 'Жижиг байшин', value: 2, traits: { reliable: 1, analytical: 1 } },
  { label: 'Том нүүр', value: 3, traits: { empathetic: 1, optimistic: 1 } }
    ]
  },
  {
    text: 'Юу хамгийн түрүүнд харсан бэ?',
    image: '/quiz-images/img5.jpg',
    choices: [
  { label: 'Нохой', value: 1, traits: { empathetic: 1, reliable: 1 } },
  { label: 'Хоёр муур', value: 2, traits: { creative: 1, optimistic: 1 } },
  { label: 'Шүд', value: 3, traits: { analytical: 1, intelligent: 1 } }
    ]
  },
  {
    text: 'Таны анхны мэдрэмж?',
    image: '/quiz-images/img6.png',
    choices: [
  { label: 'Тайван, амралт', value: 1, traits: { optimistic: 1, empathetic: 1 } },
  { label: 'Хязгаарлагдмал, овжин', value: 2, traits: { analytical: 1, intelligent: 1 } }
    ]
  },
  {
    text: 'Юу хамгийн түрүүнд харсан бэ?',
    image: '/quiz-images/img7.webp',
    choices: [
  { label: 'Эрэгтэй нүүр', value: 1, traits: { intelligent: 1, adventurous: 1 } },
  { label: 'Эмэгтэй нүүр', value: 2, traits: { empathetic: 1, creative: 1 } }
    ]
  },
  {
    text: 'Юу хамгийн түрүүнд харсан бэ?',
    image: '/quiz-images/img8.webp',
    choices: [
  { label: 'Заан', value: 1, traits: { reliable: 1, intelligent: 1 } },
  { label: 'Тосгон', value: 2, traits: { empathetic: 1, creative: 1 } }
    ]
  },
  {
    text: 'Юу хамгийн түрүүнд харсан бэ?',
    image: '/quiz-images/img9.webp',
    choices: [
  { label: 'Зураач', value: 1, traits: { creative: 1, intelligent: 1 } },
  { label: 'Олон хүн', value: 2, traits: { empathetic: 1, optimistic: 1 } },
  { label: 'Сахалтай эрэгтэй', value: 3, traits: { reliable: 1, analytical: 1 } },
  { label: 'Масктай дүр', value: 4, traits: { adventurous: 1, creative: 1 } }
    ]
  },
  {
    text: 'Юу хамгийн түрүүнд харсан бэ?',
    image: '/quiz-images/img10.jpg',
    choices: [
  { label: 'Мод', value: 1, traits: { reliable: 1, analytical: 1 } },
  { label: 'Бор багваахай', value: 2, traits: { empathetic: 1, optimistic: 1 } },
  { label: 'Арслан', value: 3, traits: { intelligent: 1, adventurous: 1 } },
  { label: 'Загас', value: 4, traits: { creative: 1, optimistic: 1 } }
    ]
  }
];

export default questions;