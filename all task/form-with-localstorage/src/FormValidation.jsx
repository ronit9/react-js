import { Container, FormControl } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const formValidation = ({ formsubmit, fonrminput, input, formerrors }) => {
  // console.log(formerrors);

  return (
    <section className="input">
      <Container className="col-6 ">
        <h1 className="my-5">Form Validation</h1>
        <FloatingLabel label="name" className="mb-3">
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="enter your name"
            name="username"
            onChange={fonrminput}
            value={input.username}
          />

          {formerrors.username ? (
            <p className="text-danger">{formerrors.username}</p>
          ) : null}
        </FloatingLabel>
        <FloatingLabel label="Email address" className="mb-3">
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="name@example.com"
            name="useremail"
            onChange={fonrminput}
            value={input.useremail}
          />
          {formerrors.useremail ? (
            <p className="text-danger">{formerrors.useremail}</p>
          ) : null}
        </FloatingLabel>
        <FloatingLabel className="mb-3" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            name="userpassword"
            onChange={fonrminput}
            value={input.userpassword}
          />
          {formerrors.userpassword ? (
            <p className="text-danger">{formerrors.userpassword}</p>
          ) : null}
        </FloatingLabel>
        <FloatingLabel className="mb-3 d-flex  border p-3 rounded justify-content-between">
          <Form.Check
            type="radio"
            label="male"
            name="gender"
            value="male"
            onChange={fonrminput}
            checked={input.gender === "male"}
          />
          <Form.Check
            type="radio"
            label="female"
            name="gender"
            value="female"
            onChange={fonrminput}
            checked={input.gender === "female"}
          />
          <Form.Check
            type="radio"
            label="other"
            name="gender"
            value="other"
            onChange={fonrminput}
            checked={input.gender === "other"}
          />
          {formerrors.gender ? (
            <div className="text-danger flex-wrap">{formerrors.gender}</div>
          ) : null}
        </FloatingLabel>

        <FloatingLabel className="mb-3 d-flex col-12 border p-3 rounded justify-content-between">
          <Form.Check
            type="checkbox"
            label="html"
            name="language"
            value="html"
            onChange={fonrminput}
            checked={input.language.includes("html")}
          />
          <Form.Check
            type="checkbox"
            label="css"
            name="language"
            value={"css"}
            onChange={fonrminput}
            checked={input.language.includes("css")}
          />
          <Form.Check
            type="checkbox"
            label="bootstrap"
            name="language"
            value={"bootstrap"}
            onChange={fonrminput}
            checked={input.language.includes("bootstrap")}
          />
          <Form.Check
            type="checkbox"
            label="js"
            name="language"
            value={"js"}
            onChange={fonrminput}
            checked={input.language.includes("js")}
          />
          <Form.Check
            type="checkbox"
            label="react"
            name="language"
            value={"react"}
            onChange={fonrminput}
            checked={input.language.includes("react")}
          />
          <Form.Check
            type="checkbox"
            label="node"
            name="language"
            value={"node"}
            onChange={fonrminput}
            checked={input.language.includes("node")}
          />
          <Form.Check
            type="checkbox"
            label="c++"
            name="language"
            value={"c++"}
            onChange={fonrminput}
            checked={input.language.includes("c++")}
          />
        </FloatingLabel>
        {formerrors.language ? (
          <div className="text-danger flex-wrap">{formerrors.language}</div>
        ) : null}
        <div className="mb-3 col-6">
          <Form.Select
            aria-label="Default select example "
            name="city"
            value={input.city}
            onChange={fonrminput}
          >
            <option value="">---Select city---</option>
            <option value="Vadodara">Vadodara</option>
            <option value="Surat">Surat</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Rajkot">Rajkot</option>
            <option value="Jamnagar">Jamnagar</option>
            <option value="Bhavnagar">Bhavnagar</option>
            <option value="Junagadh">Junagadh</option>
            <option value="Gandhinagar">Gandhinagar</option>
            <option value="Bharuch">Bharuch</option>
            <option value="Nadiad">Nadiad</option>
            <option value="Anand">Anand</option>
            <option value="Kheda">Kheda</option>
          </Form.Select>
          {formerrors.city ? (
            <div className="text-danger flex-wrap">{formerrors.city}</div>
          ) : null}
        </div>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            name="comments"
            onChange={fonrminput}
            value={input.comments}
          />
          {formerrors.comments ? (
            <div className="text-danger flex-wrap">{formerrors.comments}</div>
          ) : null}
        </FloatingLabel>
        <Button type="submit" onClick={(e) => formsubmit(e)} variant="success">
          Success
        </Button>
      </Container>
    </section>
  );
};

export default formValidation;
