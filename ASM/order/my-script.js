function Validate1() {
	var username = document.getElementById("name");
	var msguser = document.getElementById("msg1");
	if (username.value.length == 0) {
		msguser.style.color = "red";
		msguser.innerHTML = "Tên không được để trống";
	}
	else if(username.value.length <= 5 && username.value.length > 0) {
		msguser.style.color = "blue";
		msguser.innerHTML = "Tên quá ngắn";
	}
	else if(username.value.length > 5){
		msguser.style.color = "green";
		msguser.innerHTML = "  ✔";
	}
}

function Validate2() {
	var city = document.getElementById("city");
	var msgcity = document.getElementById("msg2");
	if (city.value.length <= 5 && city.value.length > 0) {
		msgcity.style.color = "blue";
		msgcity.innerHTML = "Vui lòng viết đầy đủ tên thành phố";
	}
	else if(city.value.length == 0){
		msgcity.style.color = "red";
		msgcity.innerHTML = "Thành phố không được để trống";
	}
	else if(city.value.length > 5){
		msgcity.style.color = "green";
		msgcity.innerHTML = "  ✔";
	}
}
function Validate3() {
	var qh = document.getElementById("qh");
	var msgqh = document.getElementById("msg3");
	if (qh.value.length <= 5 && qh.value.length > 0) {
		msgqh.style.color = "blue";
		msgqh.innerHTML = "Vui lòng viết đầy đủ tên quận/huyện";
	}
	else if(city.value.length == 0){
		msgqh.style.color = "red";
		msgqh.innerHTML = "Quận/huyện không được để trống";
	}
	else if(city.value.length > 5){
		msgqh.style.color = "green";
		msgqh.innerHTML = "  ✔";
	}
}
function Validate4() {
	var info = document.getElementById("info");
	var msgif = document.getElementById("msg4");
	if (info.value.length <= 5 && info.value.length > 0) {
		msgif.style.color = "blue";
		msgif.innerHTML = "Vui lòng nhập địa chỉ đầy đủ";
	}
	else if(info.value.length == 0){
		msgif.style.color = "red";
		msgif.innerHTML = "Địa chỉ không được để trống";
	}
	else if(info.value.length > 5){
		msgif.style.color = "green";
		msgif.innerHTML = "  ✔";
	}
}
function Validate5() {
	var phone = document.getElementById("phone");
	var msgphone = document.getElementById("msg5");
	if (phone.value.length <= 10 && phone.value.length > 0) {
		msgphone.style.color = "blue";
		msgphone.innerHTML = "Số điện thoại không hợp lệ";
	}
	else if(phone.value.length == 0){
		msgphone.style.color = "red";
		msgphone.innerHTML = "Địa chỉ không được để trống";
	}
	else if(phone.value.length > 10){
		msgphone.style.color = "green";
		msgphone.innerHTML = "  ✔";
	}
}
function Validateall() {
	var username = document.getElementById("name");
	var city = document.getElementById("city");
	var qh = document.getElementById("qh");
	var info = document.getElementById("info");
	var phone = document.getElementById("phone");
	if(username.value < 5){
		alert("Tên không hợp lệ . Dữ liệu sẽ không được gửi đi");
		return false; 	
	}
	else if(city.value < 5){
		alert("Bạn vui lòng viết đầy đủ tên thành phố");
		return false; 	
	}
	else if(qh.value < 5){
		alert("Vui lòng viết đầy đủ tên Quận/huyện");
		return false; 	
	}
	else if(info.value < 5){
		alert("Thông tin không hợp lệ . Dữ liệu sẽ không được gửi đi");
		return false; 	
	}
	else if(phone.value <= 10){
		alert("Số điện thoại không phù hợp . Dữ liệu sẽ không được gửi đi");
		return false; 	
	}
}


