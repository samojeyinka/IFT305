document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let isValid = true;

    
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById("country").value;
    const terms = document.getElementById("terms").checked;

    
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(error => error.textContent = ""); 

    
    if (fullName.length < 5) {
        setError("fullName", "Full Name must be at least 5 characters long");
        isValid = false;
    }

  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        setError("email", "Invalid email format");
        isValid = false;
    }

    
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        setError("password", "Password must be at least 8 characters, include one uppercase, one lowercase, and one number");
        isValid = false;
    }

    
    if (password !== confirmPassword) {
        setError("confirmPassword", "Passwords do not match");
        isValid = false;
    }

    
    if (age < 18 || age > 100) {
        setError("age", "Age must be between 18 and 100");
        isValid = false;
    }

    
    if (!gender) {
        setError("gender", "Please select a gender");
        isValid = false;
    }

    
    if (!country) {
        setError("country", "Please select a country");
        isValid = false;
    }

    
    if (!terms) {
        setError("terms", "You must agree to the Terms & Conditions");
        isValid = false;
    }

    
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset();
    }
});


function setError(inputId, message) {
    const inputField = document.getElementById(inputId);
    const errorField = inputField.nextElementSibling;
    errorField.textContent = message;
}
