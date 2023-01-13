function handleLogin() {
    // Index.html eken mthent data tik gnnw
    
  }


  function k(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Methn thma login password ek)
    var correctUsername = 'admin@gmail.com';
    var correctPassword = 'password';

    // password hrid blnw
    if (username === correctUsername && password === correctPassword) {
      // Login was successful, 
     
      window.location.href='adashboard.html'
   
    } else {
      // Login was unsuccessful, 
      alert('Invalid username or password');
    }
  }