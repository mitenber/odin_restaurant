/**
 * Menu page module for Chez Mikhail restaurant website
 */

// Create header element
const createHeader = () => {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Our Menu";
    header.appendChild(h1);
    return header;
};

// Create menu intro section
const createIntro = () => {
    const intro = document.createElement("div");
    intro.id = "intro";
    
    const h2 = document.createElement("h2");
    h2.textContent = "Handcrafted with Love";
    
    const p = document.createElement("p");
    p.textContent = "All dishes made with locally-sourced ingredients";
    
    intro.appendChild(h2);
    intro.appendChild(p);
    
    return intro;
};

// Helper function to create a menu item
const createMenuItem = (title, description, price) => {
    const item = document.createElement("div");
    item.className = "menu-item";
    
    const itemTitle = document.createElement("h3");
    itemTitle.textContent = title;
    
    const itemDesc = document.createElement("p");
    itemDesc.className = "description";
    itemDesc.textContent = description;
    
    const itemPrice = document.createElement("p");
    itemPrice.className = "price";
    itemPrice.textContent = price;
    
    item.appendChild(itemTitle);
    item.appendChild(itemDesc);
    item.appendChild(itemPrice);
    
    return item;
};

// Create breakfast section
const createBreakfastSection = () => {
    const section = document.createElement("section");
    section.className = "menu-section";
    
    const h2 = document.createElement("h2");
    h2.textContent = "Breakfast";
    section.appendChild(h2);
    
    const menuItems = document.createElement("div");
    menuItems.className = "menu-items";
    
    // Add breakfast items
    menuItems.appendChild(createMenuItem(
        "Classic Eggs Benedict", 
        "Poached eggs, Canadian bacon, hollandaise sauce on a toasted English muffin",
        "$12.99"
    ));
    
    menuItems.appendChild(createMenuItem(
        "Fluffy Pancake Stack", 
        "Buttermilk pancakes served with maple syrup and fresh berries",
        "$10.99"
    ));
    
    menuItems.appendChild(createMenuItem(
        "Farmer's Omelet", 
        "Three-egg omelet with peppers, onions, ham, and cheddar cheese",
        "$11.99"
    ));
    
    menuItems.appendChild(createMenuItem(
        "Avocado Toast", 
        "Smashed avocado on artisan sourdough with cherry tomatoes and feta",
        "$9.99"
    ));
    
    section.appendChild(menuItems);
    return section;
};

// Create BBQ section
const createBBQSection = () => {
    const section = document.createElement("section");
    section.className = "menu-section";
    
    const h2 = document.createElement("h2");
    h2.textContent = "BBQ Specialties";
    section.appendChild(h2);
    
    const menuItems = document.createElement("div");
    menuItems.className = "menu-items";
    
    // Add BBQ items
    menuItems.appendChild(createMenuItem(
        "Smoked Brisket Plate", 
        "12-hour smoked beef brisket with two sides and cornbread",
        "$18.99"
    ));
    
    menuItems.appendChild(createMenuItem(
        "St. Louis Ribs", 
        "Slow-cooked pork ribs with our signature smoky glaze",
        "$17.99"
    ));
    
    menuItems.appendChild(createMenuItem(
        "Pulled Pork Sandwich", 
        "Tender pulled pork on a brioche bun with coleslaw",
        "$14.99"
    ));
    
    menuItems.appendChild(createMenuItem(
        "BBQ Combo Platter", 
        "Sample our best with brisket, ribs, and pulled pork",
        "$24.99"
    ));
    
    section.appendChild(menuItems);
    return section;
};

// Create baked goods section
const createBakedGoodsSection = () => {
    const section = document.createElement("section");
    section.className = "menu-section";
    
    const h2 = document.createElement("h2");
    h2.textContent = "Baked Goods";
    section.appendChild(h2);
    
    const menuItems = document.createElement("div");
    menuItems.className = "menu-items";
    
    // Add baked goods items
    menuItems.appendChild(createMenuItem(
        "Artisan Sourdough", 
        "Our signature bread with a crusty exterior and chewy inside",
        "$6.99"
    ));
    
    menuItems.appendChild(createMenuItem(
        "Cinnamon Rolls", 
        "Freshly baked with cream cheese frosting",
        "$4.99"
    ));
    
    menuItems.appendChild(createMenuItem(
        "Mixed Berry Pie", 
        "Flaky crust filled with seasonal berries",
        "$5.99/slice or $28.99/whole"
    ));
    
    menuItems.appendChild(createMenuItem(
        "Chocolate Croissants", 
        "Buttery layers with rich chocolate center",
        "$3.99"
    ));
    
    section.appendChild(menuItems);
    return section;
};

// Main export function - returns all menu page elements
export const menuPage = () => {
    // Create a document fragment to hold all elements
    const fragment = document.createDocumentFragment();
    
    // Add all elements to the fragment
    fragment.appendChild(createHeader());
    fragment.appendChild(createIntro());
    fragment.appendChild(createBreakfastSection());
    fragment.appendChild(createBBQSection());
    fragment.appendChild(createBakedGoodsSection());
    
    // Return the fragment with all elements
    return fragment;
};