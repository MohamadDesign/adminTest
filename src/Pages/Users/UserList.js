import React from "react";
import { usersList } from "../../data";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import "./UserList.css";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

export default function UserList() {
  const [usersData, setUsersData] = useState(usersList);
  const userDelete = (userId) => {
    setUsersData(usersData.filter((user) => user.id != userId));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "user",
      headerName: "UserName",
      renderCell: (params) => {
        return (
          <>
            <Link className="link" to={`/user/${params.row.id}`}>
              <div className="userListUser">
                <img src={params.row.avatar} className="userListImg" />
                {params.row.userName}
              </div>
            </Link>
          </>
        );
      },
      width: 100,
    },
    { field: "email", headerName: "Email", width: 150 },
    { field: "status", headerName: "status", width: 100 },
    { field: "transAction", headerName: "TransAction", width: 100 },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteIcon
              className="userListDelete"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className="userList">
        <DataGrid
          rows={usersData}
          columns={columns}
          pageSize="2"
          disableSelectionOnClick
        />
      </div>
    </>
  );
}
