const xAxisData = [
  { name: "Jan", Sale: 112_000 },
  { name: "Feb", Sale: 99_000 },
  { name: "Mar", Sale: 12_9000 },
  { name: "Apl", Sale: 54_000 },
  { name: "May", Sale: 11_000 },
  { name: "Jun", Sale: 85_000 },
  { name: "Jul", Sale: 34_000 },
  { name: "Aug", Sale: 18_540 },
  { name: "Sep", Sale: 0 },
  { name: "Oct", Sale: 73_000 },
  { name: "Nov", Sale: 12_159 },
  { name: "Dec", Sale: 258_753 },
];

const newUsers = [
  { id: 1, userName: "Ali", title: "Web Dev", img: "images/Man1.png" },
  { id: 2, userName: "Fatemeh", title: "BackEnd", img: "images/Woman1.png" },
  { id: 3, userName: "Amin", title: "FrontEnd", img: "images/Man2.png" },
  { id: 4, userName: "Nafas", title: "DevOps", img: "images/Woman2.png" },
  { id: 5, userName: "Amir", title: "Server", img: "images/Man3.png" },
];

const transActions = [
  {
    id: 1,
    userName: "Ali",
    date: "16 Jun 2006",
    Mount: 123,
    status: "Decline",
    img: "images/Man1.png",
  },
  {
    id: 2,
    userName: "Fatemeh",
    date: "1 Sep 2406",
    Mount: 2406,
    status: "Approved",
    img: "images/Woman1.png",
  },
  {
    id: 3,
    userName: "Amin",
    date: "6 Aug 2023",
    Mount: 1998,
    status: "Pending",
    img: "images/Man2.png",
  },
  {
    id: 4,
    userName: "Nafas",
    date: "31 Oct 1998",
    Mount: 2023,
    status: "Decline",
    img: "images/Woman2.png",
  },
  {
    id: 5,
    userName: "Amir",
    date: "5 Feb 1885",
    Mount: 1885,
    status: "Approved",
    img: "images/Man3.png",
  },
];

const usersList = [
  {
    id: 1,
    userName: "Ali",
    avatar: "/images/Man1.png",
    status: "active",
    transAction: 128.52,
    email: "Ali@gmail.com",
  },
  {
    id: 2,
    userName: "Fatemeh",
    avatar: "/images/Woman1.png",
    status: "unActive",
    transAction: 2023,
    email: "Fatemeh@gmail.com",
  },
  {
    id: 3,
    userName: "Amin",
    avatar: "/images/Man2.png",
    status: "unActive",
    transAction: 137.73,
    email: "Amin@gmail.com",
  },
  {
    id: 4,
    userName: "Nafas",
    avatar: "/images/Woman2.png",
    status: "active",
    transAction: 1885,
    email: "Nafas@gmail.com",
  },
  {
    id: 5,
    userName: "Amir",
    avatar: "/images/Man3.png",
    status: "active",
    transAction: 2404,
    email: "Amir@gmail.com",
  },
];

const products = [
  { id: 1, title: "Asus", avatar: "/images/ASUS.jpg", price: "890" },
  { id: 2, title: "Lenovo", avatar: "/images/Lenovo.png", price: "170" },
  { id: 3, title: "Dell", avatar: "/images/Dell.png", price: "500" },
  { id: 4, title: "LG", avatar: "/images/LG.jpg", price: "365" },
  { id: 5, title: "Samsung", avatar: "/images/Samsung.png", price: "152" },
];

const productsData = [
  { name: "Jan", Sale: 112_000 },
  { name: "Feb", Sale: 99_000 },
  { name: "Mar", Sale: 12_9000 },
  { name: "Apl", Sale: 54_000 },
  { name: "May", Sale: 11_000 },
];

const usersData = [
  { name: "Ali", transAction: 128.52 },
  { name: "Fatemeh", transAction: 2023 },
  { name: "Amin", transAction: 137.73 },
  { name: "Nafas", transAction: 1885 },
  { name: "Amir", transAction: 2404 },
];

export {
  xAxisData,
  newUsers,
  transActions,
  usersList,
  products,
  productsData,
  usersData,
};
