import "./banner.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { product } from "../../producs";
import { Container, Row } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
 
import Card from "react-bootstrap/Card";
import Cartbtn from "../allbuttons/button/Cartbtn";
import { ADD_TO_CART } from "../../redux/action/AuthAction";
const Banner = () => {
  const dispatch = useDispatch();
  const [allmovies, setAllmovies] = useState(product);

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const filtered = allmovies.filter((movie) =>
      movie.Title.toLowerCase().includes(search.toLowerCase())
    );
    setAllmovies(filtered);
  };
  useEffect(() => {
    handleSearch();
  }, [search]);
  const AddToCart = (id) => {
   dispatch(ADD_TO_CART(id));
  };
  return (
    <>
      <Container>
        <form className="text-center my-4">
          <input
            id="searchInput"
            type="text"
            className="form-control mx-auto search-input"
            placeholder="Enter movie name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <Row className="d-flex justify-content-center">
          {search.length > 0
            ? allmovies.map((movie) => (
                <Card
                  className="shadow-sm movie-card m-3"
                  style={{ width: "18rem", border: "none" }}
                >
                  <div className="position-relative">
                    <Card.Img
                      variant="top"
                      src={movie.Poster}
                      alt={movie.Title}
                      className="card-img"
                    />
                    <Badge bg="warning" text="dark" className="rating-badge">
                      ★ {movie.imdbRating}
                    </Badge>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="mb-1 text-truncate">
                      {movie.Title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {movie.Year} • {movie.Genre}
                    </Card.Subtitle>
                    <Card.Text className="mb-2" style={{ fontSize: "0.9rem" }}>
                      {movie.Plot.length > 100
                        ? movie.Plot.slice(0, 100) + "..."
                        : movie.Plot}
                    </Card.Text>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        Director: {movie.Director}
                      </small>
                    </div>
                    <div className="mt-2">
                      <Cartbtn />
                    </div>
                  </Card.Body>
                </Card>
              ))
            : product.map((movie) => (
                <Card
                  className="shadow-sm movie-card m-3"
                  style={{ width: "18rem", border: "none" }}
                >
                  <div className="position-relative">
                    <Card.Img
                      variant="top"
                      src={movie.Poster}
                      alt={movie.Title}
                      className="card-img"
                    />
                    <Badge bg="warning" text="dark" className="rating-badge">
                      ★ {movie.imdbRating}
                    </Badge>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="mb-1 text-truncate">
                      {movie.Title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {movie.Year} • {movie.Genre}
                    </Card.Subtitle>
                    <Card.Text className="mb-2" style={{ fontSize: "0.9rem" }}>
                      {movie.Plot.length > 100
                        ? movie.Plot.slice(0, 100) + "..."
                        : movie.Plot}
                    </Card.Text>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        Director: {movie.Director}
                      </small>
                    </div>
                    <div className="mt-2">
                      <button  onClick={() => AddToCart(movie.id)}>
                        <Cartbtn />
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
        </Row>
      </Container>
    </>
  );
};
export default Banner;
