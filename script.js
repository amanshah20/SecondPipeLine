document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = form.elements['firstName'].value.trim();
        const lastName = form.elements['lastName'].value.trim();
        const email = form.elements['email'].value.trim();

        if (firstName === '' || lastName === '' || email === '') {
            message.textContent = 'Please fill out all fields.';
            message.style.color = 'red';
        } else {
            // Simulate form submission (replace with actual submission logic)
            setTimeout(function() {
                message.textContent = `Form submitted successfully: ${firstName} ${lastName}`;
                message.style.color = 'green';
                form.reset(); // Reset form fields
            }, 1000);
        }
    });
});

// Add JavaScript functionality here
console.log("Script loaded!");

// Example console output
console.log("This is a console log message.");

// You can add more console logs as needed
const timestampElement = document.getElementById('timestamp');
const date = new Date();
const timestamp = date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
timestampElement.textContent = timestamp.toUpperCase();
