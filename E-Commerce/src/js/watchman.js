let single = JSON.parse(localStorage.getItem("single")) || [];



if (single.length === 0) {
    window.location.href = "login.html"
}