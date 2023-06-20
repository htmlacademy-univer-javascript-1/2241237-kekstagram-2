import {generateRandom} from './util.js';

const DESCRIPTIONS = [
  'Мужик не тот кто, а тот кто',
  'Волк волку волк, а волк волку волк',
  'Враги не предают, предают враги',
  'Волк - не волк, если ему не интересна суета',
  'Каждый может кинуть камень в волка, но не каждый может кинуть волка в камень',
  'У каждого волка есть шкура, но не у каждой шкуры есть волк'
];

const COMMENTS = [
  'Всё отлично!',
  'Красавчик, брат',
  'My life, my rules, bro',
  'За Кавказ, брат',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'А вы тоже сюда чисто поржать зашли?'
];

const NAMES = [
  'Самир',
  'Джейсон',
  'Стетхем',
  'Сильвестер',
  'Андрей',
  'Геннадий'
];

function generateComment(number) {
  const message = Array(generateRandom(1, 2));
  for (let i = 0; i < message - 1; i++) {
    message[i] = COMMENTS[generateRandom(0, COMMENTS.length - 1)];
  }

  return {
    id: number,
    avatar: `img/avatar-${generateRandom(1, 6)}.svg`,
    message: message,
    name: NAMES[generateRandom(0, NAMES.length - 1)]
  };
}

function generateDescription(identifier){
  const comments = Array(3);
  for (let i = 0; i < 3; i++) {
    comments[i] = generateComment(i + 1);
  }

  return {
    id: identifier,
    url: 'photos/identifier.jpg',
    descriptions: DESCRIPTIONS[generateRandom(0, DESCRIPTIONS.length - 1)],
    likes: generateRandom(15, 200),
    comments: comments
  };
}

function generateDescriptions(){
  const descriptions = Array(25);
  for (let i = 0; i < 25; i++) {
    descriptions[i] = generateDescription(i + 1);
  }
  return (descriptions);
}

export {generateDescriptions};
