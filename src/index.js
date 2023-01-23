import "./assets/background.jpg";
import "./assets/TangerineRegular.ttf";
import Navbar from "./components/navbar";
import "./css/style.css";

let pageContent = document.getElementById("content");

pageContent.insertBefore(Navbar(), document.querySelector(".home"));
