import React from "react";
import { useState } from "react";
const Works = ({ works, catagory, clothes }) => {
  // console.log(clothes);
  const [filters, setFilters] = useState([]);

  const filter = (title) => {
    const result = clothes.filter((c) => c.gender === title);
    setFilters(result);
  };

  return (
    <section className="works">
      <div className="container d-flex justify-content-center">
        <div className="col-6 text-center">
          {works.map((w) => {
            const { id, title } = w;
            return id === 1 ? (
              <h3 key={id}>{title}</h3>
            ) : id === 2 ? (
              <h1 className="my-4" key={id}>
                {title}
              </h1>
            ) : (
              <p className="fw-semibold" key={id}>
                {title}
              </p>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 d-flex justify-content-between">
            {catagory.map((c) => {
              return (
                <button
                  key={c.id}
                  onClick={() => filter(c.title)}
                 className="my-4"
                >
                  {c.title}
                </button>
              );
            })}
          </div>
          <div className="col-12">
            <div className="row">
              {filters.length
                ? filters.map((f) => {
                    const { id, name, type, sizes, price, gender, image } = f;
                    return (
                      <div className="card col-4 p-2" key={id} width="18rem">
                        <div className="img">
                          <img
                            src={image}
                            className="card-img-top "
                            alt="..."
                          />
                        </div>
                        <div className="card-body text-center">
                          <h5 className="card-title">{name}</h5>
                          <p className="card-text">{type}</p>
                          <p className="card-text">{sizes.join(", ")}</p>
                          <p className="card-text">{gender}</p>
                          <p className="card-text">{price}</p>
                        </div>
                      </div>
                    );
                  })
                : clothes.map((f) => {
                    const { id, name, type, sizes, price, gender, image } = f;
                    return (
                      <div className="card col-4 p-2 " key={id}>
                        <div className="img">
                          <img
                            src={image}
                            className="card-img-top "
                            width="100%"
                            height="100%"
                            alt="..."
                          />
                        </div>
                        <div className="card-body  text-center">
                          <h5 className="card-title">{name}</h5>
                          <p className="card-text">{type}</p>
                          <p className="card-text">{sizes.join(", ")}</p>
                          <p className="card-text">{gender}</p>
                          <p className="card-text">{price}</p>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
