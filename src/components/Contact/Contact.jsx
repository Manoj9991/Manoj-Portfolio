import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contacts = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4qx4y2h",    // 🔁 Replace with your actual Service ID
        "template_6uhwcop",   // 🔁 Replace with your actual Template ID
        form.current,
        "nW28n5WH0ghXzh92O"     // 🔁 Replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setMessageSent(true);
          setError(false);
          form.current.reset();
        },
        (error) => {
          console.error("Email send error:", error.text);
          setMessageSent(false);
          setError(true);
        }
      );
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        {/* Left Side - Contact Info */}
        <div className={styles.left}>
          <div className={styles.text}>
            <h2>Contact Me</h2>
            <p>Need to Hire? Feel free to drop a message!</p>
            <p>I’ll get back to you as soon as possible.</p>
          </div>

          <ul className={styles.links}>
            <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              <a href="mailto:manojlakshan9991@gmail.com">manojlakshan9991@gmail.com</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
              <a href="https://www.linkedin.com/in/manoj-lakshan99/" target="_blank" rel="noopener noreferrer">
                Manoj Lakshan
              </a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
              <a href="https://github.com/Manoj9991" target="_blank" rel="noopener noreferrer">
                Manoj9991
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Email Form */}
        <div className={styles.right}>
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <h3>Send a Message</h3>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required />
            <button type="submit">Send Message</button>

            {/* Success/Failure Messages */}
            {messageSent && <p className={styles.success}>✅ Message sent successfully!</p>}
            {error && <p className={styles.error}>❌ Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </footer>
  );
};
