// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, photo } = product;

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const available = form.available.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateProduct = {
      name,
      available,
      brand,
      price,
      category,
      details,
      photo,
    };
    console.log(updateProduct);
    // send data in server
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "Product Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="p-20 bg-orange-200">
      <div className="flex w-full flex-col lg:flex-row justify-around">
        <div>
          <h1 className="text-xl font-mono text-center ">
            Update Product: {name}{" "}
          </h1>
        </div>
        <div className="place-items-center">
          <img className="rounded-full h-20 " src={photo} alt="" />
        </div>
      </div>
      {/* 
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card bg-base-200 rounded-box grid h-32 flex-grow text-slate-400place-items-center">
          <h1 className="text-xl font-mono">Update Product: {name} </h1>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="card bg-base-200 grid flex-grow text-slate-400place-items-center h-full w-full object-cover rounded-box">
          <img className="" src={photo} alt="" />
        </div>
      </div> */}

      <form onSubmit={handleUpdateProduct}>
        {/* row */}
        <div className=" md:flex mb-4">
          <div className="form-control m-3 md:w-1/2">
            <label className="input input-bordered flex items-center gap-2 ">
              Name
              <input
                type="text"
                name="name"
                className="grow text-slate-400"
                defaultValue="Product Name"
                onFocus={(e) => (e.target.value = "")}
              />
            </label>
          </div>
          <div className="form-control m-3 md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Available
              <input
                type="text"
                name="available"
                className="grow text-slate-400 input-bordered w-full"
                defaultValue="Qunatity"
                onFocus={(e) => (e.target.value = "")}
              />
            </label>
          </div>
        </div>
        {/* brand  */}
        <div className=" md:flex mb-4">
          <div className="form-control m-3 md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Brand
              <input
                type="text"
                name="brand"
                className="grow text-slate-400"
                defaultValue="Brand"
                onFocus={(e) => (e.target.value = "")}
              />
            </label>
          </div>
          <div className="form-control m-3 md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Price
              <input
                type="text"
                name="price"
                className="grow text-slate-400 input-bordered w-full"
                defaultValue="Price"
                onFocus={(e) => (e.target.value = "")}
              />
            </label>
          </div>
        </div>
        {/* category and details */}
        <div className=" md:flex mb-4">
          <div className="form-control m-3 md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Category
              <input
                type="text"
                name="category"
                className="grow text-slate-400"
                defaultValue="Category"
                onFocus={(e) => (e.target.value = "")}
              />
            </label>
          </div>
          <div className="form-control m-3 md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Details
              <input
                type="text"
                name="details"
                className="grow text-slate-400 input-bordered w-full"
                defaultValue="Details"
                onFocus={(e) => (e.target.value = "")}
              />
            </label>
          </div>
        </div>

        {/* from Photo URL row */}
        <div className="m-4">
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2">
              Photo
              <input
                type="text"
                name="photo"
                className="grow text-slate-400"
                defaultValue="URL"
                onFocus={(e) => (e.target.value = "")}
              />
            </label>
          </div>
        </div>
        <div className="m-4">
          <input
            type="submit"
            value="Update PRODUCT"
            className="btn btn-block bg-orange-400"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
