function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Invalid email address');
    } else if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*()_+]/.test(password)) {
      alert('Password must be at least 8 characters and contain at least one uppercase letter, one number, and one special character.');
    } else {
      alert('Successful');
    }
  }