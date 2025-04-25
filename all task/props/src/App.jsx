import Mname from "./Mname";
import Myself from "./Mself";
import Pro from "./object";
import Card from "./card";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const color=["red","green","blue","yellow","pink","orange"]
  let myname = "ronit";
  let age = 20;
  let city = "delhi";
  let country = "india";
  let hobbies = ["cricket", "football", "coding"];

  const products = [
    { id: 1, name: "Perfume", price: 500 },
    { id: 2, name: "Shirt", price: 1000 },
    { id: 3, name: "Watch", price: 2000 },
    { id: 4, name: "Shoes", price: 1500 },
    { id: 5, name: "Bag", price: 800 },
    { id: 6, name: "Phone Case", price: 300 },
    { id: 7, name: "Headphones", price: 1200 },
    { id: 8, name: "Laptop", price: 50000 },
    { id: 9, name: "Tablet", price: 20000 },
    { id: 10, name: "TV", price: 40000 },
  ];

  const card = [
    {
      id: 1,
      title: "Card 1",
      content: "This is some sample content for card 1.",
      photo: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 2,
      title: "Card 2",
      content: "This is some sample content for card 2.",
      photo: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 3,
      title: "Card 3",
      content: "This is some sample content for card 3.",
      photo: "https://picsum.photos/200/300?random=3",
    },
    {
      id: 4,
      title: "Card 4",
      content: "This is some sample content for card 4.",
      photo: "https://picsum.photos/200/300?random=4",
    },
    {
      id: 5,
      title: "Card 5",
      content: "This is some sample content for card 5.",
      photo: "https://picsum.photos/200/300?random=5",
    },
    {
      id: 6,
      title: "Card 6",
      content: "This is some sample content for card 6.",
      photo: "https://picsum.photos/200/300?random=6",
    },
    {
      id: 7,
      title: "Card 7",
      content: "This is some sample content for card 7.",
      photo: "https://picsum.photos/200/300?random=7",
    },
    {
      id: 8,
      title: "Card 8",
      content: "This is some sample content for card 8.",
      photo: "https://picsum.photos/200/300?random=8",
    },
    {
      id: 9,
      title: "Card 9",
      content: "This is some sample content for card 9.",
      photo: "https://picsum.photos/200/300?random=9",
    },
    {
      id: 10,
      title: "Card 10",
      content: "This is some sample content for card 10.",
      photo: "https://picsum.photos/200/300?random=10",
    },
  ];

  return (
    <>
      <Mname name={myname} />
      <Myself
        name={myname}
        age={age}
        city={city}
        country={country}
        hobbies={hobbies}
      />
      <Pro pro={products} />
      <div className="container">
        <div className="row">
          <Card card={card} />
        </div>
      </div>
      {/* <Ntry /> */}
    </>
  );
}

export default App;
