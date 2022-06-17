import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".message");

    emailjs
      .sendForm(
        "service_feb5u4n",
        "template_v0try12",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          // console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class = 'success'> Message envoyé !</> ";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 3000);
        },
        (error) => {
          // console.log(error.text);
          formMess.innerHTML =
            "<p class = 'error'> Une erreur s'est produite. Veuillez réessayer !</> ";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 3000);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required autoComplete="off" />
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Envoyer" />
      </form>
      <div className="message"></div>
    </div>
  );
};
