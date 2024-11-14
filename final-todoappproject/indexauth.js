const firebaseConfig = {
    apiKey: "AIzaSyCdUC186UVNHWD4u-g1gP1KKxC22zJZyPw",
    authDomain: "todo-app-rehan-e603d.firebaseapp.com",
    databaseURL: "https://todo-app-rehan-e603d-default-rtdb.firebaseio.com",
    projectId: "todo-app-rehan-e603d",
    storageBucket: "todo-app-rehan-e603d.firebasestorage.app",
    messagingSenderId: "294570952812",
    appId: "1:294570952812:web:46e163665df3b029f6b049"
  };
  
  var app = firebase.initializeApp(firebaseConfig);
  
  var auth = firebase.auth();
  
  function signUp() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        window.location.href = './home.html'
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  
  function Login() {
    var email = document.getElementById("email1");
    var password = document.getElementById("password1");
  
    auth
      .signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        window.location.href = "./home.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }