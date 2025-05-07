/**
 * About page module for Chez Mikhail restaurant website
 * Contains the restaurant's history and roots
 */

// Create header element
const createHeader = () => {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Our Story";
    header.appendChild(h1);
    return header;
};

// Create intro section
const createIntro = () => {
    const intro = document.createElement("div");
    intro.id = "intro";
    
    const h2 = document.createElement("h2");
    h2.textContent = "A Family Legacy of Good Food";
    
    const p = document.createElement("p");
    p.textContent = "Tradition • Passion • Community";
    
    intro.appendChild(h2);
    intro.appendChild(p);
    
    return intro;
};

// Create the story section
const createStorySection = () => {
    const section = document.createElement("section");
    section.className = "story";
    
    const h2 = document.createElement("h2");
    h2.textContent = "How It All Started";
    section.appendChild(h2);
    
    const paragraphs = [
        "Chez Mikhail was born from Chef Mikhail Petrov's lifelong passion for diverse culinary traditions. Growing up in a multicultural household with a Southern American mother and a Russian father, Mikhail was exposed to an eclectic mix of cooking styles and flavors from an early age.",
        
        "As a child, Mikhail would wake up early on weekends to help his mother prepare traditional Southern breakfast dishes while his father slow-cooked Russian and Eastern European specialties for dinner. During holidays, his grandmother would visit and teach him the art of baking traditional pastries and breads from old family recipes.",
        
        "After training at the Culinary Institute of America and working in prestigious restaurants across the country, Mikhail realized his dream was to create a place that combined all the cooking traditions he loved growing up. In 2020, despite the challenges of opening during a pandemic, Chez Mikhail opened its doors with a unique concept that brings together breakfast classics, slow-smoked BBQ, and artisanal baked goods."
    ];
    
    paragraphs.forEach(text => {
        const p = document.createElement("p");
        p.textContent = text;
        section.appendChild(p);
    });
    
    return section;
};

// Create the philosophy section
const createPhilosophySection = () => {
    const section = document.createElement("section");
    section.className = "philosophy";
    
    const h2 = document.createElement("h2");
    h2.textContent = "Our Philosophy";
    section.appendChild(h2);
    
    const paragraphs = [
        "At Chez Mikhail, we believe that food is more than sustenance—it's a way to bring people together and create lasting memories. Our philosophy is built on three core principles:",
        
        "First, we source ingredients locally whenever possible. We've built strong relationships with farmers and producers within a 100-mile radius, ensuring the freshest seasonal ingredients while supporting our local economy.",
        
        "Second, we honor traditional cooking methods. Our BBQ is smoked low and slow over hickory and oak. Our breads are leavened naturally with sourdough cultures we've maintained since opening. We believe that taking time with food results in flavors that can't be rushed.",
        
        "Third, we embrace innovation while respecting tradition. While our recipes have deep roots in various culinary heritages, Chef Mikhail isn't afraid to experiment and create unique fusion dishes that surprise and delight our guests."
    ];
    
    paragraphs.forEach(text => {
        const p = document.createElement("p");
        p.textContent = text;
        section.appendChild(p);
    });
    
    return section;
};

// Create the community section
const createCommunitySection = () => {
    const section = document.createElement("section");
    section.className = "community";
    
    const h2 = document.createElement("h2");
    h2.textContent = "Our Community";
    section.appendChild(h2);
    
    const paragraphs = [
        "We're proud to be an active part of our local community. Each month, we host a community dinner where proceeds go to different local charities and nonprofit organizations. Our kitchen also serves as a training ground for aspiring chefs through our internship program with the local community college.",
        
        "During the height of the pandemic, Chez Mikhail prepared and delivered meals to frontline healthcare workers and vulnerable community members. This spirit of service remains central to our identity today.",
        
        "We're grateful for the warm welcome we've received from our community and look forward to serving you for many years to come."
    ];
    
    paragraphs.forEach(text => {
        const p = document.createElement("p");
        p.textContent = text;
        section.appendChild(p);
    });
    
    return section;
};

// Main export function - returns all about page elements
export const aboutPage = () => {
    // Create a document fragment to hold all elements
    const fragment = document.createDocumentFragment();
    
    // Add all elements to the fragment
    fragment.appendChild(createHeader());
    fragment.appendChild(createIntro());
    fragment.appendChild(createStorySection());
    fragment.appendChild(createPhilosophySection());
    fragment.appendChild(createCommunitySection());
    
    // Return the fragment with all elements
    return fragment;
};