import React from "react";
import "./About.scss";

export default function Home() {
  return (
    <article className="home">
      <p>Toronto-based Software Developer & Designer</p>
      <p>Passionate about all things code</p>
      <p>Enthusiastic about UI/UX and web design </p>
      <p>
        <a
          href="https://soundcloud.com/kettlewhistle"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "underline" }}
        >
          Musician
        </a>
        ,{" "}
        <a
          href="https://oddboll.com/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "underline" }}
        >
          music blogger
        </a>{" "}
        and{" "}
        <a
          href="https://gasolineradio.com/shows/odd-hour"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "underline" }}
        >
          radio show host
        </a>
        .
      </p>
    </article>
  );
}
