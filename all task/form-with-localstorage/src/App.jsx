import "./App.css";
import FormValidation from "./formValidation.jsx";
import Data from "./Data.jsx";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [input, setInput] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    gender: "",
    language: [],
    city: "",
    comments: "",
  });
  const [formerrors, setFormErrors] = useState({});
  const [editId, setEditId] = useState();
  const [formdata, setFormData] = useState(
    localStorage.getItem("formdata")
      ? JSON.parse(localStorage.getItem("formdata"))
      : []
  );

  const fonrminput = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setInput({ ...input, language: [...input.language, value] });
      } else {
        setInput({
          ...input,
          language: input.language.filter((item) => {
            return item !== value;
          }),
        });
      }
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const Validation = () => {
    let Check = true;
    let err = {
      username: "",
      useremail: "",
      userpassword: "",
      gender: "",
      language: [],
      city: "",
      comments: "",
    };
    if (!input.username) {
      err.username = "Name Is Required";
      Check = false;
    } else if (formdata.some((item) => item.username === input.username)) {
      err.username = "Name Already Exists";
      Check = false;
    }
    if (!input.useremail) {
      err.useremail = "Email Is Required";
      Check = false;
    } else if (
      !input.useremail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      err.useremail = "Enter Valid Email";
      Check = false;
    } else if (
      formdata.some((item) => {
        return item.useremail === input.useremail;
      })
    ) {
      err.useremail = "Email Already Exists";
      Check = false;
    }
    if (!input.userpassword) {
      err.userpassword = "Password Is Required";
      Check = false;
    } else if (
      !input.userpassword.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      err.userpassword = "Enter Valid Password";
      Check = false;
    }
    if (!input.gender) {
      err.gender = "please select gender";
      Check = false;
    }
    if (input.language.length == 0) {
      err.language = "please select language";
      Check = false;
    }
    if (!input.city) {
      err.city = "please select city";
      Check = false;
    }
    if (!input.comments) {
      err.comments = "please enter comments";
      Check = false;
    }
    setFormErrors(err);
    return Check;
  };
  const formsubmit = (e) => {
    e.preventDefault();
    if (Validation()) {
      if (editId!==null) {
        const updatedFormData = formdata.map((val) => {
          if (val.id === editId) {
            return {
              ...val,
              username: input.username,
              useremail: input.useremail,
              userpassword: input.userpassword,
              gender: input.gender,
              language: input.language,
              city: input.city,
              comments: input.comments,
            };
          }
          return val;
        });
        setFormData(updatedFormData);
        localStorage.setItem("formdata", JSON.stringify(updatedFormData));
        setEditId(null);
      } else {
        alert("form submitted");
        let obj = {
          ...input,
          id: Math.floor(Math.random() * 1000),
        };
        const update = [...formdata, obj];
        setFormData(update);
        localStorage.setItem("formdata", JSON.stringify(update));
      }
    }

    setInput({
      username: "",
      useremail: "",
      userpassword: "",
      gender: "",
      language: [],
      city: "",
      comments: "",
    });
  };

  const deletedata = (id) => {
    let del = formdata.filter((val) => {
      return val.id !== id;
    });
    setFormData(del);
    localStorage.setItem("formdata", JSON.stringify(del));
  };
  const editdata = (id, val) => {
    setEditId(id);
    setInput(val);
  };

  return (
    <>
      <FormValidation
        formsubmit={formsubmit}
        fonrminput={fonrminput}
        input={input}
        formerrors={formerrors}
      />
      <Data formdata={formdata} deletedata={deletedata} editdata={editdata} />
    </>
  );
}

export default App;
