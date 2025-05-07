
/**
 * About page module for Chez Mikhail restaurant website
 */

// Create header element
const createHeader = () => {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Chez Mikhail";
    header.appendChild(h1);
    return header;
};

// Create intro section
const createIntro = () => {
    const intro = document.createElement("div");
    intro.id = "intro";
    
    const h2 = document.createElement("h2");
    h2.textContent = "A Culinary Experience Like No Other";
    
    const p = document.createElement("p");
    p.textContent = "Breakfast | BBQ | Baked Goods";
    
    intro.appendChild(h2);
    intro.appendChild(p);
    
    return intro;
};

// Create about section
const createAboutSection = () => {
    const section = document.createElement("section");
    section.className = "about";
    
    const h2 = document.createElement("h2");
    h2.textContent = "Delicious Food, Warm Atmosphere";
    section.appendChild(h2);
    
    const paragraphs = [
        "Chez Mikhail offers an unforgettable dining experience with our signature blend of breakfast classics, authentic BBQ, and freshly baked goods. Our restaurant has been serving the community since 2020, providing a cozy atmosphere where friends and family can gather to enjoy exceptional food.",
        "Our talented chefs use only the freshest ingredients to create mouthwatering dishes that will satisfy every craving. From fluffy pancakes and crispy bacon in the morning to slow-smoked brisket and homemade cornbread for lunch and dinner, we've got something for everyone.",
        "Come visit us today and discover why our customers keep coming back!"
    ];
    
    paragraphs.forEach(text => {
        const p = document.createElement("p");
        p.textContent = text;
        section.appendChild(p);
    });
    
    return section;
};

// Create hours section
const createHoursSection = () => {
    const section = document.createElement("section");
    section.className = "hours";
    
    const h2 = document.createElement("h2");
    h2.textContent = "Hours";
    section.appendChild(h2);
    
    const hours = [
        "Monday - Friday: 7:00 AM - 9:00 PM",
        "Saturday - Sunday: 8:00 AM - 10:00 PM"
    ];
    
    hours.forEach(text => {
        const p = document.createElement("p");
        p.textContent = text;
        section.appendChild(p);
    });
    
    return section;
};

// Main export function - returns all page elements
export const homePage = () => {
    // Create a document fragment to hold all elements
    // This is more efficient than appending each element individually
    const fragment = document.createDocumentFragment();
    
    // Add all elements to the fragment
    fragment.appendChild(createHeader());
    fragment.appendChild(createIntro());
    fragment.appendChild(createAboutSection());
    fragment.appendChild(createHoursSection());
    
    // Return the fragment with all elements
    return fragment;
};