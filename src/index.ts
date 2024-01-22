import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());

mainDishBuilder.resert();

const meal2 = mainDishBuilder.makeBeverage();
console.log(meal2.getMeal());
console.log(mainDishBuilder.getMeal().getPrice());

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
