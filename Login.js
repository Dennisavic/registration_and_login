document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;``
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;

    // Retrieve saved data
    const savedData = JSON.parse(localStorage.getItem('userData'));

    if (savedData && savedData.username === user && savedData.password === pass) {
        alert('Login successful!');
    } else {
        alert('Invalid credentials. Please try again.');
    }
});