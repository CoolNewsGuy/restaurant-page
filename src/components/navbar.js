import "../css/navbar.css";

function Navbar() {
   const header = document.createElement("header");
   const nav = document.createElement("nav");
   const ul = document.createElement("ul");

   ul.append(
      NavElement("Castaurant"),
      NavElement(["Home", "Menu", "About"], true),
      NavElement("Contact")
   );

   nav.appendChild(ul);
   header.appendChild(nav);

   return header;
}

function NavElement(elementTexts, areMiddleElements = false) {
   let navElement = document.createElement("li");

   // for logo
   if (elementTexts === "Castaurant") {
      navElement.setAttribute("class", "logo");
      navElement.textContent = elementTexts;
   }
   // for other elements
   else if (!areMiddleElements) {
      navElement.setAttribute("class", elementTexts.toLowerCase());
      navElement.textContent = elementTexts;
   }

   // for middle element
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

export default Navbar;
