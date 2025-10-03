// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Select all buttons with the class 'btn'
    const learnMoreButtons = document.querySelectorAll('.btn');

    // Add a click event listener to each button
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent the link from navigating
            event.preventDefault();
            alert('More event details coming soon!');
        });
    });

});