import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Form() {
  const [currentState, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [e, setErr] = useState("");
  const { name, email, message } = formState;

  const submit = (x) => {
    x.preventDefault();
    if (!e) {
      setForm({ [x.target.name]: x.target.value });
      console.log("Form", formState);
    }
  };

  const handleErrors = (x) => {
    if (x.target.name === "email") {
      const valid = validateEmail(x.target.value);
      if (!valid) {
        setErrorMessage("Invalid email!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!x.target.value.length) {
        setErrorMessage(`${x.target.name} is required!`);
      } else {
        setErrorMessage("");
      }
    }
  };
  return (
      <div>
          <h1 data-testid="h1tag" className="text-center" style={{ backgroundColor: "#3C3D35", 
            color: "#F7F6EF", padding: "20px"}}>Contact Me</h1>
            <form  id="contact-form" onSubmit={handleSubmit} style={{ backgroundColor: "#122240", color: "#c0a98e"}}>
                <Form.Group></Form.Group>
            </form>
      </div>
  )
}
