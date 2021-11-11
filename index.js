  
        function validation(){
            var email = document.getElementById("email").value;
            var password  = document.getElementById("password").value;
            var phone = document.getElementById("phone").value;
            var repassword  = document.getElementById("re-password").value;
            var name = document.getElementById("name").value;
            var error = document.getElementById("error_message");
              
          
            if(name.length <= 5){
              error.innerHTML = "Please enter valid Name";
              return false ;
            }
            
            if( email.length < 6){
              error.innerHTML = "Please enter valid email";
              return false ;
            }
            
            if(isNaN(phone) || phone.length < 10){
              error.innerHTML = "Please enter valid phone number";
              return false ;
            }
            
            
        if(password.length < 10){
              error.innerHTML =  "Please enter Correct Password" ;
              return false ;
            }
            
            if(password != repassword){
              error.innerHTML =  "Password should be same type" ;
              return false ;
            }
            alert("Form submitted succeefully");
              return true ;
          }
          