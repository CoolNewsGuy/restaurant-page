import "./assets/background.jpg";
import "./assets/TangerineRegular.ttf";
import "./css/style.css";
import Navbar from "./components/navbar";
import Container from "./components/container";
import Home from "./components/home";
import Menu from "./components/menu";
import Contact from "./components/contact";

let pageContent = document.getElementById("content");
let sectionsContainer = Container();

sectionsContainer.append(Home(), Menu(), Contact());
pageContent.append(Navbar(), sectionsContainer);
