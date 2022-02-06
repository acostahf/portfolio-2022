import React from "react";
import styles from "../styles/Form.module.scss";
import { useForm } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  if (state.succeeded) {
    return <p>Message Sent!</p>;
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <img
            src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png"
            alt="icon"
          />
        </div>
        <input id="name" type="text" name="name" placeholder="Name" required />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Im looking to hire you for ..."
          required
        ></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
