function Validate1() {
	var username = document.getElementById("user");
	var msguser = document.getElementById("msg1");
	if (username.value.length < 7) {
		msguser.style.color = "red";
		msguser.innerHTML = "Username phải có ít nhất 8 kí tự !";
	}
	else if(username.value.length > 7){
		msguser.style.color = "green";
		msguser.innerHTML = "  ✔";
	}
}
function Validate2() {
	var fullname = document.getElementById("name");
	var msgname = document.getElementById("msg2");
	if (fullname.value.length < 7) {
		msgname.style.color = "red";
		msgname.innerHTML = "Tên của bạn phải có ít nhất 8 kí tự !";
	}
	else if(fullname.value.length > 7){
		msgname.style.color = "green";
		msgname.innerHTML = "  ✔";
	}
}

function Validate3() {
	var email = document.getElementById("mail");
	var msgmail = document.getElementById("msg3");
	if (email.value.length < 7) {
		msgmail.style.color = "red";
		msgmail.innerHTML = "Email quá ngắn";
	}
	else if(email.value.length > 7){
		msgmail.style.color = "green";
		msgmail.innerHTML = "Ấn đăng kí để kiểm tra . Chú ý email nên có dạng @xxx.com";
	}
}

function Validate4() {
	var pass = document.getElementById("password");
	var msgpass = document.getElementById("msg4");
	if (pass.value.length < 7) {
		msgpass.style.color = "red";
		msgpass.innerHTML = "Mật khẩu quá ngắn";
	}
	else if(pass.value.length > 7){
		msgpass.style.color = "green";
		msgpass.innerHTML = "  ✔";
	}
}
function Validate5(pass,password) {
	var cfpass = document.getElementById("confirmPassword");
	var msgcfpass = document.getElementById("msg5");
	if (cfpass.value != pass.value) {
		msgcfpass.style.color = "red";
		msgcfpass.innerHTML = "Mật khẩu không khớp";
	}
	else if(cfpass.value == pass.value && cfpass.value.length > 7){
		msgcfpass.style.color = "green";
		msgcfpass.innerHTML = "  ✔";
	}
}
function Validate6() {
	var avatar = document.getElementById("avatar");
	var msgavt = document.getElementById("msg6");
	if (avatar.value.length == 0 ) {
		msgavt.style.color = "green";
		msgavt.innerHTML = "Bạn nên thêm cho mình một ảnh đại diện để mọi người có thể nhận ra bạn";
	}
	else if(avatar.value.length > 0){
		msgavt.style.color = "green";
		msgavt.innerHTML = "Đã cập nhật ảnh đại diện cho bạn . Hiển thị tốt hơn nếu đúng liên kết ảnh";
	}
}
function Validateall(pass,password) {
	var username = document.getElementById("user");
	var fullname = document.getElementById("name");
	var email = document.getElementById("mail");
	var pass = document.getElementById("password");
	var cfpass = document.getElementById("confirmPassword");
	if(username.value.length < 7){
		alert("Tên người dùng quá ngắn . Dữ liệu sẽ không được gửi đi");
		return false; 	
	}
	else if(fullname.value.length < 7){
		alert("Tên quá ngắn . Dữ liệu sẽ không được gửi đi");
		return false; 	
	}
	else if(email.value.length < 7){
		alert("Email quá ngắn . Dữ liệu sẽ không được gửi đi");
		return false; 	
	}
	else if(pass.value.length < 7){
		alert("Mật khẩu quá ngắn . Dữ liệu sẽ không được gửi đi");
		return false; 	
	}
	else if(cfpass.value != pass.value){
		alert("Mật khẩu không khớp . Dữ liệu sẽ không được gửi đi");
		return false; 	
	}
}