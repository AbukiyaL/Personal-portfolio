const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const nameValue = document.getElementById('name').value;
        
        alert(`Thank you, ${nameValue}! Your message has been delivered successfully.`);
        contactForm.reset();  
    });
}
console.log("JavaScript is successfully loaded!");