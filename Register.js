// Function to toggle password visibility
function toggleVisibility(inputId, button) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        button.textContent = "Hide";
    } else {
        input.type = "password";
        button.textContent = "Show";
    }
}

document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('regEmail').value;
    const phone = document.getElementById('phone').value;
    const user = document.getElementById('regUser').value;
    const pass = document.getElementById('regPass').value;
    const confirmPass = document.getElementById('confirmPass').value;

    // Validation check
    if (pass !== confirmPass) {
        alert("Passwords do not match!");
        return;
    }

    // Save data locally
    localStorage.setItem('userData', JSON.stringify({ username: user, password: pass }));
    
    alert('Account created! Redirecting to login...');
    window.location.href = 'login.html';
});