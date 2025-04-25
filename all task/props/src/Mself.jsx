const myself = (props) => {
  return (
    <>
      <h1 className="text-center">multiple props</h1>
      <h2>
      <ul>
        <li>name:{props.name}</li>
        <li>age:{props.age}</li>
        <li>city:{props.city}</li>
        <li>country:{props.country}</li>
        <li>hobby
          {props.hobbies.map((hobby) => (
            <ul>
              <li>{hobby}</li>
            </ul>
            
          ))}
        </li>
      </ul>
      </h2>
      <hr />
    </>
  );
};
export default myself;
