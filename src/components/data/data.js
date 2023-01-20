import CUTORY from '../data/projectImg/CUTORY.png'
import HOTEL from '../data/projectImg/hotel_booking.png'
import CHAT from '../data/projectImg/chat.png'
import RECIPE from '../data/projectImg/recipe_app.png'
import QR from '../data/projectImg/qrcode_generator.png'
import GAME from '../data/projectImg/rock_paper_scissors.png'
import ChihoPortfolio from '../data/projectImg/chiho_portfolio.png'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const portfolio = [
  {
    id: 1,
    cover: CUTORY,
    name: "Brand",
    category: "fullstack",
    title: "E-Commerce",
  },
  {
    id: 2,
    cover: HOTEL,
    name: "Brand",
    category: "fullstack",
    title: "Hotel Booking",
    url: "https://bookinghotel01.herokuapp.com/"
  },
  {
    id: 3,
    cover: CHAT,
    name: "Brand",
    category: "fullstack",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: RECIPE,
    name: "Brand",
    category: "frontend",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: QR,
    name: "Brand",
    category: "frontend",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: GAME,
    name: "Brand",
    category: "frontend",
    title: "Brex Logo",
  },
  {
    id: 7,
    cover: ChihoPortfolio,
    name: "Brand",
    category: "frontend",
    title: "Brex Logo",
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