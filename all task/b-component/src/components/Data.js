const clothes = [
    {
        "id": 1,
        "name": "Formal Shirt",
        "type": "Topwear",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "price": 899,
        "gender": "male",
        "image": "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg"
    },
    {
        "id": 2,
        "name": "Jeans",
        "type": "Bottomwear",
        "sizes": [
            "28",
            "30",
            "32",
            "34",
            "36"
        ],
        "price": 1299,
        "gender": "male",
        "image": "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
    },
    {
        "id": 3,
        "name": "Blazer",
        "type": "Outerwear",
        "sizes": [
            "M",
            "L",
            "XL"
        ],
        "price": 2499,
        "gender": "male",
        "image": "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg"
    },
    {
        "id": 4,
        "name": "Trousers",
        "type": "Bottomwear",
        "sizes": [
            "30",
            "32",
            "34",
            "36"
        ],
        "price": 1099,
        "gender": "male",
        "image": "https://images.pexels.com/photos/10040313/pexels-photo-10040313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 5,
        "name": "Kurti",
        "type": "Topwear",
        "sizes": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "price": 699,
        "gender": "female",
        "image": "https://images.pexels.com/photos/20702673/pexels-photo-20702673/free-photo-of-elegant-woman-posing-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 6,
        "name": "Palazzo Pants",
        "type": "Bottomwear",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "price": 899,
        "gender": "female",
        "image": "https://images.pexels.com/photos/31145815/pexels-photo-31145815/free-photo-of-stylish-woman-in-red-dress-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 7,
        "name": "Saree",
        "type": "Traditional",
        "sizes": [
            "Free Size"
        ],
        "price": 1599,
        "gender": "female",
        "image": "https://images.pexels.com/photos/9419149/pexels-photo-9419149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 8,
        "name": "Lehenga",
        "type": "Traditional",
        "sizes": [
            "M",
            "L",
            "XL"
        ],
        "price": 2999,
        "gender": "female",
        "image": "https://www.mahimamahajan.in/cdn/shop/files/Snapinst.app_475733213_18442303423077374_5472182372976620484_n_1080_1800x1800.jpg?v=1742031893"
    },
    {
        "id": 9,
        "name": "Anarkali Dress",
        "type": "Ethnic Wear",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "price": 2199,
        "gender": "female",
        "image": "https://images.pexels.com/photos/5922737/pexels-photo-5922737.jpeg"
    },
    {
        "id": 10,
        "name": "Hoodie",
        "type": "Outerwear",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "price": 1499,
        "gender": "unisex",
        "image": "https://images.pexels.com/photos/9594679/pexels-photo-9594679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 11,
        "name": "T-Shirt",
        "type": "Topwear",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "price": 499,
        "gender": "unisex",
        "image": "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg"
    },
    {
        "id": 12,
        "name": "Joggers",
        "type": "Bottomwear",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "price": 799,
        "gender": "unisex",
        "image": "https://images.pexels.com/photos/10911532/pexels-photo-10911532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 13,
        "name": "Jacket",
        "type": "Outerwear",
        "sizes": [
            "M",
            "L",
            "XL"
        ],
        "price": 1799,
        "gender": "unisex",
        "image": "https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg"
    },
    {
        "id": 14,
        "name": "Denim Jacket",
        "type": "Outerwear",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "price": 1999,
        "gender": "unisex",
        "image": "https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 15,
        "name": "Crop Top",
        "type": "Topwear",
        "sizes": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "price": 599,
        "gender": "female",
        "image": "https://images.pexels.com/photos/3334783/pexels-photo-3334783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 16,
        "name": "Cargo Pants",
        "type": "Bottomwear",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "price": 1099,
        "gender": "unisex",
        "image": "https://images.pexels.com/photos/12212788/pexels-photo-12212788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 17,
        "name": "Track Suit",
        "type": "Sportswear",
        "sizes": [
            "M",
            "L",
            "XL"
        ],
        "price": 1799,
        "gender": "male",
        "image": "https://images.pexels.com/photos/26887062/pexels-photo-26887062/free-photo-of-man-in-brand-sportswear.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 18,
        "name": "Gown",
        "type": "Western Wear",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "price": 2899,
        "gender": "female",
        "image": "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 19,
        "name": "Shirt Dress",
        "type": "Casual Wear",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "price": 1299,
        "gender": "female",
        "image": "https://images.pexels.com/photos/428348/pexels-photo-428348.jpeg"
    },
    {
        "id": 20,
        "name": "Polo Shirt",
        "type": "Topwear",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "price": 899,
        "gender": "male",
        "image": "https://images.pexels.com/photos/3228848/pexels-photo-3228848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]

export default clothes