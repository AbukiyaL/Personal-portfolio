const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const nameValue = document.getElementById('name').value;
        
        alert(`Thank you, ${nameValue}! Your message has been delivered successfully.`);
        contactForm.reset();  
    });
}

const icons = document.querySelectorAll('.skills-icon');
const descText = document.getElementById('skills-desc');

const descriptions = {
    "HTML5": "I use HTML5 to create structured, semantic, and accessible web content.",
    "CSS3": "I design beautiful layouts using Flexbox, Grid, and custom CSS variables.",
    "JavaScript": "I build interactive and dynamic features and handle dynamic data using ES6+ JavaScript.",
    "React": "I develop modern, component-based applications with React for high performance."
};

icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        const name = icon.alt.replace(' Icon', '');
        descText.innerText = descriptions[name];
        icon.style.transform = "scale(1.1)";
        icon.style.transition = "0.2s";
    });

    icon.addEventListener('mouseleave', () => {
        descText.innerText = ""; 
        icon.style.transform = "scale(1)";
    });
});
