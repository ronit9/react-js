// cart sectiojn 
const addToCart = async (id, event) => {
    event.preventDefault();
    const single = allProducts.find((val) => val.id === id)

    try {

        const cart = await fetch(`http://localhost:3000/cart/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...single })
        })
        const data = await cart.json()
        console.log(data);

    } catch (err) {
        console.log(err)
    }
}

const cart = []
const increaseQty = async (id, event) => {
    console.log(id);

    event.preventDefault()
    let qty = document.querySelector(`.qty-${id}`).textContent;
    qty++
    document.querySelector(`.qty-${id}`).textContent = qty;
   
    try {

        const cart = await fetch(`http://localhost:3000/cart/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...single })
        })
        const data = await cart.json()
        console.log(data);

    } catch (err) {
        console.log(err)
    }
}

const showcartproduct = async () => {
    try {
        const data = await fetch("http://localhost:3000/cart/")
        const res = await data.json()
        cart.push(...res)

    } catch (err) {
        console.log(err)
    }
    card = ""
    cart.map((val) => {
        card += `
        <div class="product-info">
            <img
              src="${val.thumbnail}"
              alt="Product Image"
              class="item-image"
            />
            <div class="item-info">
              <h4>${val.title}</h4>
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center gap-2">
            <button class="qty-btn" type="button" onclick="decreaseQty(${val.id},event)">−</button>
            <span class="qty-${val.id}">${val.qty || 1}</span>
            <button class="qty-btn" type="button" onclick="increaseQty(${val.id},event)">+</button>
          </div>
          <div class="item-price text-center">₹${val.price}</div>
          <div class="item-total${val.id} text-end">₹</div>
        `
    })
    document.getElementById("list").innerHTML = card
}
showcartproduct()