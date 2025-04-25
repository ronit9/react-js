import 'bootstrap/dist/css/bootstrap.min.css';
const Card = (props) => {
  
  return (
    <>
      <h1 className="text-center">Card props</h1>
      {
      props.card.map((c) => {
        return (
            <div className="col-md-3 mb-3">
            <div className="card " style={{ width: "18rem" }}>
            <img src={c.photo} className="card-img-top p-2 " alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">{c.title}</h5>
              <p className="card-text text-center">
                {c.content}
              </p>
              
            </div>
          </div>
            </div>
        );
      })}

      
    </>
  );
};

// const Ntry = () => {
//   return(
//     <h1>hello</h1>
//   )
// };


export default Card;
