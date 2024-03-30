import React from "react";
import Form from "../Components/Form";
import Button from "../Components/Button";

const Contact = () => {
  return (
    <>
      <div className="container-contacto">
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form />
      </div>
      <Button />
    </>
  );
};

export default Contact;
