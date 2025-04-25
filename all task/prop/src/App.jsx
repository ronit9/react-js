import { use, useState } from "react";
import Card from "./card";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./counter";
import Pro from "./pro";
function App() {
  const card = [
    {
      name: "John Doe",
      age: 30,
      city: "New York",
      " occupation": "Software Engineer",
      hobbies: ["reading", "hiking"],
      favoriteFood: "pizza",
    },
    {
      name: "Jane Smith",
      age: 25,
      city: "Los Angeles",
      occupation: "Doctor",
      hobbies: ["painting", "playing guitar"],
      favoriteFood: "sushi",
    },
    {
      name: "Bob Johnson",
      age: 40,
      city: "Chicago",
      occupation: "Lawyer",
      hobbies: ["running", "cooking"],
      favoriteFood: "steak",
    },
    {
      name: "Alice Brown",
      age: 28,
      city: "Houston",
      occupation: "Teacher",
      hobbies: ["writing", "photography"],
      favoriteFood: "tacos",
    },
    {
      name: "Mike Davis",
      age: 35,
      city: "Seattle",
      occupation: "Engineer",
      hobbies: ["playing basketball", "listening to music"],
      favoriteFood: "burgers",
    },
    {
      name: "Emily Chen",
      age: 22,
      city: "San Francisco",
      occupation: "Student",
      hobbies: ["dancing", "playing video games"],
      favoriteFood: "ramen",
    },
    {
      name: "David Lee",
      age: 38,
      city: "Boston",
      occupation: "Scientist",
      hobbies: ["reading", "hiking"],
      favoriteFood: "seafood",
    },
    {
      name: "Sophia Patel",
      age: 29,
      city: "Denver",
      occupation: "Artist",
      hobbies: ["painting", "playing music"],
      favoriteFood: "curry",
    },
    {
      name: "Kevin White",
      age: 32,
      city: "Washington D.C.",
      occupation: "Politician",
      hobbies: ["running", "reading"],
      favoriteFood: "barbecue",
    },
    {
      name: "Olivia Martin",
      age: 26,
      city: "Miami",
      occupation: "Journalist",
      hobbies: ["writing", "photography"],
      favoriteFood: "cuban food",
    },
  ];

  const profile = [
    {
      name: "Apple iPhone",
      price: 999.99,
      brand: "Apple",
      category: "Electronics",
      description: "Latest iPhone model with advanced features",
      rating: 4.5,
      reviews: 1000,
      image: "https://example.com/iphone.jpg",
    },
    {
      name: "Samsung TV",
      price: 1299.99,
      brand: "Samsung",
      category: "Electronics",
      description: "Large screen TV with 4K resolution",
      rating: 4.2,
      reviews: 500,
      image: "https://example.com/samsung-tv.jpg",
    },
    {
      name: "Nike Shoes",
      price: 79.99,
      brand: "Nike",
      category: "Fashion",
      description: "Comfortable running shoes with stylish design",
      rating: 4.8,
      reviews: 2000,
      image: "https://example.com/nike-shoes.jpg",
    },
    {
      name: "Sony Headphones",
      price: 149.99,
      brand: "Sony",
      category: "Electronics",
      description: "Wireless headphones with noise cancellation",
      rating: 4.5,
      reviews: 1000,
      image: "https://example.com/sony-headphones.jpg",
    },
    {
      name: "Canon Camera",
      price: 499.99,
      brand: "Canon",
      category: "Electronics",
      description: "Professional camera with advanced features",
      rating: 4.8,
      reviews: 500,
      image: "https://example.com/canon-camera.jpg",
    },
    {
      name: "Dell Laptop",
      price: 799.99,
      brand: "Dell",
      category: "Electronics",
      description: "High-performance laptop with long battery life",
      rating: 4.2,
      reviews: 1000,
      image: "https://example.com/dell-laptop.jpg",
    },
    {
      name: "Adidas Jacket",
      price: 99.99,
      brand: "Adidas",
      category: "Fashion",
      description: "Waterproof jacket with breathable material",
      rating: 4.5,
      reviews: 500,
      image: "https://example.com/adidas-jacket.jpg",
    },
    {
      name: "Microsoft Xbox",
      price: 299.99,
      brand: "Microsoft",
      category: "Gaming",
      description: "Next-generation gaming console with 4K resolution",
      rating: 4.8,
      reviews: 2000,
      image: "https://example.com/microsoft-xbox.jpg",
    },
    {
      name: "LG Refrigerator",
      price: 999.99,
      brand: "LG",
      category: "Home Appliances",
      description: "Large capacity refrigerator with advanced features",
      rating: 4.2,
      reviews: 500,
      image: "https://example.com/lg-refrigerator.jpg",
    },
    {
      name: "HP Printer",
      price: 199.99,
      brand: "HP",
      category: "Office Supplies",
      description: "Wireless printer with high-quality printing",
      rating: 4.5,
      reviews: 1000,
      image: "https://example.com/hp-printer.jpg",
    },
  ];

  return (
    <>
      <Card card={card} />
      <hr />
      <Counter />
      <hr />
      <Pro product={profile} />
    </>
  );
}

export default App;
