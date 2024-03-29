// Project Image
import CUTORY from '../data/projectImg/CUTORY.png'
import PIANOTICK from '../data/projectImg/pianoTick.png'
import HOTEL from '../data/projectImg/hotel_booking.png'
import CHAT from '../data/projectImg/chat.png'
import RECIPE from '../data/projectImg/recipe_app.png'
import QR from '../data/projectImg/qrcode_generator.png'
import GAME from '../data/projectImg/rock_paper_scissors.png'
import ChihoPortfolio from '../data/projectImg/chiho_portfolio.png'

// Icon
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const portfolio = [
  {
    id: 7,
    cover: ChihoPortfolio,
    github: "https://github.com/Chimoha31/Portfolio",
    category: "frontend",
    title: "Portfolio",
    skill: ["react", "aos", "materialui", "emailjs", "vercel"],
    url: "https://portfolio-chiho.vercel.app/"
  },
  {
    id: 8,
    cover: PIANOTICK,
    github: "",
    category: "fullstack",
    skill: ["angular", "typescript", "figma", "node.js", "express", "mongodb", "MySql"],
    title: "PianoTick(Coming soon)",
    url: ""
  },
  {
    id: 1,
    cover: CUTORY,
    github: "https://github.com/Chimoha31/cutory",
    category: "fullstack",
    skill: ["bootstrap", "figma", "react", "redux-toolkit", "node.js", "express", "MySql", "stripe","AWS", "heroku"],
    title: "E-Commerce",
    url: "https://cutory-client.herokuapp.com/"
  },
  {
    id: 2,
    cover: HOTEL,
    github: "https://github.com/Chimoha31/Ciccc_FinalProject",
    category: "fullstack",
    title: "Hotel Booking",
    skill:["bootstrap", "react", "ContextAPI", "node.js", "express", "mongoDB", "firebase", "heroku"],
    url: "https://bookinghotel01.herokuapp.com/"
  },
  {
    id: 3,
    cover: CHAT,
    github: "https://github.com/Chimoha31/Chat_socket.io.git",
    category: "fullstack",
    title: "Realtime Chat App",
    skill:["bootstrap", "react", "socket.io", "express", "heroku"],
    url: "https://chat-application001.herokuapp.com/"
  },
  {
    id: 4,
    cover: RECIPE,
    github: "https://github.com/Chimoha31/Recipe.git",
    category: "frontend",
    title:  "Ezy Pzy Recipe",
    skill:["css", "jquery", "react", "materialui", "netlify"],
    url: "https://ezypzy-recipe.netlify.app/"
  },
  {
    id: 5,
    cover: QR,
    github: "https://github.com/Chimoha31/QrCode_Generator.git",
    category: "frontend",
    title: "QrCode Generator",
    skill:["tailwind", "css", "react", "vercel"],
    url: "https://qrcode-generator-forfree.vercel.app/"
  },
  {
    id: 6,
    cover: GAME,
    github: "https://github.com/Chimoha31/Rock_Paper_Scissors.git",
    category: "frontend",
    title: "Rock Paper Scissors",
    skill:["sass", "react", "vercel"],
    url: "https://rock-paper-scissors-fungame.vercel.app/"
  },
];

export const contact = [
  {
    id: 100,
    icon: <AddLocationAltIcon />,
    text1: "2311 Beta Ave",
    text2: "Burnaby, BC, Canada",
  },
  {
    id:101,
    icon: <PhoneIphoneIcon />,
    text1: "+1(604)-785-2569",
  },
  {
    id:102,
    icon: <EmailOutlinedIcon />,
    text1: "mokochii1108@gmail.com",
  },
]