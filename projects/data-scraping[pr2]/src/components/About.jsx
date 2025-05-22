import React from "react";

const About = ({ info }) => {
//   console.log(info);

  return (
    <section className="about">
      <div className="container d-flex justify-content-center ">
        <div className="info text-center col-8 d-flex flex-column align-items-center justify-content-between">
          {info.map((i) => {
            const { id, title,img } = i;

            {
              if (id === 1) {
                return <h1 key={id}>{title}</h1>;
              }else if(id===2){
                return <span key={id} >{title}</span>;
              } else if(id===3){
                return <p key={id} className="m-5">{title}</p>;
              }else if(id===4){
                return <img  key={id} className="d-block "  width={200} src={img} alt=""/>
              }else if(id===5){
               return <span key={id} >{title}</span>;
              }
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
