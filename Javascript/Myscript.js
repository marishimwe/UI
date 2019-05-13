function myFunction(){
	var userName=document.getElementById("username").value;
	var passWord=document.getElementById("password").value;
	if (userName == "user" && passWord == "user" ){
	alert("Login successfully");
	window.location ="Application_form.html";
	}
	else if (userName =="admin" && passWord == "admin"){
	alert("welcome admin");
	window.location ="Verification.html";
    }
	else{document.getElementById("demo").innerHTML = "Invalid username or password";

	}
}
