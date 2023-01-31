import React from "react";
import { createRoot } from "react-dom/client";

const message = {
  content: "Just ate at “Les Corbeaux En Colère”. Wonderful little venue!",
  published: "January 21st at 9:45pm",
  author: {
    avatarSrc: "https://sandpack-bundler.vercel.app/img/avatars/009.png",
    avatarDescription: "Cartoon bear",
    name: "Ben Thorn",
    handle: "benjaminthorn",
  },
};

const profileUrl = `/users/${message.author.handle}`;
const imageAlt = `${message.author.avatarDescription} (user profile photo)`;

const element = (
  <article>
    <header>
      <img alt={imageAlt} src={message.author.avatarSrc} />
      <a href={profileUrl}>{message.author.name}</a>
    </header>
    <p>{message.content}</p>
    <footer>Posted {message.published}</footer>
  </article>
);

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(element);
