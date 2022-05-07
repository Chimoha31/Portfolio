import weatherApp from "./images/weatherApp.png";
import recipe_app from "./projectsImage/recipe_app.png";
import rock_paper_scissors from "./projectsImage/rock_paper_scissors.png";
import anime_database_app from "./projectsImage/anime_database_app.png";

let projectsElements = [
  {
    id: 1,
    image: recipe_app,
    title: "Ezy Pzy Recipe",
    description:
      "This is a foods recipe application by using API for who want to know the ingredients for meals or how to make",
    technology: ["css", "jquery", "react", "materialui", "netlify"],
    github: "https://github.com/Chimoha31/Recipe.git",
    app: "https://ezypzy-recipe.netlify.app",
  },
  {
    id: 2,
    image: rock_paper_scissors,
    title: "Rock Paper Scissors",
    description: "This is a game App for fun, ROCK PAPER SCISSORS",
    technology: ["sass", "react", "vercel"],
    github: "https://github.com/Chimoha31/Rock_Paper_Scissors.git",
    app: "https://rock-paper-scissors-fungame.vercel.app/",
  },
  {
    id: 3,
    image: anime_database_app,
    title: "Anime Database",
    description:
      "This is an Anime Database application. You can see top, airing, upcoming, o.v.a anime in Japan. Also, you can search anime what you want to know the anime series. Moreover, you can put your favorite anime in your list",
    technology: [
      "css",
      "bootstrap",
      "material ui",
      "react",
      "firebase",
      "vercel",
    ],
    github: "https://github.com/Chimoha31/Anime_data.git",
    app: "",
  },
  {
    id: 4,
    image: weatherApp,
    title: "Title 4",
    description:
      "This is App description. Lorem ipsum dolor sit amet consectetur",
    technology: ["sass", "react", "vercel"],
  },
  {
    id: 5,
    image: weatherApp,
    title: "Title 5",
    description:
      "This is App description. Lorem ipsum dolor sit amet consectetur",
    technology: ["sass", "react", "vercel"],
  },
  {
    id: 6,
    image: weatherApp,
    title: "Title 6",
    description:
      "This is App description. Lorem ipsum dolor sit amet consectetur",
    technology: ["sass", "react", "vercel"],
  },
];

export default projectsElements;
