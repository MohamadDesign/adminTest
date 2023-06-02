import React from "react";
import { products } from "../../data";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Products() {
  const [productsData, setProductsData] = useState(products);
  const userDelete = (productId) => {
    setProductsData(productsData.filter((product) => product.id != productId));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "products",
      headerName: "Product",
      renderCell: (params) => {
        return (
          <>
            <Link className="link" to={`/product/${params.row.id}`}>
              <div className="userListUser">
                <img src={params.row.avatar} className="userListImg" />
                {params.row.title}
              </div>
            </Link>
          </>
        );
      },
      width: 120,
    },
    { field: "price", headerName: "Price", width: 100 },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (params) => {
        return (
          <>
            <Link className="link" to={`/product/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteIcon
              className="userListDelete"
              onClick={() => {
                userDelete(params.row.id);
              }}
            />
          </>
        );
      },
      width: 100,
    },
  ];
  return (
    <>
      <div className="userList">
        <DataGrid
          rows={productsData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 2,
              },
            },
          }}
          pageSizeOptions={[2]}
          disableSelectionOnClick
          checkboxSelection
        />
      </div>
    </>
  );
}
