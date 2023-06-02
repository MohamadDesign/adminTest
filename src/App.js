import "./App.css";
import { Route, Routes, useRoutes } from "react-router";
import routes from "./routes";
import Topbar from "./Components/topbar/Topbar";
import Sidebar from "./Components/sidebar/Sidebar";
import './App.css'

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />

        {router}
      </div>
    </>
  );
}

export default App;
