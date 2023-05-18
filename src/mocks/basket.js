import logo from '../../assets/logo.png';
import broccoli from '../../assets/vegetables/broccoli';
import cucumber from '../../assets/vegetables/cucumber';
import potato from '../../assets/vegetables/potato';
import pumpkin from '../../assets/vegetables/pumpkin';
import tomato from '../../assets/vegetables/tomato';

const basket = {
  top: {
	title: "Detail of basket"
  },
  details: {
	name: "Basket of Vegetables",
	logoFarm: logo,
	nameFarm: "Jenny & Jack - an Oliveira & Campos's farm.",
	description: "A basket with LOVE and carefully selected oridycts from the farm straight to your kitchen.",
	price: "$40.00"
  },
  itens: {
	title: "Basket's itens",
	list: [
	  {
		name: "Broccoli",
		image: broccolli
	  },
	  {
		name: "Cucumber",
		image: Cucumber
	  },
	  {
		name: "Potato",
		image: potato
	  },
	  {
		name: "Pumpkin",
		image: pumpkin
	  },
	  {
		name: "Tomato",
		image: tomato
	  }
	]
  }
};

export default basket;
