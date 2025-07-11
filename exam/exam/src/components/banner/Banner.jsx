import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_DATA } from "../../redux/action/AuthAction";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FIND_DATA } from "../../redux/action/AuthAction";
import Cartbtn from "../allbuttons/button/Cartbtn";
import "./banner.css";
const Banner = () => {
  const [mname, setmname] = useState("");
  const dispach = useDispatch();
  const Products = useSelector((state) => state?.alldata?.allpr);
  console.log(Products);

  useEffect(() => {
    dispach(MOVIE_DATA());
  }, []);
  const getname = () => {
    dispach(FIND_DATA(mname));
    setmname("");
  };
  return (
    <div className="container p-5">
      <label>search</label>
      <input type="text" onChange={(e) => setmname(e.target.value)} />
      <button className="btn btn-primary" onClick={() => getname()}>
        search
      </button>
      <div className="row">
        {Products.map((val) => {
          const { thumbnail, price, description, reviews, title } = val;
          return (
            <div className="card" style={{ width: "18rem" }}>
              <img src={thumbnail} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{title}</h5>
                <h4 className="card-title">{price}</h4>
                <p className="card-text">{description}</p>
                <Cartbtn/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
