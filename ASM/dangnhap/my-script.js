function Validate1() {
	var username = document.getElementById("user");
	var msguser = document.getElementById("msg1");
	if (username.value.length <= 7 && username.value.length > 0) {
		msguser.style.color = "red";
		msguser.innerHTML = "Tên đăng nhập quá ngắn";
	}
	else if(username.value.length == 0){
		msguser.style.color = "red";
		msguser.innerHTML = "Tên đăng nhập không được để trống";
	}
	else if(username.value.length > 7){
		msguser.style.color = "green";
		msguser.innerHTML = "  ✔";
	}
}

function Validate2() {
	var pass = document.getElementById("pass");
	var msgpass = document.getElementById("msg2");
	if (pass.value.length <= 7 && pass.value.length > 0) {
		msgpass.style.color = "red";
		msgpass.innerHTML = "Mật khẩu quá ngắn";
	}
	else if(pass.value.length == 0){
		msgpass.style.color = "red";
		msgpass.innerHTML = "Mật khẩu không được để trống";
	}
	else if(pass.value.length > 7){
		msgpass.style.color = "green";
		msgpass.innerHTML = "  ✔";
	}
}
function Validateall(pass,password) {
	var username = document.getElementById("user");
	var pass = document.getElementById("pass");
	if(username.value.length < 7){
		alert("Tên tài khoản quá ngắn . Dữ liệu sẽ không được gửi đi");
		return false; 	
	}
	else if(pass.value.length < 7){
		alert("Mật khẩu quá ngắn . Dữ liệu sẽ không được gửi đi");
		return false; 	
	}
}