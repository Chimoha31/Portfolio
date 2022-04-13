import html from "./images/html.png";
import css from "./images/css.png";
import sass from "./images/sass.png";
import js from "./images/js.png";
import jquery from './images/jquery.png';
import react from "./images/react.png";
import typescript from "./images/typescript.png";
import materialui from './images/materialui.png';
import nodejs from './images/nodejs.png';
import postman from './images/postman.png';
import mongodb from './images/mongodb.png';
import stripe from './images/stripe.png';
import firebase from './images/firebase.png';
import vercel from './images/vercel.png';
import heroku from './images/heroku.png';
import netlify from './images/netlify.png';
import git from './images/git.png';
import github from './images/github.png';
import weatherApp from "./images/weatherApp.png";
import recipe_app from './projectsImage/recipe_app.png';

let projectsElements = [
  {
    id: 1,
    image: recipe_app,
    title: "Ezy Pzy Recipe",
    description:
      "This is a foods recipe application for who don't know the ingredients for meals or how to make",
    technology: [css, jquery, react, materialui, netlify, git, github],
  },
  {
    id: 2,
    image: weatherApp,
    title: "Title 2",
    description:
      "This is App description. Lorem ipsum dolor sit amet consectetur",
    technology: [html, css, sass, react, nodejs, git],
  },
  {
    id: 3,
    image: weatherApp,
    title: "Title 3",
    description:
      "This is App description. Lorem ipsum dolor sit amet consectetur",
    technology: [html, css, typescript, firebase, netlify],
  },
  {
    id: 4,
    image: weatherApp,
    title: "Title 4",
    description:
      "This is App description. Lorem ipsum dolor sit amet consectetur",
    technology: [html, css, sass],
  },
  {
    id: 5,
    image: weatherApp,
    title: "Title 5",
    description:
      "This is App description. Lorem ipsum dolor sit amet consectetur",
    technology: [html, css],
  },
  {
    id: 6,
    image: weatherApp,
    title: "Title 6",
    description:
      "This is App description. Lorem ipsum dolor sit amet consectetur",
    technology: [html, css],
  },
];

export default projectsElements;
