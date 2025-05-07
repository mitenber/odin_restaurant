import "./styles.css";
import { homePage } from "./home.js"
import { menuPage } from "./menu.js"
import { aboutPage } from "./about.js"

const menuBtn = document.getElementById("menu");
const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about")

const content = document.getElementById("content");

const clearContent = () => {

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
};

menuBtn.addEventListener("click", () => {
    clearContent();
    const menu = menuPage()
    content.appendChild(menu);
})

homeBtn.addEventListener("click", () => {
    clearContent();
    const home = homePage()
    content.appendChild(home);
})

aboutBtn.addEventListener("click", () => {
    clearContent();
    const about = aboutPage()
    content.appendChild(about);
})

document.addEventListener('DOMContentLoaded', () => {
    
    const home = homePage();
    content.appendChild(home);
});