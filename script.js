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
