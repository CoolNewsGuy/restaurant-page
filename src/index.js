import "./assets/background.jpg";
import "./assets/TangerineRegular.ttf";
import "./css/style.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Container from "./components/container";

let pageContent = document.getElementById("content");
let sectionsContainer = Container();

sectionsContainer.append(Home());
pageContent.append(Navbar(), sectionsContainer);
