var emailPhone=document.getElementById("ph");
var password=document.getElementById("password");

function sweetAlert2(message) {

    Swal.fire({
        icon: `error`,
        title: "Oops...",
        text: "Something went wrong!",
        footer: `<a href="#">${message}!</a>`
    });
}



function submitHandler(e){
console.log("Email or ph:",emailPhone.value);
console.log("Password",password.value)    
e.preventDefault();
if(emailPhone.value.trim()==""){
sweetAlert2("Please Enter a Email")
return
}
if(password.value.trim()==""){
sweetAlert2("Please Enter a Password")
return
}
if(password.value.length<=7){
sweetAlert2("Please Enter at Least 8 character")
return
}
    Swal.fire({
        title: "Congratulations!",
        icon: "success",
        draggable: true
    });
    setTimeout(function () {
        window.location.href = "dashboard.html"
    }, 5000)


}