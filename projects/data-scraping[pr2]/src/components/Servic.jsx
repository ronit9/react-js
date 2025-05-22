import React from "react";
import { FaTshirt } from "react-icons/fa";
import { FaRegMoneyBill1 } from "react-icons/fa6";

const Servic = ({ services, cards }) => {
  // console.log(cards);

  // const cards=services[3].cards

  return (
    <section className="services">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-5 p-5">
            {services.map((i) => {
              const { id, title } = i;

              if (id === 1) {
                return (
                  <h6 key={id} className="fw-bold">
                    {title}
                  </h6>
                );
              } else if (id === 2) {
                return (
                  <h1 key={id} className="my-4">
                    {title}
                  </h1>
                );
              } else if (id === 3) {
                return (
                  <p key={id} className="mb-5 fw-semibold">
                    {title}
                  </p>
                );
              }
            })}
            <button>learn More</button>
          </div>
          <div className="col-6 p-4 d-flex">
            <div className="col-5 m-4  text-center ">
              {cards.slice(0, 2).map((i) => {
                const { id, title, text } = i;

                return (
                  <div className="card  p-4 mb-3" key={id}>
                    <div className="icon">
                      {id === 1 ? (
                        <FaTshirt className="fs-1 mb-4" />
                      ) : (
                        <FaRegMoneyBill1 className="fs-1 mb-4" />
                      )}
                    </div>
                    <h3 className="fw-bold mb-3">{title}</h3>
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
            <div className="col-5 m-4 text-center ">
              {cards.slice(-2).map((i) => {
                const { id, title, text } = i;

                return (
                  <div className="card mb-3  p-4 " key={id}>
                    <div className="icon">
                      {id === 1 ? (
                        <FaTshirt className="fs-1 mb-4" />
                      ) : (
                        <FaRegMoneyBill1 className="fs-1 mb-4" />
                      )}
                    </div>
                    <h3 className="fw-bold mb-3">{title}</h3>
                    <p>{text}</p>
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

export default Servic;
