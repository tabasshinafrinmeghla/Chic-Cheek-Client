// // import React from 'react';

// // import { useLoaderData } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

// const UpdateProduct = () => {
//   //   const product = useLoaderData();
//   //   const { _id, name, available, brand, price, category, details, photo } =
//   //     product;

//   const product = useLoaderData();
//   const { _id, name, available, brand, price, category, details, photo } =
//     product;

//   return (
//     <div>
//       <h1>Name: {name} </h1>
//       <p>ID: {_id} </p>
//     </div>
//   );
// };

// export default UpdateProduct;

// import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, available, brand, price, category, details, photo } =
    product;

  return (
    <div>
      <h1>Name: {name} </h1>
      <p>ID: {_id} </p>
      {/* Additional product details can be displayed here */}
    </div>
  );
};

export default UpdateProduct;
