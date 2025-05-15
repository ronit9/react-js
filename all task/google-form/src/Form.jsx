import { useState } from "react";
const Form = ({
  forminput,
  headertext,
  submitForm,
  addfrom,
  removefrom,
  formalert,
}) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center text-center">
            <h1>Google Form</h1>
            <div className="col-9 my-3">
              <div className="img ">
                <img
                  src="https://lh7-us.googleusercontent.com/glZ9ZgvTQOpX1gnRNzUaY0tM_ow3qekmTgaNxNMVJWBj7R-vFANAYqN9KvAi2efGEduDxqfG631lpH1d-xii6Gmf2QwpjXIslBl1Yl2TBbHqXMSavQtIHKSGqnXJQgWXsT4MdHqQpvKmmp22Z4QOUhXk3fZTAI2OiYraCbE7jXWvJIwJt2skDY68DDtO7JMt9M8Sw9Z-?key=xn39FIxCbjbHdSGKCQ_B1w"
                  alt=""
                />
              </div>
            </div>
            {headertext.map((item, index) => {
              const { content, description, username, useremail, userpassword, usernumber, userComents } = item;
              return (
                <div key={index}>
                  <h1>Form no:-{index + 1}</h1>
                  <form
                    key={index}
                    className=" d-flex flex-column align-items-center m-3"
                  >
                    <div className="col-9 text-start  head  p-4">
                      <input
                        type="text"
                        value={content}
                        name="content"
                        onChange={(e) => forminput(e, index)}
                      />

                      <input
                        type="text"
                        placeholder="Form Description"
                        value={description}
                        name="description"
                        onChange={(e) => forminput(e, index)}
                      />

                      {formalert.description && (
                        <p className="text-danger">{formalert.description}</p>
                      )}
                    </div>
                    <div className="col-9  text-start icard  p-4">
                      <label>Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={username}
                        name="username"
                        onChange={(e) => forminput(e, index)}
                      />
                      {formalert.username && (
                        <p className="text-danger">{formalert.username}</p>
                      )}
                    </div>
                    <div className="col-9 text-start icard  p-4">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={useremail}
                        name="useremail"
                        onChange={(e) => forminput(e, index)}
                      />
                      {formalert.useremail && (
                        <p className="text-danger">{formalert.useremail}</p>
                      )}
                    </div>
                    <div className="col-9 text-start icard  p-4">
                      <label>password</label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        value={userpassword}
                        name="userpassword"
                        onChange={(e) => forminput(e, index)}
                      />
                      {formalert.userpassword && (
                        <p className="text-danger">{formalert.userpassword}</p>
                      )}
                    </div>
                    <div className="col-9 text-start icard  p-4">
                      <label>Phone Number</label>
                      <input
                        type="number"
                        placeholder="Enter your phone number"
                        value={usernumber}
                        name="usernumber"
                        onChange={(e) => forminput(e, index)}
                      />
                      {formalert.usernumber && (
                        <p className="text-danger">{formalert.usernumber}</p>
                      )}
                    </div>
                    <div className="col-9 text-start icard  p-4">
                      <label>Coments</label>
                      <input
                        type="text"
                        placeholder="Enter your Coments"
                        value={userComents}
                        name="userComents"
                        onChange={(e) => forminput(e, index)}
                      />
                      {formalert.userComents && (
                        <p className="text-danger">{formalert.userComents}</p>
                      )}
                    </div>
                  </form>
                  {index !== 0 && (
                    <button onClick={() => removefrom(index)}>remove</button>
                  )}
                </div>
              );
            })}
            <div className="d-flex flex-column align-items-center">
              <button onClick={(e) => submitForm(e)}>Submit</button>
              <button onClick={() => addfrom()}>add</button>
            </div>
          </div>
          <div className="col-9 d-flex justify-content-center"></div>
        </div>
      </section>
    </>
  );
};

export default Form;
