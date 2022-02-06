import React from "react";
import Form from "../components/Form";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <h1>Get in touch</h1>
      <Form />
    </div>
  );
};

export default Contact;
