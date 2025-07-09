const cart = JSON.parse(localStorage.getItem("cart")) || []
const cartup = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    let cartcnt = cart.length
    let cartbadge = document.querySelector(".custom-cart")
    cartbadge.setAttribute("data-count", cartcnt)
}
cartup()