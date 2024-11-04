// import React from 'react';

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const available = form.available.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newProduct = {
      name,
      available,
      brand,
      price,
      category,
      details,
      photo,
    };
    console.log(newProduct);
    // send data in server
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="p-20 bg-orange-200">
      <h1 className="text-xl font-mono">Add Product</h1>
      <form onSubmit={handleAddProduct}>
        {/* row */}
        <div className=" md:flex mb-4">
          <div className="form-control m-3 md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="Product Name"
              />
            </label>
          </div>
          <div className="form-control m-3 md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Available
              <input
                type="text"
                name="available"
                className="grow input-bordered w-full"
                placeholder="Qunatity"
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
                className="grow"
                placeholder="Brand"
              />
            </label>
          </div>
          <div className="form-control m-3 md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Price
              <input
                type="text"
                name="price"
                className="grow input-bordered w-full"
                placeholder="Price"
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
                className="grow"
                placeholder="Category"
              />
            </label>
          </div>
          <div className="form-control m-3 md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Details
              <input
                type="text"
                name="details"
                className="grow input-bordered w-full"
                placeholder="Details"
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
                className="grow"
                placeholder="URL"
              />
            </label>
          </div>
        </div>
        <div className="m-4">
          <input
            type="submit"
            value="ADD PRODUCT"
            className="btn btn-block bg-orange-400"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
