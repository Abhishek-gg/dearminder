// Toggle Login & Registration
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Razorpay Subscription Integration
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".subscribe-btn");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const plan = this.getAttribute("data-plan");
            initiatePayment(plan);
        });
    });

    function initiatePayment(plan) {
        const razorpayKey = "YOUR_RAZORPAY_KEY_ID"; // Replace with actual Razorpay Key

        const options = {
            key: razorpayKey,
            amount: plan === "basic" ? 49900 : plan === "premium" ? 99900 : 199900, // Amount in paise
            currency: "INR",
            name: "DearMinder",
            description: `${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan Subscription`,
            handler: function (response) {
                alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            },
            theme: {
                color: "#007bff"
            }
        };

        const rzp = new Razorpay(options);
        rzp.open();
    }
});
