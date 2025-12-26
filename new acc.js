var firstName = document.getElementById("f-name");
var lastName = document.getElementById("l-name");
var birthDay = document.getElementById("S-1");
var birthMonth = document.getElementById("S-2");
var birthYear = document.getElementById("S-3")
var Address = document.getElementById("address")
var newPassword = document.getElementById("new password")

function sweetAlert2(message) {

    Swal.fire({
        icon: `error`,
        title: "Oops...",
        text: "Something went wrong!",
        footer: `<a href="#">${message}!</a>`
    });
}
function submitHandler(e) {
    console.log("F-Name", firstName.value)
    console.log("L-Name", lastName.value)
    console.log("DOB", birthDay.value)
    console.log("DOB", birthMonth.value)
    console.log("DOB", birthYear.value)
    console.log("address",Address.value)
    console.log("NEW-pass",newPassword.value)
e.preventDefault();
   if (firstName.value.trim() == "") {
        sweetAlert2("Please Enter a First Name")
        return

    }

    if (lastName.value.trim() == "") {
        sweetAlert2("Please Enter a Last Name")
        return
    }

          if (Address.value.trim() == "") {
        sweetAlert2("Please Enter a address")
        return
    }
          if (newPassword.value.trim() == "") {
        sweetAlert2("Please Enter a password")
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