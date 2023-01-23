import "./assets/background.jpg";
import "./assets/TangerineRegular.ttf";
import "./css/style.css";
import Navbar from "./components/navbar";
import Home from "./components/home";

let pageContent = document.getElementById("content");

pageContent.append(Navbar(), Home());
