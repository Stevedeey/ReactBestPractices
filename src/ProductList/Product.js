import React from 'react'

function Product(props){
  //  id: "1",
  //     name: "Pencil",
  //     price: 1,
  //     description:
  //       "Perfect for those who can't remember things! 5/5 Highly recommend.",
  return (
    <div>
      <h2>Name: {props.product.name}</h2>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
    </div>
  );
}
export default Product;
