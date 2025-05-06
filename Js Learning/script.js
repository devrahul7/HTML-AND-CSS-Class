document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    // Form inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // Form submission handler
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Process form submission
        console.log('Form submitted with data:', {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            subject: subjectInput.value,
            message: messageInput.value.trim()
        });
        
        // Show success message
        contactForm.reset();
        successMessage.style.display = 'block';
        
        // Hide success message after 5 seconds
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 5000);
    });
});