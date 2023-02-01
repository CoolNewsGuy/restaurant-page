import "../css/contact.css";

function Contact() {
   const contactSection = document.createElement("section");

   contactSection.id = "hidden-contact";
   contactSection.append(Email(), Phone(), Note());

   return contactSection;
}

function Email() {
   const emailSection = document.createElement("section");
   const emailHeading = document.createElement("h2");
   const emailDiv = document.createElement("div");

   emailHeading.textContent = "Email:";
   emailDiv.textContent = "loremipsum31@gmail.com";

   emailSection.setAttribute("class", "email");
   emailSection.append(emailHeading, emailDiv);

   return emailSection;
}

function Phone() {
   const phoneSection = document.createElement("section");
   const phoneHeading = document.createElement("h2");
   const phoneDiv = document.createElement("div");

   phoneHeading.textContent = "Phone:";
   phoneDiv.textContent = "(+48) 791-589-493";

   phoneSection.setAttribute("class", "phone");
   phoneSection.append(phoneHeading, phoneDiv);

   return phoneSection;
}

function Note() {
   const noteDiv = document.createElement("div");
   const noteEm = document.createElement("em");

   noteEm.textContent = "(NOTE: These are just fake information)";

   noteDiv.setAttribute("class", "note");
   noteDiv.append(noteEm);

   return noteDiv;
}

export default Contact;
