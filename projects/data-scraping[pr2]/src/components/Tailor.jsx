import React from "react";

const Tailor = ({ tailor }) => {
  // console.log(tailor);

  return (
    <section className="tailor">
      <div className="container">
        <div className="row">
          <div className="col-6">
            {tailor.map((i, index) => {
              return index == 0 ? <h1 key={index}>{i.title}</h1> : null;
            })}
          </div>
          <div className="col-6">
            {tailor.map((i, index) => {
              return index == 1 ? <p key={index}>{i.title}</p> : null;
            })}
          </div>
        </div>
        <div className="img col-6">
          <img
            src="https://kit.bagigambar.net/tayla/wp-content/uploads/sites/26/2021/08/tailor-comparing-fabric-YK8EH4H-1024x683.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Tailor;
