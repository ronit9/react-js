const alluser = JSON.parse(localStorage.getItem("users")) || []
console.log(alluser);

const getdata = () => {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (email == "" || pass == "") {
        alert("fill the details")
        return;
    }

    let single = alluser.find((val) => val.email == email && val.pass == pass)
    localStorage.setItem("single", JSON.stringify(single))
    console.log(single);

    if (single) {
        Swal.fire({
            title: "Success!",
            text: "You have logged in successfully",
            icon: "success"
        });
        setTimeout(() => {
            window.location.href = "index.html"
        }, 2000);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter valid details!",

        });
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
    }

}