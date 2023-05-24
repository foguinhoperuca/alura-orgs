import green from '../assets/farmers/green.png';
import grow from '../assets/farmers/grow.png';
import jennyJack from '../assets/farmers/jenny-jack.png';
import potager from '../assets/farmers/potager.png';
import salad from '../assets/farmers/salad.png';

const generateRandNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const farmers = {
  title: 'Farmers',
  list: [
    {
      name: 'Green',
      image: green,
      distance: `${generateRandNumber(1, 500)}m`,
      starts: generateRandNumber(1, 5),
    },
    {
      name: 'Grow',
      image: grow,
      distance: `${generateRandNumber(1, 500)}m`,
      starts: generateRandNumber(1, 5),
    },
    {
      name: 'Jenny Jack Farm - an Olivera & Campos Enterprise',
      image: jennyJack,
      distance: `${generateRandNumber(1, 500)}m`,
      starts: generateRandNumber(1, 5),
    },
    {
      name: 'Potager',
      image: potager,
      distance: `${generateRandNumber(1, 500)}m`,
      starts: generateRandNumber(1, 5),
    },
    {
      name: 'Salad',
      image: salad,
      distance: `${generateRandNumber(1, 500)}m`,
      starts: generateRandNumber(1, 5),
    },
  ],
};

export default farmers;
