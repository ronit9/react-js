const cart = JSON.parse(localStorage.getItem("cart")) || []
const cartup = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    let cartcnt = cart.length
    let cartbadge = document.querySelector(".custom-cart")
    cartbadge.setAttribute("data-count", cartcnt)
}
cartup()
const increaseQty = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.map((val) => {

        if (val.id === id) {
            let qty = parseInt(document.getElementById(`qty-${val.id}`).innerHTML)
            let cnt = qty + 1;
            document.getElementById(`qty-${val.id}`).innerHTML = cnt
            val.qty = cnt
            let total = val.qty * val.price
            val.finalTotal = total

        }
    })
    localStorage.setItem("cart", JSON.stringify(cart))
    showcartproduct()
}
const decreaseQty = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.map((val) => {

        if (val.id === id) {
            let qty = parseInt(document.getElementById(`qty-${val.id}`).innerHTML)
            // let btn = document.getElementById(`min-${val.qty}`)
            if (qty === 1) {
                document.getElementById(`min-${val.id}`).disabled = true; // Disable the minus button
            } else {
                let cnt = qty - 1;
                document.getElementById(`qty-${val.id}`).innerHTML = cnt
                val.qty = cnt
                let total = val.qty * val.price
                val.finalTotal = total
            } 
        }
    })
    localStorage.setItem("cart", JSON.stringify(cart))
    showcartproduct()
}

const deleteProduct = (id) => {
    let row = document.querySelector(".product-row")
    row.classList.add("delet-out")
    setTimeout(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        const deletid = cart.filter((val) => val.id !== id)
        localStorage.setItem("cart", JSON.stringify(deletid))
        document.querySelector(".delet-out")
        showcartproduct()
    }, 1000);
}

const alltotal = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    let sum = 0
    cart.map((val) => {
        sum += val.finalTotal

    })
    document.getElementById("total").innerHTML = `Final Total:- &nbsp₹` + sum 
}
alltotal()
const showcartproduct = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    card = ""
    cart.map((val) => {
        card += `
         <div class="product-row">
            <div class="product-info">
              <img src="${val.image}" alt="${val.title}" class="item-image" />
              <div class="item-info"><h4>${val.title}</h4></div>
            </div>
            <div class="text-center">
              <button class="qty-btn" id="min-${val.id}" onclick="decreaseQty(${val.id})">−</button>
              <span class="qty" id="qty-${val.id}">${val.qty}</span>
              <button class="qty-btn" onclick="increaseQty(${val.id})">+</button>
            </div>
            <div class="item-price">₹${val.price}</div>
            <div class="item-total" id="total-${val.id}">₹${val.finalTotal}</div>
            <div class="text-center d-flex justify-content-center">
              <button class="delete-button " onclick="deleteProduct(${val.id})"> <svg class="delete-svgIcon" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg></button>
            </div>
          </div>
        `


    })
    document.getElementById("list").innerHTML = card
}
showcartproduct()