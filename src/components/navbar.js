import "../css/navbar.css";

function Navbar() {
   const header = document.createElement("header");
   const nav = document.createElement("nav");
   const ul = document.createElement("ul");

   ul.append(NavElement(["Home", "Menu", "Contact"], true));

   nav.appendChild(ul);
   header.appendChild(nav);

   return header;
}

function NavElement(elementTexts, areMiddleElements = false) {
   let navElement = document.createElement("li");

   // for middle elements
   if (areMiddleElements) {
      const middleElementsDiv = document.createElement("div");
      middleElementsDiv.setAttribute("class", "middle-elements");

      for (let elementText of elementTexts) {
         const middleElement = document.createElement("li");

         middleElement.textContent = elementText;
         middleElement.setAttribute("class", elementText.toLowerCase());

         middleElementsDiv.appendChild(middleElement);
      }

      navElement = middleElementsDiv;
   }

   return navElement;
}

const currentTab = (() => {
   function setHomeAsActiveTab() {
      const home = document.querySelector(".middle-elements").children[0];
      home.classList.add("current-tab");
   }

   function setMenuAsActiveTab() {
      const menu = document.querySelector(".middle-elements").children[1];

      document.querySelector(".home").classList.remove("current-tab");
      menu.classList.add("current-tab");
   }

   function __change(e) {
      document.querySelector(".current-tab").classList.remove("current-tab");
      e.target.classList.add("current-tab");
   }

   window.onload = () => {
      const middleElements =
         document.querySelector(".middle-elements").children;

      Array.from(middleElements).forEach(
         (element) => (element.onclick = __change)
      );
   };

   return {
      setHomeAsActiveTab,
      setMenuAsActiveTab,
   };
})();

export { Navbar as default, currentTab };
