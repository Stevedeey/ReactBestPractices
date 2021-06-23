import React from "react";
import productsData from "./vschoolProducts";
import Product from "./Product";


function App3() {
 
  const productMap = productsData.map(item => 
    <Product key={item.id} product = {item}
          />
)
  return (
    <div>
      {productMap}
    </div>
  );
}

export default App3;
