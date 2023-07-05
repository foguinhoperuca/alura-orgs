import logo from '../assets/logo.png';
import broccoli from '../assets/vegetables/broccoli.png';
import cucumber from '../assets/vegetables/cucumber.png';
import potato from '../assets/vegetables/potato.png';
import pumpkin from '../assets/vegetables/pumpkin.png';
import tomato from '../assets/vegetables/tomato.png';

const basket = {
  top: {
    title: 'Detail of basket',
  },
  details: {
    name: 'Basket of Vegetables',
    logoFarm: logo,
    nameFarm: "Jenny & Jack - an Oliveira & Campos's farm.",
    description:
      'A basket with LOVE and carefully selected oridycts from the farm straight to your kitchen.',
    price: '$40.00',
  },
  button: {
    label: 'Buy NOW!!',
  },
  itens: {
    title: "Basket's itens",
    list: [
      {
        name: 'Broccoli',
        image: broccoli,
      },
      {
        name: 'Cucumber',
        image: cucumber,
      },
      {
        name: 'Potato',
        image: potato,
      },
      {
        name: 'Pumpkin',
        image: pumpkin,
      },
      {
        name: 'Tomato',
        image: tomato,
      },
    ],
  },
};

export default basket;
