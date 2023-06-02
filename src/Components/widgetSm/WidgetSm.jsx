import React, { useState } from "react";
import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { newUsers } from "../../data";
import { Link } from "react-router-dom";

export default function () {
  const [newUsersList, setNewUsersList] = useState(newUsers);
  const hideUser = (userId) => {
    setNewUsersList(newUsersList.filter((user) => user.id != userId));
  };
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Users</span>
      <ul className="widgetSmList">
        {newUsersList.map((user) => (
          <li className="widgetSmListItem">
            <img src={user.img} className="widgetSmImg" alt="" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.userName}</span>
              <span className="widgetSmUserTitle">{user.title}</span>
            </div>
            <button className="widgetSmButton">
              <Link className="link" to={`/user/${user.id}`}>
                <VisibilityIcon className="widgetSmIcon" />
              </Link>
            </button>
            <button className="widgetSmButton">
              <DeleteIcon
                onClick={() => hideUser(user.id)}
                className="widgetSmIcon"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
