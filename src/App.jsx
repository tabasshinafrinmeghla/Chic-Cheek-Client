// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useLoaderData } from "react-router-dom";
import "./App.css";
import ProductsCard from "./Components/ProductsCard";
import { useState } from "react";

function App() {
  const loadedProducts = useLoaderData();
  const [products, setproducts] = useState(loadedProducts);

  return (
    <>
      <div className="m-20">
        <h1 className="text-6xl caret-teal-900 text-center">
          All products is here : {products.length}
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductsCard
              key={product._id}
              products={products}
              setproducts={setproducts}
              product={product}></ProductsCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
