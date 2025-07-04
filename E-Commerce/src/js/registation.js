const alluser = JSON.parse(localStorage.getItem("users")) || []
const getreg = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let confirmpass = document.getElementById("password").value;

    if (pass === confirmpass) {
        let obj = {
            id: Math.floor(Math.random() * 100),
            name: name,
            email: email,
            pass: pass,
            confirmpass: confirmpass
        }
        if (name == "" || email == "" || pass == "" || confirmpass == "") {
            alert("fill the details")
            return;
        }

        if (name.length >= 9) {
            alert("name should be less than 9 characters")
            return;
        } else
            if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                alert("enter valid email")
                return
            }
        if (!pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
            alert("enter valid password")
            return
        }

        let dupname = alluser.find((val) => val.name === name)
        let dupemail = alluser.find((val) => val.email === email)


        if (!dupname && !dupemail) {
            alluser.push(obj)
            localStorage.setItem("users", JSON.stringify(alluser))
            alert("registration successfully")
            window.location.href = "login.html"
        } else {
            alert("user already exist")
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("pass").value = "";
            document.getElementById("password").value = "";
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password doesn't match!",
          
        });
        document.getElementById("password").value = "";
        document.getElementById("pass").value = "";
    }
}

