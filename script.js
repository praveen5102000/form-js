function validateForm(event) {
    event.preventDefault(); 
  
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
   
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      alert('All fields must be filled out');
      return false;
    }
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address');
      return false;
    }
  
  
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return false;
    }
  
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return false;
    }
  
    alert('Registration successful!');
  }
  