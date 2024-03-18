// script.js

// Set up Stripe.js
const stripe = Stripe('your_publishable_key');
const elements = stripe.elements();

// Create an instance of the card Element.
const card = elements.create('card');

// Add an instance of the card Element into the `card-element` div.
card.mount('#card-element');

// Handle real-time validation errors from the card Element.
card.addEventListener('change', function(event) {
    const displayError = document.getElementById('card-errors');
    if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});

// Handle form submission.
const form = document.getElementById('payment-form');
form.addEventListener('submit', async function(event) {
    event.preventDefault();

    // Disable the submit button to prevent multiple submissions.
    document.getElementById('submit-button').disabled = true;

    const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: card,
    });

    if (error) {
        // Display error.message in your UI.
        const errorElement = document.getElementById('card-errors');
        errorElement.textContent = error.message;
    } else {
        // Send the paymentMethod.id to your server.
        fetch('/charge', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ payment_method_id: paymentMethod.id, amount: 1000 }), // Adjust amount as needed
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle successful payment
            alert(data.message);
        })
        .catch(error => {
            // Handle failed payment
            console.error('Error:', error);
            alert('Payment failed');
        });
    }
});
s