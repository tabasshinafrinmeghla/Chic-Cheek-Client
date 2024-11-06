// import React from 'react';

const ProductsCard = ({ product }) => {
  const { name, available, brand, price, category, details, photo } = product;

  return (
    <div className="card card-side bg-base-100 shadow-xl border-2 mt-2">
      <figure>
        <img src={photo} alt="" />
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
            <button className="btn join-item">Edit</button>
            <button className="btn join-item">Purchase Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
