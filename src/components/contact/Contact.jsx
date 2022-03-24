import React, { useRef } from "react";
import "./contact.css";

import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1wqt28d",
        "template_jp3y8sg",
        form.current,
        "kD1neYXt8Gbf9N8Fd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>asanjeetsangam15@gmail.com</h5>
            <a href="mailto:asanjeetsangam15@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiInstagramFill className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>sanjeet</h5>
            <a
              href="https://www.instagram.com/san_arts_official_/"
              target="_blank"
            >
              Visit Instagram
            </a>
          </article>
        </div>

        {/* end of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter you email"
            required
          />

          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
