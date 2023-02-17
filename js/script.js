function toggleListView(){   
    var listView = document.getElementById('productListView');
    var gridView = document.getElementById('productGridView');
    listView.style.display = "block";
    gridView.style.display = "none";
}
function toggleGridView(){   
    var listView = document.getElementById('productListView');
    var gridView = document.getElementById('productGridView');
    listView.style.display = "none";
    gridView.style.display = "block";
}
function myFunction(e) {
    var elems = document.querySelector(".active");
    if(elems !==null){
     elems.classList.remove("active");
    }
   e.target.classList.add("active");
  }
  function showRegister(){
    var registerForm = document.getElementById('registerForm');
    var loginForm = document.getElementById('loginForm');
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  }
  function showLogin(){
    var registerForm = document.getElementById('registerForm');
    var loginForm = document.getElementById('loginForm');
    var elems = document.querySelector(".dropdown-menu");
    registerForm.style.display = "none";
    loginForm.style.display = "block";
    elems.style.display = "none";
  }