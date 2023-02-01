import "../css/home.css";
import Icon from "../assets/beluga.jpg";
import { currentTab } from "./navbar";

function Home() {
   const homeSection = document.createElement("section");

   homeSection.id = "home";
   homeSection.append(
      HomeHeading(),
      HomeImage(),
      HomeDescription(),
      MenuButton()
   );

   return homeSection;
}

function HomeHeading() {
   const homeHeading = document.createElement("h1");
   homeHeading.textContent = "Welcome dear human!";

   return homeHeading;
}

function HomeImage() {
   const figure = document.createElement("figure");
   const figImage = document.createElement("img");
   const figCaption = document.createElement("figcaption");

   figImage.src = Icon;
   figImage.alt = "beluga photo";
   figImage.setAttribute("class", "pfp");

   figCaption.textContent = "Beluga The Cat";

   figure.append(figImage, figCaption);

   return figure;
}

function HomeDescription() {
   const description = document.createElement("p");

   description.setAttribute("class", "description");
   description.innerHTML = `I am Beluga The Cat, the owner of Castaurant (named after cats) and the most loved cat in the world!
   <br>
   <br>
   Here in Castaurant, we try our best to make humans happy to take control of their brains with our infinite
   cuteness power 🐱!`;

   return description;
}

function MenuButton() {
   const menuBtn = document.createElement("button");

   menuBtn.setAttribute("class", "menu-btn");
   menuBtn.textContent = "Checkout menu";

   function showMenu() {
      let homeSection = document.querySelector("#home");
      let menuSection = document.querySelector("#hidden-menu");

      currentTab.setMenuAsActiveTab();

      homeSection.setAttribute("class", "hidden-home");

      setTimeout(() => {
         homeSection.style.display = "none";
         menuSection.id = "visible-menu";
      }, 1000);
   }

   menuBtn.onclick = showMenu;

   return menuBtn;
}

export default Home;
