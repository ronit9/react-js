import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./form";
import { useState } from "react";
import { Alert } from "bootstrap";

function App() {
  const [headertext, setheadertext] = useState([
    {
      content: "Contact Information",
      description: "",
      username: "",
      useremail: "",
      userpassword: "",
      usernumber: "",
      userComents: "",
    },
  ]);
  const [formalert, setformalert] = useState([
    {
      username: "",
      useremail: "",
      userpassword: "",
      usernumber: "",
      userComents: "",
    },
  ]);
  // console.log(headertext);

  const forminput = (e, index) => {
    const { name, value } = e.target;
    let addata = [...headertext];
    addata[index][name] = value;
    setheadertext(addata);
  };
  const addfrom = () => {
    setheadertext([
      ...headertext,
      {
        content: "Contact Information",
        description: "",
        username: "",
        useremail: "",
        userpassword: "",
        usernumber: "",
        userComents: "",
      },
    ]);
  };

  const showalert = () => {
    let check = true;
    const popup = {
      description: "",
      username: "",
      useremail: "",
      userpassword: "",
      usernumber: "",
      userComents: "",
    };
    // const emailPattern = ;
    headertext.map((field) => {
      if (field.content === "") {
        popup.content = "Please Enter Your content";
        check = false;
      }
      if (field.description === "") {
        popup.description = "Please Enter Your description";
        check = false;
      }
      if (field.username === "") {
        popup.username = "Please Enter Your Name";
        check = false;
      }
      if (field.useremail === "") {
        popup.useremail = "Please Enter Your Email";
        check = false;
      } else if (
        !field.useremail.match(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        )
      ) {
        popup.useremail = "Please Enter Valid Email";
        check = false;
      }
      if (
        !field.userpassword.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        )
      ) {
        popup.userpassword =
          "Password must be at least 8 characters with uppercase,special characters and numbers";
        check = false;
      } else if (field.userpassword === "") {
        popup.userpassword = "Please Enter Your Password";
        check = false;
      }
      if (!field.usernumber.match(/^\d{10}$/)) {
        popup.usernumber = "Please Enter valid Number";
        check = false;
      } else if (field.usernumber === "") {
        popup.usernumber = "Please Enter Your Number";
        check = false;
      }

      if (field.userComents === "") {
        popup.userComents = "Please Enter Your Coments";
        check = false;
      }
    });
    setformalert(popup);
    return check;
  };
  const submitForm = (e) => {
    e.preventDefault();

    if (showalert()) {
      console.log(headertext);
      setheadertext([
        {
          content: "Contact Information",
          description: "",
          username: "",
          useremail: "",
          userpassword: "",
          usernumber: "",
          userComents: "",
        },
      ]);
    }
  };
  const removefrom = (index) => {
    setheadertext(
      headertext.filter((item, i) => {
        return i !== index;
      })
    );
  };
  return (
    <>
      <Form
        forminput={forminput}
        headertext={headertext}
        submitForm={submitForm}
        addfrom={addfrom}
        removefrom={removefrom}
        formalert={formalert}
      />
    </>
  );
}

export default App;
