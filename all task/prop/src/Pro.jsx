import React from "react";

const Pro = ({ profile }) => {
  console.log(profile);

  return (
    <div className="container">
      <div className="row">
        {
          profile.filter((p) => {
            return (
              <div className="card col-md-3 m-3 bg-light" style={{ width: "18rem" }}>
                <div className="card-body text-center">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.age}</p>
                  <p className="card-text">{p.city}</p>
                  <p className="card-text">{p.occupation}</p>
                  <p className="card-text">{p.hobbies}</p>
                  <p className="card-text">{p.favoriteFood}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Pro;
