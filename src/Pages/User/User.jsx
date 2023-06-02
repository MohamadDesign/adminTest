import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./User.css";
import Chart from "../../Components/chart/Chart";
import { usersData, usersList, productsData } from "../../data";
import { useParams } from "react-router-dom";
import { Publish } from "@mui/icons-material";

export default function User() {
  const params = useParams();
  const [userDetail, setUserDetail] = useState(usersList);
  return (
    <>
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">New User</h1>
          <Link to="/newProduct">
            <button className="productAddBtn">Create</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart
              title="User TransAction"
              data={usersData}
              dataKey="transAction"
            />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img
                src={userDetail.find((user) => user.id == params.userId).avatar}
                className="productInfoImg"
                alt=""
              />
              <span className="productName">
                {
                  userDetail.find((product) => product.id == params.userId)
                    .userName
                }{" "}
              </span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <div className="productInfoKey">ID: </div>
                <div className="productInfoValue">
                  {userDetail.find((product) => product.id == params.userId).id}{" "}
                </div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">User Name: </div>
                <div className="productInfoValue">
                  {
                    userDetail.find((product) => product.id == params.userId)
                      .userName
                  }{" "}
                </div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">Email: </div>
                <div className="productInfoValue">
                  {
                    userDetail.find((product) => product.id == params.userId)
                      .email
                  }
                </div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">TransAction: </div>
                <div className="productInfoValue">
                  $
                  {
                    userDetail.find((user) => user.id == params.userId)
                      .transAction
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>
                User Edit
              </label>
              <input
                type="text"
                placeholder={
                  userDetail.find((product) => product.id == params.userId)
                    .userName
                }
              />
              <input
                type="text"
                placeholder={
                  userDetail.find((product) => product.id == params.userId)
                    .email
                }
              />
              
            </div>
            <div className="productFormRight">
              <div className="productUploader">
                <img
                  src={
                    userDetail.find((product) => product.id == params.userId)
                      .avatar
                  }
                  className="productUploaderImg"
                  alt=""
                />
                <label>
                  <Publish />
                </label>
                <input type="file" style={{ display: "none" }} />
              </div>
              <button className="productBtn">Upload | Edit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
