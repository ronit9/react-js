const product = [
    {
        id: 1,
        title: "Essence Mascara Lash Princess",
        image: "src/img/eye-liner.jpeg",
        details: "This mascara delivers dramatic volume and sculpted lashes without clumps. Ideal for all-day wear with a smudge-proof formula.",
        price: 256,
        reviews: [
            { rating: 2, comment: "Very unhappy…", date: "2025-01-05", reviewerName: "Alice" },
            { rating: 2, comment: "Not as described!", date: "2025-02-10", reviewerName: "Bob" },
            { rating: 5, comment: "Very satisfied!", date: "2025-03-15", reviewerName: "Charlie" }
        ],
        qty: 1,
        finalTotal: 9.99,
        category: "beauty",
        gender: "unisex"
    },
    {
        id: 2,
        title: "Maybelline Fit Me Foundation",
        image: "src/img/fit-face.jpeg",
        details: "A lightweight foundation with matte finish that fits skin tone and texture. Ideal for normal to oily skin and provides buildable coverage.",
        price: 126,
        reviews: [
            { rating: 3, comment: "Okay product", date: "2025-01-10", reviewerName: "Diana" },
            { rating: 4, comment: "Looks great!", date: "2025-03-01", reviewerName: "Emma" },
            { rating: 2, comment: "Too oily", date: "2025-03-15", reviewerName: "Riya" }
        ],
        qty: 1,
        finalTotal: 26.90,
        category: "beauty",
        gender: "female"
    },
    {
        id: 3,
        title: "Nivea Men Deodorant",
        image: "https://m.media-amazon.com/images/I/51QTmyFj5wL.jpg",
        details: "Long-lasting deodorant specially designed for men. Provides 48-hour protection with a refreshing masculine scent.",
        price: 865,
        reviews: [
            { rating: 4, comment: "Smells good", date: "2025-01-03", reviewerName: "John" },
            { rating: 3, comment: "Average lasting", date: "2025-02-07", reviewerName: "Sam" },
            { rating: 5, comment: "Perfect!", date: "2025-04-01", reviewerName: "Mike" }
        ],
        qty: 1,
        finalTotal: 16.47,
        category: "personal care",
        gender: "male"
    },
    {
        id: 4,
        title: "Lakme Eyeconic Kajal",
        image: "https://www.lakmeindia.com/cdn/shop/files/24272_S2-8901030979545_1000x.jpg?v=1710236400",
        details: "Smudge-proof and waterproof kajal that lasts up to 22 hours. Enriched with minerals and perfect for daily use.",
        price: 195,
        reviews: [
            { rating: 5, comment: "Smooth application", date: "2025-02-01", reviewerName: "Sara" },
            { rating: 4, comment: "Dark and long-lasting", date: "2025-03-04", reviewerName: "Pooja" },
            { rating: 4, comment: "Good deal", date: "2025-04-02", reviewerName: "Meera" }
        ],
        qty: 1,
        finalTotal: 4.99,
        category: "beauty",
        gender: "female"
    },
    {
        id: 5,
        title: "Garnier Face Wash",
        image: "https://images.apollo247.in/pub/media/catalog/product/g/a/gar0460_2_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
        details: "Enriched with natural ingredients, this face wash deeply cleanses skin, removes excess oil, and keeps it refreshed all day.",
        price: 299,
        reviews: [
            { rating: 4, comment: "Refreshing", date: "2025-01-20", reviewerName: "Tina" },
            { rating: 5, comment: "Works well", date: "2025-02-22", reviewerName: "Jiya" },
            { rating: 3, comment: "Not bad", date: "2025-03-18", reviewerName: "Nisha" }
        ],
        qty: 1,
        finalTotal: 12.50,
        category: "personal care",
        gender: "unisex"
    },
    {
        id: 6,
        title: "L'Oréal Hair Serum",
        image: "https://m.media-amazon.com/images/I/61GGg1vs3DL.jpg",
        details: "A nourishing hair serum that tames frizz, adds shine, and protects from heat damage. Suitable for all hair types.",
        price: 14.80,
        reviews: [
            { rating: 5, comment: "Makes hair soft", date: "2025-01-07", reviewerName: "Nina" },
            { rating: 4, comment: "No frizz!", date: "2025-02-25", reviewerName: "Lea" },
            { rating: 4, comment: "Great smell", date: "2025-03-30", reviewerName: "Roma" }
        ],
        qty: 1,
        finalTotal: 14.80,
        category: "hair care",
        gender: "female"
    },
    {
        id: 7,
        title: "Beardo Beard Oil",
        image: "src/img/beardo-oil.jpeg",
        details: "Specially formulated to promote beard growth, moisturize skin beneath, and leave a healthy, soft beard with a great fragrance.",
        price: 600,
        reviews: [
            { rating: 3, comment: "Nice packaging", date: "2025-01-15", reviewerName: "Amit" },
            { rating: 5, comment: "Helps grow beard", date: "2025-03-05", reviewerName: "Rohan" },
            { rating: 4, comment: "Effective", date: "2025-04-08", reviewerName: "Jay" }
        ],
        qty: 1,
        finalTotal: 23.98,
        category: "grooming",
        gender: "male"
    },
    {
        id: 8,
        title: "Mamaearth Ubtan Face Mask",
        image: "https://images.mamaearth.in/catalog/product/u/b/ubtan-face-mask_2.jpg?format=auto&height=600&width=600",
        details: "Infused with turmeric and saffron, this face mask brightens the skin, removes tan, and provides a natural glow.",
        price: 499,
        reviews: [
            { rating: 5, comment: "Brightens skin", date: "2025-02-05", reviewerName: "Riya" },
            { rating: 4, comment: "Natural feel", date: "2025-02-28", reviewerName: "Isha" },
            { rating: 4, comment: "No irritation", date: "2025-03-12", reviewerName: "Sneha" }
        ],
        qty: 1,
        finalTotal: 15.00,
        category: "skincare",
        gender: "female"
    },
    {
        id: 9,
        title: "Vaseline Lip Therapy",
        image: "https://m.media-amazon.com/images/I/61-W5hutqjL.jpg",
        details: "Advanced formula that instantly softens dry lips and provides long-lasting moisturization with a light, non-greasy texture.",
        price: 325,
        reviews: [
            { rating: 5, comment: "Heals lips fast", date: "2025-01-29", reviewerName: "Mira" },
            { rating: 4, comment: "Soft lips", date: "2025-02-14", reviewerName: "Kavya" },
            { rating: 3, comment: "Bit sticky", date: "2025-03-19", reviewerName: "Sonam" }
        ],
        qty: 1,
        finalTotal: 11.97,
        category: "personal care",
        gender: "unisex"
    },
    {
        id: 10,
        title: "Dove Shampoo",
        image: "https://www.dove-india.com/cdn/shop/files/034copy_949b0e48-3d93-4570-ae4d-7e7ae944986b_3000x.jpg?v=1724141529",
        details: "Gentle shampoo enriched with Nutritive Serum that deeply nourishes hair, reduces hair fall, and makes it silky smooth.",
        price: 155,
        reviews: [
            { rating: 4, comment: "Silky hair", date: "2025-02-12", reviewerName: "Komal" },
            { rating: 5, comment: "No hair fall", date: "2025-03-09", reviewerName: "Pari" },
            { rating: 5, comment: "Best shampoo", date: "2025-04-04", reviewerName: "Neha" }
        ],
        qty: 1,
        finalTotal: 8.75,
        category: "hair care",
        gender: "female"
    },

    {
        id: 11,
        title: "Samsung Galaxy M14 5G",
        image: "https://ampro.in/wp-content/uploads/2023/09/Samsung-Galaxy-M14-5G-2.jpg",
        details: "Powerful 5G smartphone with 64MP triple camera, 6000mAh battery, and Exynos processor for smooth multitasking.",
        price: 14999,
        reviews: [
            { rating: 4, comment: "Great phone at this price", date: "2025-01-02", reviewerName: "Ravi" },
            { rating: 5, comment: "Battery is amazing", date: "2025-01-11", reviewerName: "Ankit" },
            { rating: 3, comment: "Average screen", date: "2025-01-25", reviewerName: "Ramesh" }
        ],
        qty: 1,
        finalTotal: 14999,
        category: "electronics",
        gender: "unisex"
    },
    {
        id: 12,
        title: "HP Wireless Mouse",
        image: "https://m.media-amazon.com/images/I/610sdKuJQmL._UF350,350_QL80_.jpg",
        details: "Ergonomic wireless mouse with 2.4GHz connection, optical sensor, and long battery life for smooth control.",
        price: 799,
        reviews: [
            { rating: 4, comment: "Smooth operation", date: "2025-02-10", reviewerName: "Yash" },
            { rating: 3, comment: "Feels light", date: "2025-02-20", reviewerName: "Manav" },
            { rating: 5, comment: "Works great", date: "2025-02-28", reviewerName: "Kishor" }
        ],
        qty: 1,
        finalTotal: 799,
        category: "technology",
        gender: "unisex"
    },
    {
        id: 13,
        title: "Nike Sports Shoes",
        image: "SRC/img/nike-shoose.jpeg",
        details: "Durable and breathable running shoes with cushioned sole, ideal for sports and everyday wear.",
        price: 2999,
        reviews: [
            { rating: 5, comment: "Very comfortable", date: "2025-03-01", reviewerName: "Aman" },
            { rating: 4, comment: "Looks stylish", date: "2025-03-10", reviewerName: "Raj" },
            { rating: 3, comment: "Sole could be better", date: "2025-03-12", reviewerName: "Kunal" }
        ],
        qty: 1,
        finalTotal: 2999,
        category: "clothing",
        gender: "male"
    },
    {
        id: 14,
        title: "Boat Rockerz 255 Pro+",
        image: "src/img/earband.jpeg",
        details: "Bluetooth wireless neckband with deep bass, fast charging, and 40-hour battery life.",
        price: 1299,
        reviews: [
            { rating: 5, comment: "Sound quality is awesome", date: "2025-01-19", reviewerName: "Deep" },
            { rating: 4, comment: "Battery life good", date: "2025-01-22", reviewerName: "Hiten" },
            { rating: 4, comment: "Nice fit", date: "2025-01-24", reviewerName: "Bhavik" }
        ],
        qty: 2,
        finalTotal: 2598,
        category: "electronics",
        gender: "unisex"
    },
    {
        id: 15,
        title: "Wooden Coffee Table",
        image: "https://furnitureboutiq.in/cdn/shop/files/6_57e4c078-fbdc-4430-9dd1-8733463ef6f6.jpg?v=1726667818",
        details: "Elegant coffee table made from Sheesham wood, featuring a modern design suitable for all living spaces.",
        price: 4599,
        reviews: [
            { rating: 4, comment: "Very sturdy", date: "2025-01-05", reviewerName: "Karan" },
            { rating: 5, comment: "Looks premium", date: "2025-01-18", reviewerName: "Aayush" },
            { rating: 4, comment: "Perfect size", date: "2025-01-30", reviewerName: "Arjun" }
        ],
        qty: 1,
        finalTotal: 4599,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 16,
        title: "Cotton Printed Kurti",
        image: "https://assets2.andaazfashion.com/media/catalog/product/s/k/sky-blue-cotton-printed-kurti-lkv00732-1.jpg",
        details: "Comfort-fit kurti made with breathable cotton fabric, 3/4 sleeves, and attractive prints for daily and casual wear.",
        price: 799,
        reviews: [
            { rating: 4, comment: "Soft fabric", date: "2025-03-11", reviewerName: "Pooja" },
            { rating: 5, comment: "Exactly as shown", date: "2025-03-15", reviewerName: "Isha" },
            { rating: 3, comment: "Sleeves slightly tight", date: "2025-03-16", reviewerName: "Sonal" }
        ],
        qty: 2,
        finalTotal: 1598,
        category: "clothing",
        gender: "female"
    },
    {
        id: 17,
        title: "Mi Smart Band 6",
        image: "https://i.ytimg.com/vi/-huOKnrr3TQ/maxresdefault.jpg",
        details: "AMOLED fitness band with SpO2 tracking, 30+ workout modes, sleep monitoring, and water resistance.",
        price: 2999,
        reviews: [
            { rating: 5, comment: "Steps are accurate", date: "2025-01-01", reviewerName: "Jeet" },
            { rating: 4, comment: "Display is clear", date: "2025-01-12", reviewerName: "Sagar" },
            { rating: 5, comment: "Feature packed", date: "2025-01-20", reviewerName: "Kishan" }
        ],
        qty: 1,
        finalTotal: 2999,
        category: "technology",
        gender: "unisex"
    },
    {
        id: 18,
        title: "Canon PIXMA Inkjet Printer",
        image: "https://in.canon/media/image/2024/08/21/4401e6b94fc245ffa14a95dcdfb9b73f_G3X70_~2.jpg",
        details: "All-in-one wireless color printer with scanning and copying functions. Ideal for home and small office use.",
        price: 5899,
        reviews: [
            { rating: 5, comment: "Best for home use", date: "2025-02-09", reviewerName: "Rohit" },
            { rating: 4, comment: "Ink lasts long", date: "2025-02-18", reviewerName: "Dev" },
            { rating: 3, comment: "Not fast", date: "2025-02-27", reviewerName: "Viral" }
        ],
        qty: 1,
        finalTotal: 5899,
        category: "technology",
        gender: "unisex"
    },
    {
        id: 19,
        title: "Sony Bravia 43\" 4K TV",
        image: "https://mahajanelectronics.com/cdn/shop/files/5_f2388862-5b2e-4fee-833b-6c9db2f527d5_1024x.png?v=1749005837",
        details: "43-inch Android smart TV with 4K Ultra HD resolution, HDR, X-Reality Pro, and Dolby Audio support.",
        price: 38999,
        reviews: [
            { rating: 5, comment: "Crisp display", date: "2025-01-14", reviewerName: "Ansh" },
            { rating: 4, comment: "Audio is rich", date: "2025-01-23", reviewerName: "Manan" },
            { rating: 5, comment: "Excellent features", date: "2025-02-01", reviewerName: "Rahul" }
        ],
        qty: 1,
        finalTotal: 38999,
        category: "electronics",
        gender: "unisex"
    },
    {
        id: 20,
        title: "IKEA Office Chair",
        image: "https://www.ikea.com/in/en/images/products/millberget-swivel-chair-murum-golden-brown__1020150_pe831801_s5.jpg?f=xxs",
        details: "Swivel office chair with ergonomic support, adjustable height, padded seat, and smooth rolling wheels for long working hours.",
        price: 3499,
        reviews: [
            { rating: 4, comment: "Comfortable for long hours", date: "2025-03-01", reviewerName: "Nikhil" },
            { rating: 5, comment: "Good build quality", date: "2025-03-04", reviewerName: "Ritesh" },
            { rating: 4, comment: "Assembly easy", date: "2025-03-10", reviewerName: "Tanmay" }
        ],
        qty: 1,
        finalTotal: 3499,
        category: "furniture",
        gender: "unisex"
    },

    {
        id: 21,
        title: "Asus VivoBook 15",
        image: "src/img/asus-laptop.jpeg",
        details: "Sleek 15.6-inch laptop with Ryzen 5 processor, 8GB RAM, and 512GB SSD. Ideal for students and professionals.",
        price: 45990,
        reviews: [
            { rating: 5, comment: "Super fast", date: "2025-03-01", reviewerName: "Mihir" },
            { rating: 4, comment: "Battery is decent", date: "2025-03-08", reviewerName: "Siddharth" },
            { rating: 5, comment: "Great for students", date: "2025-03-10", reviewerName: "Aayush" }
        ],
        qty: 1,
        finalTotal: 45990,
        category: "technology",
        gender: "unisex"
    },
    {
        id: 22,
        title: "OnePlus Nord CE 3 Lite",
        image: "https://images-cdn.ubuy.co.in/651e30a6ca16a82da33cb474-oneplus-nord-ce-3-lite-5g-dual-sim-256gb.jpg",
        details: "Feature-rich smartphone with 108MP camera, Snapdragon 695, 67W SUPERVOOC charging, and vibrant display.",
        price: 19999,
        reviews: [
            { rating: 4, comment: "Amazing value", date: "2025-01-09", reviewerName: "Darshan" },
            { rating: 5, comment: "Camera quality is top", date: "2025-01-12", reviewerName: "Nirav" },
            { rating: 3, comment: "Could be better in low light", date: "2025-01-18", reviewerName: "Bhavesh" }
        ],
        qty: 1,
        finalTotal: 19999,
        category: "electronics",
        gender: "unisex",
         qty: 1,
        finalTotal: 256,
        category: "cosmetics"
    },
    {
        id: 23,
        title: "JBL Flip 5 Speaker",
        image: "src/img/jbl.jpeg",
        details: "Portable waterproof Bluetooth speaker with powerful bass and up to 12 hours of playtime.",
        price: 8499,
        reviews: [
            { rating: 5, comment: "Great sound", date: "2025-02-11", reviewerName: "Sameer" },
            { rating: 4, comment: "Battery lasts long", date: "2025-02-14", reviewerName: "Viral" },
            { rating: 4, comment: "Very handy", date: "2025-02-20", reviewerName: "Alok" }
        ],
        qty: 1,
        finalTotal: 8499,
        category: "electronics",
        gender: "unisex"
    },
    {
        id: 24,
        title: "RayBan Aviator Sunglasses",
        image: "src/img/rayben.jpeg",
        details: "Classic metal-frame aviator sunglasses with UV protection, stylish and comfortable for everyday use.",
        price: 6290,
        reviews: [
            { rating: 5, comment: "Stylish and comfy", date: "2025-03-04", reviewerName: "Jatin" },
            { rating: 5, comment: "Authentic quality", date: "2025-03-05", reviewerName: "Parth" },
            { rating: 4, comment: "Packaging was nice", date: "2025-03-06", reviewerName: "Manish" }
        ],
        qty: 2,
        finalTotal: 12580,
        category: "accessories",
        gender: "male"
    },
    {
        id: 25,
        title: "Levi's Denim Jacket",
        image: "https://u-mercari-images.mercdn.net/photos/m32032284014_1.jpg",
        details: "Classic blue faded denim jacket with regular fit, perfect for layering and casual fashion.",
        price: 3499,
        reviews: [
            { rating: 5, comment: "Perfect fit", date: "2025-01-21", reviewerName: "Aditya" },
            { rating: 4, comment: "Great style", date: "2025-01-22", reviewerName: "Mohit" },
            { rating: 3, comment: "Material is good", date: "2025-01-24", reviewerName: "Ravindra" }
        ],
        qty: 1,
        finalTotal: 3499,
        category: "clothing",
        gender: "male"
    },
    {
        id: 26,
        title: "Samsung Galaxy Watch 4",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzuiClT2eH82zjhCVNO2wA7TAlon0h98MOQ&s",
        details: "1.4-inch AMOLED display smartwatch with health tracking, ECG monitoring, and sleek premium design.",
        price: 15999,
        reviews: [
            { rating: 5, comment: "Accurate fitness data", date: "2025-02-04", reviewerName: "Jayesh" },
            { rating: 5, comment: "Display is excellent", date: "2025-02-10", reviewerName: "Sanket" },
            { rating: 4, comment: "Looks premium", date: "2025-02-12", reviewerName: "Pratik" }
        ],
        qty: 1,
        finalTotal: 15999,
        category: "technology",
        gender: "unisex"
    },
    {
        id: 27,
        title: "Prestige Induction Cooktop",
        image: "https://m.media-amazon.com/images/I/81z6RfbuUcL.jpg",
        details: "2000W powerful induction cooktop with push button controls, energy-efficient and easy to clean.",
        price: 2599,
        reviews: [
            { rating: 4, comment: "Very helpful for bachelors", date: "2025-03-15", reviewerName: "Kirit" },
            { rating: 3, comment: "Sometimes heats too fast", date: "2025-03-17", reviewerName: "Girish" },
            { rating: 5, comment: "Saves gas!", date: "2025-03-20", reviewerName: "Ramesh" }
        ],
        qty: 1,
        finalTotal: 2599,
        category: "home",
        gender: "unisex"
    },
    {
        id: 28,
        title: "Philips Beard Trimmer",
        image: "https://m.media-amazon.com/images/I/71fh+miD0ML._UF1000,1000_QL80_.jpg",
        details: "Cordless trimmer with 90 minutes runtime, self-sharpening blades, and easy length settings.",
        price: 1299,
        reviews: [
            { rating: 5, comment: "Very smooth cutting", date: "2025-01-16", reviewerName: "Yuvraj" },
            { rating: 4, comment: "Battery life is good", date: "2025-01-19", reviewerName: "Lalit" },
            { rating: 5, comment: "Lightweight", date: "2025-01-21", reviewerName: "Tushar" }
        ],
        qty: 1,
        finalTotal: 1299,
        category: "personal care",
        gender: "male"
    },
    {
        id: 29,
        title: "LG Double Door Fridge 260L",
        image: "https://doiqgxrhp4iii.cloudfront.net/GLS292RSQY1.jpg",
        details: "260L smart inverter refrigerator with auto defrost and energy-efficient cooling for modern homes.",
        price: 25990,
        reviews: [
            { rating: 5, comment: "Spacious and silent", date: "2025-01-07", reviewerName: "Navin" },
            { rating: 5, comment: "Energy efficient", date: "2025-01-09", reviewerName: "Suraj" },
            { rating: 4, comment: "Great cooling", date: "2025-01-13", reviewerName: "Mukesh" }
        ],
        qty: 1,
        finalTotal: 25990,
        category: "electronics",
        gender: "unisex"
    },
    {
        id: 30,
        title: "Zebronics Gaming Keyboard",
        image: "https://zebronics.com/cdn/shop/files/Zeb-Optimus-black-pic1.jpg?v=1707825036",
        details: "RGB backlit gaming keyboard with mechanical feel keys and durable build for gaming performance.",
        price: 1499,
        reviews: [
            { rating: 5, comment: "Best for gaming", date: "2025-02-02", reviewerName: "Devansh" },
            { rating: 4, comment: "Keys are tactile", date: "2025-02-06", reviewerName: "Ashish" },
            { rating: 3, comment: "Wire is short", date: "2025-02-08", reviewerName: "Rajat" }
        ],
        qty: 2,
        finalTotal: 2998,
        category: "technology",
        gender: "unisex"
    },

    {
        id: 31,
        title: "TCL 32\" Smart LED TV",
        image: "https://aws-obg-image-lb-4.tcl.com/content/dam/brandsite/product/tv/p/p30/pc/product/S6500-front-India.png?t=1617106023076&w=800&webp=true&dpr=2.625&rendition=1068",
        details: "32-inch HD Ready Android Smart TV with built-in apps, ideal for compact living spaces.",
        price: 13499,
        reviews: [
            { rating: 5, comment: "Great clarity", date: "2025-03-05", reviewerName: "Sanket" },
            { rating: 4, comment: "Good for small room", date: "2025-03-08", reviewerName: "Pranav" },
            { rating: 4, comment: "Value for money", date: "2025-03-12", reviewerName: "Tanya" }
        ],
        qty: 1,
        finalTotal: 13499,
        category: "electronics",
        gender: "unisex"
    },
    {
        id: 32,
        title: "Puma Sports Cap",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlOHvQ2NYpcBW_k9V3etA0yowsWW6F7NCrw&s",
        details: "Cotton adjustable unisex cap, designed for sports and casual wear with comfortable fit.",
        price: 599,
        reviews: [
            { rating: 4, comment: "Comfortable fit", date: "2025-03-03", reviewerName: "Yash" },
            { rating: 3, comment: "Color fades slightly", date: "2025-03-06", reviewerName: "Kishan" },
            { rating: 5, comment: "Perfect for running", date: "2025-03-10", reviewerName: "Mira" }
        ],
        qty: 1,
        finalTotal: 599,
        category: "accessories",
        gender: "unisex"
    },
    {
        id: 33,
        title: "IKEA Study Desk",
        image: "https://www.ikea.com/in/en/images/products/berglaerka-desk-turquoise-white-tiltable__1122199_pe874544_s5.jpg?f=s",
        details: "Modern wooden study desk with shelves and drawer; stylish and functional for study or work.",
        price: 4599,
        reviews: [
            { rating: 5, comment: "Easy to assemble", date: "2025-03-04", reviewerName: "Aayush" },
            { rating: 4, comment: "Sturdy build", date: "2025-03-09", reviewerName: "Pooja" },
            { rating: 4, comment: "Looks great", date: "2025-03-11", reviewerName: "Deep" }
        ],
        qty: 1,
        finalTotal: 4599,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 34,
        title: "Syska Smart LED Strip",
        image: "https://rukminim2.flixcart.com/image/850/1000/k7m8brk0/smart-lighting/v/j/v/822502-led-syska-original-imafptbm5yjyytrr.jpeg?q=90&crop=false",
        details: "Wi-Fi controlled RGB LED strip compatible with Alexa, great for mood lighting and décor.",
        price: 1199,
        reviews: [
            { rating: 4, comment: "Bright and colorful", date: "2025-03-07", reviewerName: "Mehul" },
            { rating: 3, comment: "App is slow", date: "2025-03-13", reviewerName: "Anvi" },
            { rating: 5, comment: "Decorative and useful", date: "2025-03-14", reviewerName: "Rahul" }
        ],
        qty: 2,
        finalTotal: 2398,
        category: "technology",
        gender: "unisex"
    },
    {
        id: 35,
        title: "Realme C55 Smartphone",
        image: "https://www.bestomart.com/cdn/shop/products/1000127375-1_large.jpg?v=1702098898",
        details: "Smartphone with 8GB RAM, 64MP rear camera, and 33W SuperVOOC fast charging, perfect for daily use.",
        price: 10999,
        reviews: [
            { rating: 5, comment: "Best budget phone", date: "2025-03-06", reviewerName: "Karan" },
            { rating: 4, comment: "Great camera", date: "2025-03-07", reviewerName: "Naina" },
            { rating: 4, comment: "Smooth performance", date: "2025-03-08", reviewerName: "Sahil" }
        ],
        qty: 1,
        finalTotal: 10999,
        category: "electronics",
        gender: "unisex"
    },
    {
        id: 36,
        title: "Adidas Track Pants",
        image: "https://theurbanpulse.in/cdn/shop/files/TUP_Website_Images_with_White.png?v=1723087339",
        details: "Men's slim-fit track pants made from breathable polyester fabric with zippered pockets for utility.",
        price: 2499,
        reviews: [
            { rating: 5, comment: "Very comfy", date: "2025-03-09", reviewerName: "Ravi" },
            { rating: 4, comment: "Good stretch", date: "2025-03-11", reviewerName: "Preeti" },
            { rating: 3, comment: "Bit tight at waist", date: "2025-03-12", reviewerName: "Amit" }
        ],
        qty: 1,
        finalTotal: 2499,
        category: "clothing",
        gender: "male"
    },
    {
        id: 37,
        title: "Philips Air Fryer",
        image: "https://m.media-amazon.com/images/I/71ZJSl4lN2L.jpg",
        details: "1400W Air Fryer with Rapid Air Technology and 4.1L capacity for healthy oil-free cooking.",
        price: 8499,
        reviews: [
            { rating: 5, comment: "Healthy cooking", date: "2025-03-03", reviewerName: "Neha" },
            { rating: 4, comment: "Crispy fries!", date: "2025-03-06", reviewerName: "Nidhi" },
            { rating: 4, comment: "Consumes less oil", date: "2025-03-08", reviewerName: "Anjali" }
        ],
        qty: 1,
        finalTotal: 8499,
        category: "home",
        gender: "unisex"
    },
    {
        id: 38,
        title: "Noise ColorFit Pro 3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_H0LFb-WRuWu88FwLX4JnMixnuvIm4IMObg&s",
        details: "Smartwatch with 1.5-inch touchscreen, heart rate & sleep monitoring, stylish and fitness-friendly.",
        price: 3499,
        reviews: [
            { rating: 4, comment: "Nice UI", date: "2025-03-01", reviewerName: "Akhil" },
            { rating: 5, comment: "Feature-packed", date: "2025-03-05", reviewerName: "Sneha" },
            { rating: 3, comment: "Battery drains fast", date: "2025-03-07", reviewerName: "Harsh" }
        ],
        qty: 1,
        finalTotal: 3499,
        category: "technology",
        gender: "unisex"
    },
    {
        id: 39,
        title: "Apple AirPods 3rd Gen",
        image: "https://rukminim2.flixcart.com/image/352/422/kwdv3bk0/headphone/q/o/x/-original-imag92pgct73fbvx.jpeg?q=90&crop=false",
        details: "Wireless earbuds with MagSafe charging, Spatial Audio, and adaptive EQ for immersive sound experience.",
        price: 18990,
        reviews: [
            { rating: 5, comment: "Crystal clear audio", date: "2025-03-10", reviewerName: "Vikas" },
            { rating: 4, comment: "Premium feel", date: "2025-03-12", reviewerName: "Tejas" },
            { rating: 5, comment: "Love the bass", date: "2025-03-15", reviewerName: "Nirav" }
        ],
        qty: 1,
        finalTotal: 18990,
        category: "accessories",
        gender: "unisex"
    },
    {
        id: 40,
        title: "Reebok Gym Bag",
        image: "https://imagescdn.reebok.in/img/app/product/9/959346-13359756.jpg",
        details: "30L waterproof gym bag with separate shoe compartment and strong build for daily use.",
        price: 1599,
        reviews: [
            { rating: 5, comment: "Very spacious", date: "2025-03-03", reviewerName: "Rehan" },
            { rating: 4, comment: "Stylish and strong", date: "2025-03-05", reviewerName: "Kavya" },
            { rating: 4, comment: "Perfect for gym", date: "2025-03-09", reviewerName: "Jignesh" }
        ],
        qty: 1,
        finalTotal: 1599,
        category: "clothing",
        gender: "unisex"
    },

    {
        id: 41,
        title: "OnePlus Keyboard 81 Pro",
        image: "https://image01-in.oneplus.net/ebp/202304/07/1-m00-51-13-cpgm7mqvjp-asfwyaagvitodsoc834.png",
        details: "Premium mechanical keyboard with RGB lighting and high-performance switches for a superior typing experience.",
        price: 17999,
        reviews: [
            { rating: 5, comment: "Typing is smooth", date: "2025-03-01", reviewerName: "Karan" },
            { rating: 4, comment: "Very satisfying click", date: "2025-03-04", reviewerName: "Ishaan" },
            { rating: 4, comment: "Pricey but worth it", date: "2025-03-06", reviewerName: "Zoya" }
        ],
        qty: 1,
        finalTotal: 17999,
        category: "technology",
        gender: "unisex"
    },
    {
        id: 42,
        title: "Boat BassHeads 225",
        image: "https://rukminim2.flixcart.com/image/300/300/kc54ivk0/headphone/x/m/s/bassheads-228-boat-original-imaff2z4rfbteyxz.jpeg",
        details: "Powerful wired earphones featuring punchy bass, noise isolation, and in-line mic for clear calls.",
        price: 599,
        reviews: [
            { rating: 4, comment: "Bass is great", date: "2025-03-03", reviewerName: "Rehan" },
            { rating: 3, comment: "Wire is short", date: "2025-03-07", reviewerName: "Mahi" },
            { rating: 5, comment: "Best in budget", date: "2025-03-09", reviewerName: "Jash" }
        ],
        qty: 1,
        finalTotal: 599,
        category: "accessories",
        gender: "unisex"
    },
    {
        id: 43,
        title: "Whirlpool 7kg Washing Machine",
        image: "https://whirlpoolindia.vtexassets.com/arquivos/ids/167788/Xpert-care-Silver-front-7kg_1500x1500.png?v=638379679316170000",
        details: "7kg fully automatic top-load machine with 5-star energy rating and smart wash programs.",
        price: 17990,
        reviews: [
            { rating: 5, comment: "Washes fast", date: "2025-03-04", reviewerName: "Nisha" },
            { rating: 4, comment: "Silent operation", date: "2025-03-05", reviewerName: "Smit" },
            { rating: 5, comment: "Easy to use", date: "2025-03-06", reviewerName: "Meera" }
        ],
        qty: 1,
        finalTotal: 17990,
        category: "home",
        gender: "unisex"
    },
    {
        id: 44,
        title: "Samsung Galaxy Tab A9+",
        image: "https://m.media-amazon.com/images/I/61J1NUF2sKL.jpg",
        details: "11-inch FHD+ tablet powered by Snapdragon 695, featuring 5G connectivity and immersive visuals.",
        price: 20999,
        reviews: [
            { rating: 4, comment: "Great for video", date: "2025-03-04", reviewerName: "Mona" },
            { rating: 5, comment: "Very fast", date: "2025-03-05", reviewerName: "Rajat" },
            { rating: 4, comment: "Big display", date: "2025-03-06", reviewerName: "Mitesh" }
        ],
        qty: 1,
        finalTotal: 20999,
        category: "electronics",
        gender: "unisex"
    },
    {
        id: 45,
        title: "Mi Router 4C",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8-DasFCf4XF_QMyBrsEgx84tX5Pbe1EFrw&s",
        details: "300Mbps wireless router with 4 high-gain antennas and quick setup via Mi app.",
        price: 999,
        reviews: [
            { rating: 4, comment: "Good coverage", date: "2025-03-02", reviewerName: "Divya" },
            { rating: 4, comment: "App is simple", date: "2025-03-03", reviewerName: "Nakul" },
            { rating: 3, comment: "Signal drops sometimes", date: "2025-03-06", reviewerName: "Viraj" }
        ],
        qty: 1,
        finalTotal: 999,
        category: "technology",
        gender: "unisex"
    },
    {
        id: 46,
        title: "Nike Ankle Socks (3 Pack)",
        image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/68c250f2-451a-47d4-a5be-de7cc13dd82a/U+NK+EVERYDAY+CSH+ANKL+3PR+132.png",
        details: "Soft cotton-blend ankle socks with stretchable comfort and excellent breathability.",
        price: 699,
        reviews: [
            { rating: 5, comment: "Very soft", date: "2025-03-01", reviewerName: "Vivek" },
            { rating: 4, comment: "Stays in place", date: "2025-03-03", reviewerName: "Irfan" },
            { rating: 3, comment: "Bit tight", date: "2025-03-04", reviewerName: "Manav" }
        ],
        qty: 1,
        finalTotal: 699,
        category: "clothing",
        gender: "male"
    },
    {
        id: 47,
        title: "Bose SoundLink Flex",
        image: "https://i.rtings.com/assets/products/y8VC5NUj/bose-soundlink-flex/design-medium.jpg?format=auto",
        details: "Portable Bluetooth speaker with rich sound, waterproof build, and premium audio tuning.",
        price: 14990,
        reviews: [
            { rating: 5, comment: "Crystal sound", date: "2025-03-05", reviewerName: "Avni" },
            { rating: 4, comment: "Build is solid", date: "2025-03-06", reviewerName: "Tina" },
            { rating: 5, comment: "Perfect for travel", date: "2025-03-07", reviewerName: "Neel" }
        ],
        qty: 1,
        finalTotal: 14990,
        category: "electronics",
        gender: "unisex"
    },
    {
        id: 48,
        title: "Bajaj OTG Oven 19L",
        image: "https://m.media-amazon.com/images/I/61dTYU4SzpL._UF350,350_QL80_.jpg",
        details: "19L OTG with multi-function heating, 60-minute timer, and stylish compact body.",
        price: 4999,
        reviews: [
            { rating: 4, comment: "Toasts evenly", date: "2025-03-03", reviewerName: "Sahil" },
            { rating: 4, comment: "Good for family", date: "2025-03-04", reviewerName: "Neha" },
            { rating: 5, comment: "Love the design", date: "2025-03-06", reviewerName: "Divya" }
        ],
        qty: 1,
        finalTotal: 4999,
        category: "kitchen",
        gender: "unisex"
    },
    {
        id: 49,
        title: "Lifelong Hair Dryer",
        image: "https://www.lifelongindiaonline.com/cdn/shop/files/Artboard_5_2_7ef81606-04a5-40b5-b55b-28cc25e5b481.jpg?v=1731421240",
        details: "1200W compact hair dryer with foldable design and cool shot feature for smooth styling.",
        price: 899,
        reviews: [
            { rating: 5, comment: "Dries fast", date: "2025-03-01", reviewerName: "Isha" },
            { rating: 4, comment: "Very handy", date: "2025-03-03", reviewerName: "Rima" },
            { rating: 4, comment: "Cord is long", date: "2025-03-04", reviewerName: "Sneha" }
        ],
        qty: 1,
        finalTotal: 899,
        category: "personal care",
        gender: "female"
    },
    {
        id: 50,
        title: "Redmi Smart TV Stick",
        image: "https://images.firstpost.com/wp-content/uploads/2021/01/Bundle.jpg?im=FitAndFill=(1200,675)",
        details: "Compact Android TV stick with 1080p streaming, voice remote, and wide app support.",
        price: 2999,
        reviews: [
            { rating: 4, comment: "UI is smooth", date: "2025-03-02", reviewerName: "Tushar" },
            { rating: 4, comment: "Works with all apps", date: "2025-03-04", reviewerName: "Disha" },
            { rating: 5, comment: "Best under budget", date: "2025-03-06", reviewerName: "Jiya" }
        ],
        qty: 1,
        finalTotal: 2999,
        category: "technology",
        gender: "unisex"
    },

    {
        id: 51,
        title: "HP Ink Tank Printer 419",
        image: "https://m.media-amazon.com/images/I/61pzUw-klrL._UF1000,1000_QL80_.jpg",
        details: "All-in-one ink tank printer with wireless connectivity and cost-efficient printing.",
        price: 12499,
        reviews: [
            { rating: 5, comment: "Excellent quality prints", date: "2025-03-03", reviewerName: "Yash" },
            { rating: 4, comment: "Works with WiFi", date: "2025-03-06", reviewerName: "Preeti" },
            { rating: 5, comment: "Low ink cost", date: "2025-03-08", reviewerName: "Sameer" }
        ],
        qty: 1,
        finalTotal: 12499,
        category: "technology",
        gender: "unisex"
    },
    {
        id: 52,
        title: "Kurlon Foam Mattress",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR93vUKeD-hTLkktSw949l8L8v0ArCWZSuxVA&s",
        details: "5-inch thick memory foam single mattress designed for ultimate comfort and support.",
        price: 7499,
        reviews: [
            { rating: 4, comment: "Comfortable sleep", date: "2025-03-04", reviewerName: "Meena" },
            { rating: 5, comment: "Perfect firmness", date: "2025-03-07", reviewerName: "Rahul" },
            { rating: 4, comment: "Fast delivery", date: "2025-03-08", reviewerName: "Nikita" }
        ],
        qty: 1,
        finalTotal: 7499,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 53,
        title: "Beardo Charcoal Face Wash",
        image: "https://beardo.in/cdn/shop/files/4_00ffeb0a-69eb-4961-b778-95e0b9754bdf.jpg?v=1687518138&width=1445",
        details: "Oil-control face wash enriched with charcoal for deep cleansing and fresh skin.",
        price: 249,
        reviews: [
            { rating: 5, comment: "Skin feels fresh", date: "2025-03-02", reviewerName: "Ravi" },
            { rating: 4, comment: "Removes oil easily", date: "2025-03-05", reviewerName: "Sunny" },
            { rating: 4, comment: "Nice fragrance", date: "2025-03-07", reviewerName: "Manav" }
        ],
        qty: 1,
        finalTotal: 249,
        category: "personal care",
        gender: "male"
    },
    {
        id: 54,
        title: "Reebok Gym Shorts",
        image: "https://imagescdn.reebok.in/img/app/product/9/952865-12309616.jpg?auto=format&w=390",
        details: "Stretchable and breathable workout shorts offering comfort during intense sessions.",
        price: 1199,
        reviews: [
            { rating: 4, comment: "Great fit", date: "2025-03-01", reviewerName: "Arun" },
            { rating: 5, comment: "Feels very light", date: "2025-03-03", reviewerName: "Dev" },
            { rating: 3, comment: "Color fades slightly", date: "2025-03-05", reviewerName: "Ronak" }
        ],
        qty: 1,
        finalTotal: 1199,
        category: "clothing",
        gender: "male"
    },
    {
        id: 55,
        title: "Crompton Table Fan 400mm",
        image: "https://media.croma.com/image/upload/v1719328674/Croma%20Assets/Small%20Appliances/Fans/Images/251120_1_ebyycb.png",
        details: "High-speed table fan with oscillation and silent operation for better airflow.",
        price: 1999,
        reviews: [
            { rating: 5, comment: "Very powerful", date: "2025-03-04", reviewerName: "Ankit" },
            { rating: 4, comment: "Low noise", date: "2025-03-06", reviewerName: "Jay" },
            { rating: 4, comment: "Compact and effective", date: "2025-03-08", reviewerName: "Priya" }
        ],
        qty: 1,
        finalTotal: 1999,
        category: "home",
        gender: "unisex"
    },
    {
        id: 56,
        title: "Zebronics Zeb-Fit1220CH",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteAaSksDPRt5Qj-0g2N123zRRY0QDtdqJzA&s",
        details: "Smartwatch with 1.5\" display, heart rate tracking, and long battery life.",
        price: 1999,
        reviews: [
            { rating: 4, comment: "Good value", date: "2025-03-02", reviewerName: "Nishant" },
            { rating: 3, comment: "Steps not accurate", date: "2025-03-05", reviewerName: "Kriti" },
            { rating: 5, comment: "Battery lasts 5 days", date: "2025-03-07", reviewerName: "Anjali" }
        ],
        qty: 1,
        finalTotal: 1999,
        category: "technology",
        gender: "unisex"
    },
    {
        id: 57,
        title: "Wildcraft Backpack 35L",
        image: "https://m.media-amazon.com/images/I/71lvDSlXuBL._AC_UY1100_.jpg",
        details: "35L water-resistant backpack with laptop compartment and multiple organized pockets.",
        price: 1899,
        reviews: [
            { rating: 5, comment: "Very spacious", date: "2025-03-03", reviewerName: "Harsh" },
            { rating: 4, comment: "Good for daily use", date: "2025-03-06", reviewerName: "Vinay" },
            { rating: 4, comment: "Build quality good", date: "2025-03-09", reviewerName: "Sonal" }
        ],
        qty: 1,
        finalTotal: 1899,
        category: "accessories",
        gender: "unisex"
    },
    {
        id: 58,
        title: "Realme Buds Wireless 2 Neo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1b0UCrmFxLyW2HwcUTlUJldvZawFMUDkRWA&s",
        details: "Wireless neckband with Type-C fast charging and immersive sound experience.",
        price: 1399,
        reviews: [
            { rating: 4, comment: "Very light", date: "2025-03-04", reviewerName: "Dhiren" },
            { rating: 3, comment: "Mic could improve", date: "2025-03-06", reviewerName: "Karan" },
            { rating: 5, comment: "Sound is crisp", date: "2025-03-08", reviewerName: "Bhumi" }
        ],
        qty: 1,
        finalTotal: 1399,
        category: "electronics",
        gender: "unisex"
    },
    {
        id: 59,
        title: "Nivea Body Lotion 400ml",
        image: "https://m.media-amazon.com/images/I/6100rlnKYwL._UF1000,1000_QL80_.jpg",
        details: "400ml nourishing body lotion with almond oil for deep hydration and smooth skin.",
        price: 315,
        reviews: [
            { rating: 5, comment: "Softens dry skin", date: "2025-03-01", reviewerName: "Kajal" },
            { rating: 4, comment: "Smells amazing", date: "2025-03-03", reviewerName: "Zarna" },
            { rating: 5, comment: "Very hydrating", date: "2025-03-06", reviewerName: "Kiran" }
        ],
        qty: 1,
        finalTotal: 315,
        category: "personal care",
        gender: "female"
    },
    {
        id: 60,
        title: "Milton Thermosteel Flask 1L",
        image: "https://m.media-amazon.com/images/I/81KrnHiiIHL.jpg",
        details: "Durable 1-liter stainless steel flask that keeps beverages hot or cold for 24 hours.",
        price: 849,
        reviews: [
            { rating: 4, comment: "Keeps hot for long", date: "2025-03-02", reviewerName: "Bharat" },
            { rating: 5, comment: "Looks classy", date: "2025-03-05", reviewerName: "Kavita" },
            { rating: 5, comment: "Must have for travel", date: "2025-03-07", reviewerName: "Tara" }
        ],
        qty: 1,
        finalTotal: 849,
        category: "kitchen",
        gender: "unisex"
    },

    {
        id: 61,
        title: "Philips LED Table Lamp",
        image: "https://www.jiomart.com/images/product/original/rv2rserbvg/philips-opus-5w-led-table-lamp-rechargeable-led-desk-table-lamp-for-study-and-office-use-cool-white-pack-of-1-product-images-orv2rserbvg-p609843693-0-202408211801.jpg?im=Resize=(1000,1000)",
        details: "Rechargeable LED lamp with USB port and dimmable brightness for eye-friendly study lighting.",
        price: 2299,
        reviews: [
            { rating: 4, comment: "Eye protection is great", date: "2025-03-01", reviewerName: "Meera" },
            { rating: 5, comment: "Stylish and useful", date: "2025-03-04", reviewerName: "Raghav" },
            { rating: 4, comment: "Perfect for study", date: "2025-03-06", reviewerName: "Shruti" }
        ],
        qty: 1,
        finalTotal: 2299,
        category: "home",
        gender: "unisex"
    },
    {
        id: 62,
        title: "Van Heusen Formal Shirt",
        image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/19481956/2022/11/7/6913c860-c8e8-45e6-827e-aada4742e9d91667823091095-Van-Heusen-Men-Shirts-3331667823090401-2.jpg",
        details: "Slim fit cotton shirt crafted for comfort and style in professional settings.",
        price: 1699,
        reviews: [
            { rating: 5, comment: "Elegant look", date: "2025-03-02", reviewerName: "Anil" },
            { rating: 4, comment: "Nice stitching", date: "2025-03-03", reviewerName: "Vishal" },
            { rating: 4, comment: "Material feels soft", date: "2025-03-06", reviewerName: "Irfan" }
        ],
        qty: 1,
        finalTotal: 1699,
        category: "clothing",
        gender: "male"
    },
    {
        id: 63,
        title: "HP Wireless Mouse X200",
        image: "https://m.media-amazon.com/images/I/81igsMDIJ8L._UF350,350_QL80_.jpg",
        details: "Ergonomic wireless mouse with nano USB receiver and long battery backup.",
        price: 699,
        reviews: [
            { rating: 5, comment: "Very responsive", date: "2025-03-02", reviewerName: "Reema" },
            { rating: 4, comment: "Good for laptops", date: "2025-03-04", reviewerName: "Abhi" },
            { rating: 4, comment: "Battery lasts long", date: "2025-03-05", reviewerName: "Manoj" }
        ],
        qty: 1,
        finalTotal: 699,
        category: "technology",
        gender: "unisex"
    },
    {
        id: 64,
        title: "Prestige Pressure Cooker 5L",
        image: "https://m.media-amazon.com/images/I/514M+UZ5bhL.jpg",
        details: "Durable 5L aluminum cooker with safety valve and whistle for quick meals.",
        price: 1899,
        reviews: [
            { rating: 5, comment: "Quick cooking", date: "2025-03-03", reviewerName: "Komal" },
            { rating: 4, comment: "Handle is sturdy", date: "2025-03-05", reviewerName: "Ritesh" },
            { rating: 4, comment: "Trusted brand", date: "2025-03-06", reviewerName: "Simran" }
        ],
        qty: 1,
        finalTotal: 1899,
        category: "kitchen",
        gender: "unisex"
    },
    {
        id: 65,
        title: "Wooden Bookshelf 5 Tier",
        image: "https://m.media-amazon.com/images/I/71iOGncUMJL._UF894,1000_QL80_.jpg",
        details: "Stylish 5-tier brown wood bookshelf ideal for organizing books and decor.",
        price: 3599,
        reviews: [
            { rating: 4, comment: "Easy to assemble", date: "2025-03-01", reviewerName: "Ronak" },
            { rating: 5, comment: "Very useful", date: "2025-03-04", reviewerName: "Asha" },
            { rating: 4, comment: "Matches room decor", date: "2025-03-06", reviewerName: "Dilip" }
        ],
        qty: 1,
        finalTotal: 3599,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 66,
        title: "L'Oréal Paris Shampoo 650ml",
        image: "https://www.bbassets.com/media/uploads/p/xl/40200531_8-loreal-paris-total-repair-5-advanced-repairing-shampoo-for-damaged-hair.jpg",
        details: "Repairing shampoo enriched with protein and ceramide for dry and damaged hair.",
        price: 559,
        reviews: [
            { rating: 5, comment: "Hair feels soft", date: "2025-03-02", reviewerName: "Neha" },
            { rating: 4, comment: "Smells nice", date: "2025-03-04", reviewerName: "Trisha" },
            { rating: 4, comment: "Good for dry hair", date: "2025-03-06", reviewerName: "Poonam" }
        ],
        qty: 1,
        finalTotal: 559,
        category: "personal care",
        gender: "female"
    },
    {
        id: 67,
        title: "Lenovo 15.6\" Laptop Bag",
        image: "https://m.media-amazon.com/images/I/51dAwlVzR6L._UF1000,1000_QL80_.jpg",
        details: "Water-resistant laptop backpack with padded protection and lightweight design.",
        price: 1299,
        reviews: [
            { rating: 4, comment: "Very lightweight", date: "2025-03-03", reviewerName: "Amit" },
            { rating: 5, comment: "Fits my laptop perfectly", date: "2025-03-05", reviewerName: "Chirag" },
            { rating: 4, comment: "Good straps", date: "2025-03-07", reviewerName: "Viral" }
        ],
        qty: 1,
        finalTotal: 1299,
        category: "accessories",
        gender: "unisex"
    },
    {
        id: 68,
        title: "boAt Wave Call Smartwatch",
        image: "https://www.boat-lifestyle.com/cdn/shop/products/wave-call-3.png?v=1685530085",
        details: "Smartwatch with 1.69\" display, Bluetooth calling, and SpO2 health monitoring.",
        price: 1799,
        reviews: [
            { rating: 4, comment: "Great features", date: "2025-03-01", reviewerName: "Sonal" },
            { rating: 4, comment: "Speaker is clear", date: "2025-03-03", reviewerName: "Jay" },
            { rating: 5, comment: "Stylish design", date: "2025-03-06", reviewerName: "Ritu" }
        ],
        qty: 1,
        finalTotal: 1799,
        category: "technology",
        gender: "unisex"
    },
    {
        id: 69,
        title: "Saregama Carvaan Mini",
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/speaker/mobile-tablet-speaker/s/d/x/carvaan-mini-hindi-saregama-original-imagmzx9xfynkkfn.jpeg?q=90&crop=false",
        details: "Portable speaker with 351 preloaded retro Hindi songs and Bluetooth streaming.",
        price: 2490,
        reviews: [
            { rating: 5, comment: "Brings nostalgia", date: "2025-03-01", reviewerName: "Sheetal" },
            { rating: 4, comment: "Good sound", date: "2025-03-04", reviewerName: "Uday" },
            { rating: 5, comment: "Perfect gift", date: "2025-03-06", reviewerName: "Manisha" }
        ],
        qty: 1,
        finalTotal: 2490,
        category: "electronics",
        gender: "unisex"
    },
    {
        id: 70,
        title: "Wonderchef Nutri-Blend Mixer",
        image: "http://wonderchef.com/cdn/shop/files/63154951-NB-Active-2Jar-Black.jpg?v=1750395468",
        details: "Compact 400W blender with 2 jars for smoothies, chutneys, and grinding.",
        price: 2999,
        reviews: [
            { rating: 4, comment: "Smooth operation", date: "2025-03-02", reviewerName: "Kushal" },
            { rating: 4, comment: "Compact and handy", date: "2025-03-05", reviewerName: "Jinal" },
            { rating: 5, comment: "Great for juices", date: "2025-03-06", reviewerName: "Deepa" }
        ],
        qty: 1,
        finalTotal: 2999,
        category: "kitchen",
        gender: "unisex"
    },
    {
        id: 71,
        title: "Ambrane 10000mAh Power Bank",
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-power-bank/t/c/g/pp-111-10000-ambrane-original-imagg7nqnxxq8mhg.jpeg?q=20&crop=false",
        details: "Compact power bank with 10000mAh capacity, dual USB output, and fast charging.",
        price: 899,
        reviews: [
            { rating: 5, comment: "Charges phone 3x", date: "2025-03-04", reviewerName: "Hardik" },
            { rating: 4, comment: "Compact design", date: "2025-03-05", reviewerName: "Dimple" },
            { rating: 4, comment: "Very handy", date: "2025-03-06", reviewerName: "Nirmal" }
        ],
        qty: 1,
        finalTotal: 899,
        category: "electronics",
        gender: "unisex"
    },

    {
        id: 72,
        title: "Allen Solly Women's Top",
        image: "https://imagescdn.allensolly.com/img/app/product/9/916674-11431875.jpg?auto=format&w=390",
        details: "Trendy polyester casual top with elegant prints, lightweight and comfortable for everyday wear.",
        price: 1099,
        reviews: [
            { rating: 4, comment: "Very comfortable", date: "2025-03-02", reviewerName: "Priya" },
            { rating: 5, comment: "Great fit", date: "2025-03-04", reviewerName: "Neha" },
            { rating: 4, comment: "Nice fabric", date: "2025-03-05", reviewerName: "Rekha" }
        ],
        qty: 1,
        finalTotal: 1099,
        category: "clothing",
        gender: "female"
    },
    {
        id: 73,
        title: "Samsung USB Type-C Cable",
        image: "https://m.media-amazon.com/images/I/61g9F6LXKqL.jpg",
        details: "1.5-meter durable Type-C cable for fast charging and data transfer, compatible with all Type-C devices.",
        price: 499,
        reviews: [
            { rating: 5, comment: "Charges quickly", date: "2025-03-01", reviewerName: "Ajay" },
            { rating: 4, comment: "Long length", date: "2025-03-03", reviewerName: "Sneha" },
            { rating: 4, comment: "Durable build", date: "2025-03-05", reviewerName: "Nilesh" }
        ],
        qty: 1,
        finalTotal: 499,
        category: "accessories",
        gender: "unisex"
    },
    {
        id: 74,
        title: "Godrej Interio Plastic Chair",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CT1JCtrxEQickbPb1lt-xTWyC3rdxAgSFg&s",
        details: "Strong and lightweight ergonomic chair made from high-quality plastic, ideal for home or office use.",
        price: 1349,
        reviews: [
            { rating: 5, comment: "Very sturdy", date: "2025-03-02", reviewerName: "Rahul" },
            { rating: 4, comment: "Good back support", date: "2025-03-03", reviewerName: "Monika" },
            { rating: 4, comment: "Value for money", date: "2025-03-05", reviewerName: "Aarav" }
        ],
        qty: 1,
        finalTotal: 1349,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 75,
        title: "Lakme 9to5 Primer + Matte Lipstick",
        image: "https://www.lakmeindia.com/cdn/shop/files/24846_H-8901030985782_2e4d1e3e-7a8f-474c-92ed-91bd2986bc1a_1000x.jpg?v=1737699971",
        details: "Dual benefit lipstick with primer for smooth application and rich matte color that lasts all day.",
        price: 499,
        reviews: [
            { rating: 5, comment: "Color lasts long", date: "2025-03-01", reviewerName: "Riya" },
            { rating: 4, comment: "Matte but smooth", date: "2025-03-04", reviewerName: "Kritika" },
            { rating: 5, comment: "Gorgeous shade", date: "2025-03-06", reviewerName: "Simran" }
        ],
        qty: 1,
        finalTotal: 499,
        category: "personal care",
        gender: "female"
    },
    {
        id: 76,
        title: "Prestige Electric Kettle 1.5L",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_TU4dBFC-CMEkFjQpXvmDPSm5W4MDxysIw&s",
        details: "Efficient 1.5L electric kettle with auto cut-off, stainless steel body, and easy-to-use handle design.",
        price: 1345,
        reviews: [
            { rating: 5, comment: "Boils water fast", date: "2025-03-03", reviewerName: "Suresh" },
            { rating: 4, comment: "Easy to clean", date: "2025-03-05", reviewerName: "Shraddha" },
            { rating: 4, comment: "Great build", date: "2025-03-06", reviewerName: "Mehul" }
        ],
        qty: 1,
        finalTotal: 1345,
        category: "kitchen",
        gender: "unisex"
    },
    {
        id: 77,
        title: "Study Desk",
        image: "https://damroimages.blob.core.windows.net/damroimages/7155-1.jpg",
        details: "Modern wooden study desk with shelf space, suitable for students or work-from-home setups.",
        price: 3499,
        reviews: [
            { rating: 5, comment: "Easy to install", date: "2025-03-01", reviewerName: "Uday" },
            { rating: 4, comment: "Compact size fits well", date: "2025-03-03", reviewerName: "Poonam" },
            { rating: 5, comment: "Sturdy structure", date: "2025-03-06", reviewerName: "Alok" }
        ],
        qty: 1,
        finalTotal: 3499,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 78,
        title: "Durex Extra Thin Condoms (Pack of 10)",
        image: "https://www.durexindia.com/cdn/shop/files/6_5f1d34a7-4a94-4756-abd6-6ed8c1a465ad.webp?v=1714481162&width=1445",
        details: "Pack of 10 ultra-thin latex condoms with added lubrication for enhanced comfort and natural feel.",
        price: 180,
        reviews: [
            { rating: 5, comment: "Feels natural", date: "2025-03-04", reviewerName: "Anonymous" },
            { rating: 4, comment: "Good packaging", date: "2025-03-05", reviewerName: "Vishal" },
            { rating: 5, comment: "Reliable brand", date: "2025-03-06", reviewerName: "Arjun" }
        ],
        qty: 1,
        finalTotal: 180,
        category: "personal care",
        gender: "male"
    },
    {
        id: 79,
        title: "Zebronics Wireless Keyboard + Mouse",
        image: "https://zebronics.com/cdn/shop/files/zeb-companion114-pic2.jpg?v=1688023155",
        details: "Wireless combo set with ergonomic design, silent keys, and smooth mouse ideal for office use.",
        price: 1399,
        reviews: [
            { rating: 5, comment: "Perfect for office", date: "2025-03-03", reviewerName: "Milan" },
            { rating: 4, comment: "Mouse is smooth", date: "2025-03-05", reviewerName: "Priti" },
            { rating: 5, comment: "Plug and play", date: "2025-03-06", reviewerName: "Danish" }
        ],
        qty: 1,
        finalTotal: 1399,
        category: "technology",
        gender: "unisex"
    },
    {
        id: 80,
        title: "Philips Beard Trimmer BT1232",
        image: "https://m.media-amazon.com/images/I/71L3O1SeZ9L._UF350,350_QL80_.jpg",
        details: "Rechargeable trimmer with USB charging, skin-friendly blades, and 30 minutes of cordless use.",
        price: 1149,
        reviews: [
            { rating: 4, comment: "Trim is clean", date: "2025-03-01", reviewerName: "Aakash" },
            { rating: 5, comment: "Battery backup is good", date: "2025-03-04", reviewerName: "Rahil" },
            { rating: 5, comment: "Easy to use", date: "2025-03-06", reviewerName: "Ravi" }
        ],
        qty: 1,
        finalTotal: 1149,
        category: "personal care",
        gender: "male"
    },
    {
        id: 81,
        title: "NIVIA Football Size 5",
        image: "https://sportskingdomstores.io/cdn/shop/products/balls.jpg?v=1664435001",
        details: "Durable rubberized football, ideal for training and recreational matches. Size 5, suitable for all age groups.",
        price: 599,
        reviews: [
            { rating: 5, comment: "Great grip and bounce", date: "2025-03-05", reviewerName: "Ravi" },
            { rating: 4, comment: "Best for practice", date: "2025-03-10", reviewerName: "Amit" },
            { rating: 3, comment: "Color fades after use", date: "2025-03-14", reviewerName: "Sameer" }
        ],
        qty: 1,
        finalTotal: 599,
        category: "sports",
        gender: "unisex"
    },
    {
        id: 82,
        title: "Cosco Cricket Bat",
        image: "https://store.cosco.in/cdn/shop/files/Striker-Bat-1_d0fa191f-774b-4c30-957e-e35fac5e6cd5.jpg?v=1731584078",
        details: "Lightweight cricket bat made of Kashmir willow for beginners and casual players.",
        price: 899,
        reviews: [
            { rating: 4, comment: "Good for beginners", date: "2025-03-01", reviewerName: "Rohan" },
            { rating: 5, comment: "Nice grip and feel", date: "2025-03-05", reviewerName: "Ajay" },
            { rating: 3, comment: "Not for heavy hitters", date: "2025-03-07", reviewerName: "Vinay" }
        ],
        qty: 1,
        finalTotal: 899,
        category: "sports",
        gender: "unisex"
    },
    {
        id: 83,
        title: "Yonex Badminton Racket",
        image: "https://m.media-amazon.com/images/I/81G8p7bkdCL.jpg",
        details: "Graphite badminton racket with excellent control and durable strings, ideal for intermediate players.",
        price: 1199,
        reviews: [
            { rating: 5, comment: "Very lightweight", date: "2025-04-01", reviewerName: "Nikhil" },
            { rating: 4, comment: "Strong and comfortable", date: "2025-04-02", reviewerName: "Deepak" },
            { rating: 4, comment: "Perfect balance", date: "2025-04-05", reviewerName: "Raj" }
        ],
        qty: 1,
        finalTotal: 1199,
        category: "sports",
        gender: "unisex"
    },
    {
        id: 84,
        title: "SG Cricket Gloves",
        image: "https://shop.teamsg.in/cdn/shop/files/1_e8fa8e1d-c1f8-4afc-b4d4-20c6c25d13c1.png?v=1720178779",
        details: "Premium cricket gloves with high-density foam for better protection and comfort.",
        price: 749,
        reviews: [
            { rating: 4, comment: "Nice fitting", date: "2025-04-10", reviewerName: "Harsh" },
            { rating: 5, comment: "Feels premium", date: "2025-04-12", reviewerName: "Pranav" },
            { rating: 3, comment: "Little tight for large hands", date: "2025-04-13", reviewerName: "Saurabh" }
        ],
        qty: 1,
        finalTotal: 749,
        category: "sports",
        gender: "unisex"
    },
    {
        id: 85,
        title: "Adidas Gym Bag",
        image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/32660791/2025/4/24/f79aeb89-b4d5-44b7-bfe2-d4b3736b93a81745500467363-ADIDAS-Unisex-Linear-Brand-Logo-Printed-Gym-Duffle-Bag-22417-1.jpg",
        details: "Spacious sports gym bag with separate shoe compartment and waterproof lining.",
        price: 1499,
        reviews: [
            { rating: 5, comment: "Stylish and spacious", date: "2025-05-01", reviewerName: "Zaid" },
            { rating: 4, comment: "Good material", date: "2025-05-03", reviewerName: "Irfan" },
            { rating: 4, comment: "Handles heavy load", date: "2025-05-05", reviewerName: "Kunal" }
        ],
        qty: 1,
        finalTotal: 1499,
        category: "sports",
        gender: "unisex"
    },
    {
        id: 86,
        title: "Puma Men’s Running Shoes",
        image: "https://images.puma.net/images/376909/06/sv01/fnd/IND/w/800/h/800/",
        details: "Lightweight running shoes with breathable mesh and durable rubber sole.",
        price: 2299,
        reviews: [
            { rating: 5, comment: "Perfect for jogging", date: "2025-05-08", reviewerName: "Tushar" },
            { rating: 4, comment: "Good comfort", date: "2025-05-09", reviewerName: "Ramesh" },
            { rating: 5, comment: "Stylish design", date: "2025-05-10", reviewerName: "Varun" }
        ],
        qty: 1,
        finalTotal: 2299,
        category: "sports",
        gender: "unisex"
    },
    {
        id: 87,
        title: "SG Cricket Helmet",
        image: "https://shop.teamsg.in/cdn/shop/products/Aerotuff-with-mild-steel-grill-2-1-1-scaled.jpg?v=1744265692&width=1946",
        details: "Adjustable cricket helmet with steel grill and foam padding for maximum safety.",
        price: 1299,
        reviews: [
            { rating: 4, comment: "Good protection", date: "2025-05-11", reviewerName: "Mohit" },
            { rating: 3, comment: "Slightly heavy", date: "2025-05-13", reviewerName: "Sunny" },
            { rating: 5, comment: "Looks premium", date: "2025-05-15", reviewerName: "Jatin" }
        ],
        qty: 1,
        finalTotal: 1299,
        category: "sports",
        gender: "unisex"
    },
    {
        id: 88,
        title: "NIVIA Basketball",
        image: "hhttps://www.niviasports.com/cdn/shop/files/2_3069f9c3-b008-48dc-ae72-58c4d9c6b662.jpg?v=1718881909",
        details: "Official size and weight basketball suitable for indoor and outdoor courts.",
        price: 699,
        reviews: [
            { rating: 5, comment: "Good grip", date: "2025-05-18", reviewerName: "Jay" },
            { rating: 4, comment: "Perfect bounce", date: "2025-05-20", reviewerName: "Rajesh" },
            { rating: 4, comment: "Value for money", date: "2025-05-21", reviewerName: "Dinesh" }
        ],
        qty: 1,
        finalTotal: 699,
        category: "sports",
        gender: "unisex"
    },
    {
        id: 89,
        title: "Vector X Skipping Rope",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS2dNAb7sQ3AD6cr94WAwNp1skOLhRl6KVERcpQPdHfEKscYLBTBTaLrQrw510QMZI4m2MDzKeNfxMgBcvtPgRbtYzjsRBv3JkiJymtPx7N565KOC-QS89O",
        details: "Adjustable speed jump rope with foam handles, ideal for cardio and fitness training.",
        price: 299,
        reviews: [
            { rating: 4, comment: "Great for workouts", date: "2025-05-22", reviewerName: "Aarav" },
            { rating: 5, comment: "Good quality", date: "2025-05-23", reviewerName: "Sahil" },
            { rating: 3, comment: "Handle grip loosens", date: "2025-05-25", reviewerName: "Yogesh" }
        ],
        qty: 1,
        finalTotal: 299,
        category: "sports",
        gender: "unisex"
    },
    {
        id: 90,
        title: "Decathlon Yoga Mat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_Zmx3XJ-20SNlUoUxZb_zgtdbYZmOltJLw&s",
        details: "Anti-slip yoga mat with 6mm cushioning, perfect for all yoga and floor workouts.",
        price: 649,
        reviews: [
            { rating: 5, comment: "Very soft and durable", date: "2025-06-01", reviewerName: "Sneha" },
            { rating: 4, comment: "Non-slip surface", date: "2025-06-03", reviewerName: "Neha" },
            { rating: 4, comment: "Good cushioning", date: "2025-06-05", reviewerName: "Priya" }
        ],
        qty: 1,
        finalTotal: 649,
        category: "sports",
        gender: "unisex"
    },
    {
        id: 91,
        title: "Wooden Study Table",
        image: "https://thetimberguy.com/cdn/shop/products/Buy-Wooden-Study-table-Writing-table-Desk-for-Modern-Home.jpg?v=1739470075",
        details: "Compact engineered wood study table with drawers, ideal for students and home office use.",
        price: 2999,
        reviews: [
            { rating: 4, comment: "Perfect for small space", date: "2025-05-01", reviewerName: "Rohit" },
            { rating: 5, comment: "Strong and elegant", date: "2025-05-03", reviewerName: "Arjun" },
            { rating: 3, comment: "Assembly took time", date: "2025-05-04", reviewerName: "Dev" }
        ],
        qty: 1,
        finalTotal: 2999,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 92,
        title: "Plastic Chair Set of 2",
        image: "https://www.nilkamalfurniture.com/cdn/shop/products/breeze2.jpg?v=1674215514&width=1080",
        details: "Durable plastic chairs with comfortable backrest and elegant design for indoor/outdoor use.",
        price: 1199,
        reviews: [
            { rating: 4, comment: "Very light and sturdy", date: "2025-05-06", reviewerName: "Kiran" },
            { rating: 3, comment: "Color was a bit dull", date: "2025-05-07", reviewerName: "Tejas" },
            { rating: 5, comment: "Great value", date: "2025-05-08", reviewerName: "Deep" }
        ],
        qty: 1,
        finalTotal: 1199,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 93,
        title: "Wall Mounted Bookshelf",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8XINe2oB6xzkwRIZ0mC-_PJ-tTvWal1GFlw&s",
        details: "Wooden floating wall shelf for books, decor, and collectibles with sleek finish.",
        price: 899,
        reviews: [
            { rating: 4, comment: "Saves a lot of space", date: "2025-05-10", reviewerName: "Milan" },
            { rating: 5, comment: "Looks classy", date: "2025-05-11", reviewerName: "Ritu" },
            { rating: 3, comment: "Screws could be better", date: "2025-05-13", reviewerName: "Manisha" }
        ],
        qty: 1,
        finalTotal: 899,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 94,
        title: "Recliner Sofa Chair",
        image: "https://www.estre.in/cdn/shop/files/2_6c591671-04e3-437d-b772-1d4ee21c6c87.jpg?v=1743762589",
        details: "Adjustable recliner with cushioned armrests and head support, ideal for relaxation.",
        price: 8499,
        reviews: [
            { rating: 5, comment: "Extremely comfortable", date: "2025-05-15", reviewerName: "Varun" },
            { rating: 4, comment: "Nice for watching TV", date: "2025-05-16", reviewerName: "Mehul" },
            { rating: 3, comment: "A bit bulky", date: "2025-05-17", reviewerName: "Gopal" }
        ],
        qty: 1,
        finalTotal: 8499,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 95,
        title: "Foldable Dining Table Set",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRga2f-7kCJMom_oIvK7GWA3n-cH7jJ4w7HRw&s",
        details: "Space-saving foldable dining table with 4 chairs, perfect for apartments.",
        price: 5999,
        reviews: [
            { rating: 5, comment: "Easy to fold and unfold", date: "2025-05-19", reviewerName: "Jayshree" },
            { rating: 4, comment: "Good finish", date: "2025-05-20", reviewerName: "Nisarg" },
            { rating: 3, comment: "Wood could be thicker", date: "2025-05-21", reviewerName: "Bhavna" }
        ],
        qty: 1,
        finalTotal: 5999,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 96,
        title: "Wooden Shoe Rack",
        image: "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/npl_images_server/SOFA_WSSHRKCHIARA/SOFA_WSSHRKCHIARA_1.jpg?tr=w-3840",
        details: "Compact 3-shelf wooden shoe rack with closed top and modern finish.",
        price: 1399,
        reviews: [
            { rating: 4, comment: "Fits 9 pairs easily", date: "2025-05-22", reviewerName: "Ritesh" },
            { rating: 5, comment: "Sturdy and elegant", date: "2025-05-23", reviewerName: "Prachi" },
            { rating: 3, comment: "Edges were rough", date: "2025-05-24", reviewerName: "Reena" }
        ],
        qty: 1,
        finalTotal: 1399,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 97,
        title: "Queen Size Bed Frame",
        image: "https://images-cdn.ubuy.co.in/65fbcd3e7d2d6765d168c020-allewie-queen-size-bed-frame-with-4.jpg",
        details: "Wooden queen bed frame with headboard and box storage, durable and spacious.",
        price: 10499,
        reviews: [
            { rating: 5, comment: "Perfect size and sturdy", date: "2025-05-25", reviewerName: "Sanket" },
            { rating: 4, comment: "Nice wood quality", date: "2025-05-26", reviewerName: "Bhargav" },
            { rating: 4, comment: "Easy to assemble", date: "2025-05-27", reviewerName: "Palak" }
        ],
        qty: 1,
        finalTotal: 10499,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 98,
        title: "Bean Bag Chair",
        image: "https://m.media-amazon.com/images/I/81IOWcjz2LL._UF894,1000_QL80_.jpg",
        details: "Comfortable XL size bean bag chair with washable cover, ideal for lounging.",
        price: 999,
        reviews: [
            { rating: 5, comment: "Super comfy", date: "2025-05-28", reviewerName: "Aakash" },
            { rating: 4, comment: "Good fabric", date: "2025-05-29", reviewerName: "Kishan" },
            { rating: 4, comment: "Filling could be more", date: "2025-05-30", reviewerName: "Nisha" }
        ],
        qty: 1,
        finalTotal: 999,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 99,
        title: "Office Ergonomic Chair",
        image: "https://thesleepcompany.in/cdn/shop/files/1_7a1a1cde-584f-47e8-bba0-7f66bc2e54e5.webp?v=1750963009&width=700",
        details: "Adjustable office chair with lumbar support, mesh back, and swivel wheels.",
        price: 3499,
        reviews: [
            { rating: 5, comment: "Very comfortable for long hours", date: "2025-06-01", reviewerName: "Kunal" },
            { rating: 4, comment: "Good back support", date: "2025-06-02", reviewerName: "Rajiv" },
            { rating: 3, comment: "Wheels could be smoother", date: "2025-06-03", reviewerName: "Rahul" }
        ],
        qty: 1,
        finalTotal: 3499,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 100,
        title: "Wooden Wardrobe 2 Door",
        image: "https://ik.imagekit.io/2xkwa8s1i/img/wardrobes/r1/WWRB2DMH1GINGHAMCWR1/1.jpg?tr=w-3840",
        details: "Spacious 2-door wooden wardrobe with hanging space and inner shelves.",
        price: 8499,
        reviews: [
            { rating: 4, comment: "Lots of storage", date: "2025-06-04", reviewerName: "Mira" },
            { rating: 5, comment: "Stylish and solid", date: "2025-06-05", reviewerName: "Aditi" },
            { rating: 4, comment: "Color matches description", date: "2025-06-06", reviewerName: "Preeti" }
        ],
        qty: 1,
        finalTotal: 8499,
        category: "furniture",
        gender: "unisex"
    },
    {
        id: 101,
        title: "India Gate Basmati Rice - 5kg",
        image: "https://m.media-amazon.com/images/I/71s30bA7zeL._UF1000,1000_QL80_.jpg",
        details: "Premium aged basmati rice with long grains and aromatic fragrance, ideal for daily cooking.",
        price: 699,
        reviews: [
            { rating: 5, comment: "Great aroma and taste", date: "2025-05-10", reviewerName: "Neha" },
            { rating: 4, comment: "Worth the price", date: "2025-05-11", reviewerName: "Manoj" },
            { rating: 4, comment: "Cooks well", date: "2025-05-12", reviewerName: "Arvind" }
        ],
        qty: 1,
        finalTotal: 699,
        category: "groceries",
        gender: "unisex"
    },
    {
        id: 102,
        title: "Aashirvaad Atta - 10kg",
        image: "https://www.bbassets.com/media/uploads/p/xl/126906_10-aashirvaad-atta-whole-wheat.jpg",
        details: "Whole wheat flour with chakki grinding process, rich in fiber and nutrients.",
        price: 429,
        reviews: [
            { rating: 4, comment: "Soft rotis every time", date: "2025-05-13", reviewerName: "Kiran" },
            { rating: 5, comment: "Trusted brand", date: "2025-05-14", reviewerName: "Snehal" },
            { rating: 3, comment: "Needs airtight storage", date: "2025-05-15", reviewerName: "Divya" }
        ],
        qty: 1,
        finalTotal: 429,
        category: "groceries",
        gender: "unisex"
    },
    {
        id: 103,
        title: "Fortune Sunflower Oil - 5L",
        image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/5/19/b71edd6d-80da-4849-adc1-26723c230e6a_3884_1.png",
        details: "Refined sunflower oil enriched with vitamins A and D, ideal for deep and shallow frying.",
        price: 749,
        reviews: [
            { rating: 5, comment: "Light and healthy", date: "2025-05-16", reviewerName: "Ramesh" },
            { rating: 4, comment: "No smell, cooks well", date: "2025-05-17", reviewerName: "Payal" },
            { rating: 4, comment: "Good packaging", date: "2025-05-18", reviewerName: "Ritu" }
        ],
        qty: 1,
        finalTotal: 749,
        category: "groceries",
        gender: "unisex"
    },
    {
        id: 104,
        title: "Tata Salt - 1kg",
        image: "https://m.media-amazon.com/images/I/614mm2hYHyL.jpg",
        details: "Iodized salt with purity and essential iodine to support mental development.",
        price: 28,
        reviews: [
            { rating: 5, comment: "Basic and essential", date: "2025-05-19", reviewerName: "Meena" },
            { rating: 5, comment: "No clumps, always fresh", date: "2025-05-20", reviewerName: "Rahul" },
            { rating: 4, comment: "Sealed nicely", date: "2025-05-21", reviewerName: "Bhavna" }
        ],
        qty: 1,
        finalTotal: 28,
        category: "groceries",
        gender: "unisex"
    },
    {
        id: 105,
        title: "Amul Butter - 500g",
        image: "https://m.media-amazon.com/images/I/61vr7r8qqsL._UF894,1000_QL80_.jpg",
        details: "Pasteurized table butter made from fresh cream, rich and delicious.",
        price: 265,
        reviews: [
            { rating: 5, comment: "Tastes amazing", date: "2025-05-22", reviewerName: "Sonal" },
            { rating: 4, comment: "Always fresh", date: "2025-05-23", reviewerName: "Jitendra" },
            { rating: 4, comment: "Best for parathas", date: "2025-05-24", reviewerName: "Ravi" }
        ],
        qty: 1,
        finalTotal: 265,
        category: "groceries",
        gender: "unisex"
    },
    {
        id: 106,
        title: "Red Label Tea - 1kg",
        image: "https://m.media-amazon.com/images/I/51w5MjPB7KL.jpg",
        details: "Strong and flavorful tea blend packed with natural antioxidants.",
        price: 499,
        reviews: [
            { rating: 4, comment: "Nice aroma and taste", date: "2025-05-25", reviewerName: "Kishor" },
            { rating: 5, comment: "Daily favorite", date: "2025-05-26", reviewerName: "Anita" },
            { rating: 4, comment: "Value for money", date: "2025-05-27", reviewerName: "Satish" }
        ],
        qty: 1,
        finalTotal: 499,
        category: "groceries",
        gender: "unisex"
    },
    {
        id: 107,
        title: "Kissan Mixed Fruit Jam - 500g",
        image: "https://www.bbassets.com/media/uploads/p/l/266577_11-kissan-mixed-fruit-jam.jpg",
        details: "Tasty fruit jam made with real mixed fruits, perfect for bread and chapati.",
        price: 155,
        reviews: [
            { rating: 4, comment: "Kids love it", date: "2025-05-28", reviewerName: "Nidhi" },
            { rating: 5, comment: "Sweet and tangy", date: "2025-05-29", reviewerName: "Amit" },
            { rating: 3, comment: "Slightly too sweet", date: "2025-05-30", reviewerName: "Devansh" }
        ],
        qty: 1,
        finalTotal: 155,
        category: "groceries",
        gender: "unisex"
    },
    {
        id: 108,
        title: "Maggi 2-Minute Noodles - 12 pack",
        image: "https://m.media-amazon.com/images/I/815wZbQ5bGL._UF894,1000_QL80_.jpg",
        details: "Instant masala noodles that cook in 2 minutes, loved by all ages.",
        price: 144,
        reviews: [
            { rating: 5, comment: "All-time favorite", date: "2025-06-01", reviewerName: "Harsh" },
            { rating: 4, comment: "Quick and tasty", date: "2025-06-02", reviewerName: "Bhargav" },
            { rating: 4, comment: "Comes in handy", date: "2025-06-03", reviewerName: "Payal" }
        ],
        qty: 1,
        finalTotal: 144,
        category: "groceries",
        gender: "unisex"
    },
    {
        id: 109,
        title: "Catch Black Pepper Powder - 100g",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hr1vSApz4JsONeXRmr3pl0ebwZi73mooaA&s",
        details: "Freshly ground black pepper powder in a hygienic sprinkler pack.",
        price: 95,
        reviews: [
            { rating: 4, comment: "Very strong flavor", date: "2025-06-04", reviewerName: "Dipika" },
            { rating: 5, comment: "Great for salads and soups", date: "2025-06-05", reviewerName: "Mehul" },
            { rating: 3, comment: "Bit expensive", date: "2025-06-06", reviewerName: "Snehal" }
        ],
        qty: 1,
        finalTotal: 95,
        category: "groceries",
        gender: "unisex"
    },
    {
        id: 110,
        title: "MDH Garam Masala - 100g",
        image: "https://m.media-amazon.com/images/I/61MyqJ4PkEL.jpg",
        details: "Authentic Indian spice mix for rich and aromatic Indian curries.",
        price: 78,
        reviews: [
            { rating: 5, comment: "Gives perfect flavor", date: "2025-06-07", reviewerName: "Tarun" },
            { rating: 4, comment: "Nice blend", date: "2025-06-08", reviewerName: "Monika" },
            { rating: 4, comment: "Always reliable", date: "2025-06-09", reviewerName: "Kapil" }
        ],
        qty: 1,
        finalTotal: 78,
        category: "groceries",
        gender: "unisex"
    }
]