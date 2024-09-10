import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <article className="contact">
      <p>maniutin[at]gmail.com</p>
      <a
        href="https://github.com/maniutin"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "underline" }}
      >
        GitHub
      </a>
    </article>
  );
}
