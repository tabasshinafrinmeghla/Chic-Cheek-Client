// import React from 'react';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductsCard = ({ product, products, setproducts }) => {
  const { _id, name, available, brand, price, category, details, photo } =
    product;

  // delete oparation
  const handleDelet = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });

        // console.log("delete confirm");
        fetch(`http://localhost:5000/product/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success",
              });
              const remaining = products.filter((pro) => pro._id !== _id);
              setproducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl border-2 mt-2">
      <figure>
        <img className="" src={photo} alt="" />
      </figure>
      <div className="flex justify-between w-full pr-4 m-4 bg-slate-200">
        <div>
          <h2 className="card-title m-2">Name:{name}</h2>
          <p className=" m-2">Description:{details}</p>
          <p className=" m-2">Brand:{brand}</p>
          <p className=" m-2">price:{price}</p>
        </div>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Purchase Now</button> */}
          <div className="join join-vertical m-2 space-y-2">
            <button className="btn join-item">Details</button>
            <Link to={`/update/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
            <button
              onClick={() => handleDelet(_id)}
              className="btn join-item bg-red-700 text-white hover:text-black">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
