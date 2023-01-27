import "../css/menu.css";
import PizzaImg from "../assets/foods/pizza.png";
import BurritoImg from "../assets/foods/burrito.png";
import BurgerImg from "../assets/foods/hamburger.png";
import TacoImg from "../assets/foods/taco.png";
import PotatoImg from "../assets/foods/fried-potatoes.png";
import SandwichImg from "../assets/foods/sandwich.png";
import RiceImg from "../assets/foods/rice.png";
import SpaghettiImg from "../assets/foods/spaghetti.png";
import CakeImg from "../assets/foods/cake.png";
import JellyImg from "../assets/foods/jelly.png";
import IceCreamImg from "../assets/foods/ice-cream.png";
import CupcakeImg from "../assets/foods/cupcake.png";

function Menu() {
   const sectionMenu = document.createElement("section");

   sectionMenu.id = "hidden-menu";
   sectionMenu.append(SubMenu(1), SubMenu(2), SubMenu(3));

   return sectionMenu;
}

function SubMenu(subMenuNum) {
   const sectionSubMenu = document.createElement("section");
   let foodsList;

   if (subMenuNum === 1) {
      foodsList = {
         Pizza: [PizzaImg, "3$"],
         Burrito: [BurritoImg, "5$"],
         Hamburger: [BurgerImg, "3.5$"],
         Taco: [TacoImg, "8$"],
      };
   }
   if (subMenuNum === 2) {
      foodsList = {
         "Fried Potato": [PotatoImg, "2$"],
         Sandwich: [SandwichImg, "2.5$"],
         Rice: [RiceImg, "5$"],
         Spaghetti: [SpaghettiImg, "4$"],
      };
   }
   if (subMenuNum === 3) {
      foodsList = {
         Cake: [CakeImg, "2.5$"],
         Jelly: [JellyImg, "2$"],
         "Ice Cream": [IceCreamImg, "1$"],
         Cupcake: [CupcakeImg, "0.2$"],
      };
   }

   for (let food in foodsList) {
      sectionSubMenu.append(
         Food({
            foodName: food,
            foodImg: foodsList[food][0],
            foodPrice: foodsList[food][1],
         })
      );
   }

   sectionSubMenu.setAttribute("class", "sub-menu");
   return sectionSubMenu;
}

function Food({ foodName, foodImg, foodPrice }) {
   const divFood = document.createElement("div");
   const foodNameHeading = document.createElement("h2");
   const foodImageImg = document.createElement("img");
   const foodPriceDiv = document.createElement("div");

   foodNameHeading.textContent = foodName;
   foodImageImg.src = foodImg;
   foodPriceDiv.setAttribute("class", "price");
   foodPriceDiv.textContent = foodPrice;

   divFood.setAttribute("class", "food");
   divFood.append(foodNameHeading, foodImageImg, foodPriceDiv);

   return divFood;
}

export default Menu;
