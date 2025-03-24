document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Form submitted successfully!');
        // Optionally, you can send the form data to a backend or display a confirmation.
    } else {
        alert('Please fill out all fields.');
    }
});
