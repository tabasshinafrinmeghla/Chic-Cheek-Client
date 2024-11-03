// import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <h1>add all</h1>
            <form>
<div>
<label className="input input-bordered flex items-center gap-2">
  Name
  <input type="text" className="grow" placeholder="Daisy" />
</label>
<label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="daisy@site.com" />
</label>
</div>

            </form>
        </div>
    );
};

export default AddProduct;