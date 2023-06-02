import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import Chart from "../../Components/chart/Chart";
import { productsData, products } from "../../data";
import { useParams } from "react-router-dom";
import { Publish } from "@mui/icons-material";

export default function Product() {
  const params = useParams();
  const [productDetail, setProductDetail] = useState(products);
  return (
    <>
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">New Product</h1>
          <Link to="/newProduct">
            <button className="productAddBtn">Create</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart title="Product Sales" data={productsData} dataKey="Sale" />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img
                src={
                  productDetail.find(
                    (product) => product.id == params.productId
                  ).avatar
                }
                className="productInfoImg"
                alt=""
              />
              <span className="productName">
                {
                  productDetail.find(
                    (product) => product.id == params.productId
                  ).title
                }{" "}
                Laptop
              </span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <div className="productInfoKey">ID: </div>
                <div className="productInfoValue">
                  {
                    productDetail.find(
                      (product) => product.id == params.productId
                    ).id
                  }{" "}
                </div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">Name: </div>
                <div className="productInfoValue">
                  {
                    productDetail.find(
                      (product) => product.id == params.productId
                    ).title
                  }{" "}
                </div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">Sales: </div>
                <div className="productInfoValue">
                  $
                  {
                    productDetail.find(
                      (product) => product.id == params.productId
                    ).price
                  }
                </div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">Active: </div>
                <div className="productInfoValue">Yes</div>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>
                {
                  productDetail.find(
                    (product) => product.id == params.productId
                  ).title
                }{" "}
                Laptop
              </label>
              <input
                type="text"
                placeholder={
                  productDetail.find(
                    (product) => product.id == params.productId
                  ).title
                }
              />
              <label>In Stock</label>
              <select id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUploader">
                <img
                  src={
                    productDetail.find(
                      (product) => product.id == params.productId
                    ).avatar
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
