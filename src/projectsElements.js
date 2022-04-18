import html from "./images/html.png";
import css from "./images/css.png";
import sass from "./images/sass.png";
import bootstrap from "./images/bootstrap.png";
import materialui from './images/materialui.png';
import js from "./images/js.png";
import jquery from './images/jquery.png';
import react from "./images/react.png";
import typescript from "./images/typescript.png";
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
import anime_database_app from './projectsImage/anime_database_app.png';

let projectsElements = [
  {
    id: 1,
    image: recipe_app,
    title: "Ezy Pzy Recipe",
    description:
      "This is a foods recipe application by using API for who want to know the ingredients for meals or how to make",
    technology: [html, css, jquery, react, materialui, netlify],
    github: "https://github.com/Chimoha31/Recipe.git",
    app: "https://ezypzy-recipe.netlify.app",
  },
  {
    id: 2,
    image: anime_database_app,
    title: "Anime Database",
    description:
      "This is an Anime Database application. You can see top, airing, upcoming, o.v.a anime in Japan. Also, you can search anime what you want to know the anime series. Moreover, you can put your favorite anime in your list",
    technology: [html, css, bootstrap,materialui, react, firebase, vercel],
    github: "https://github.com/Chimoha31/Anime_data.git",
    app: ""
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
