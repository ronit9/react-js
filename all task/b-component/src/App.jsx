import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Filter from "./components/Filter";
import Slider from "./components/Slider";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Filter />
      <Slider />
    </>
  );
}

export default App;
