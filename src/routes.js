import Home from "./Pages/Home/home";
import UserList from "./Pages/Users/UserList";
import User from "./Pages/User/User";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/user/:userId", element: <User /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:productId", element: <Product /> },
];

export default routes;
