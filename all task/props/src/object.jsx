const pro = (props) => {
  return (
    <>
      <h1 className="text-center">object props</h1>
      {
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">price</th>
            </tr>
          </thead>
          <tbody>
            {props.pro.map((p) => {
              return (
                <tr>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      }
      <hr />
    </>
  );
};
export default pro;
