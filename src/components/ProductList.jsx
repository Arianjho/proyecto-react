import React from "react";
import { productos } from "../data/productos";

export const ProductList = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal}) => {
  const AddProduct = (product) => {

    if (allProducts.find(item => item.id === product.id)) {
        const products = allProducts.map(item => item.id === product.id 
            ? {...item, quantity: item.quantity + 1}
            : item
        )

        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };
  
  return (
    <div className="container-items">
      {productos.map((producto) => (
        <div className="item" key={producto.id}>
          <figure>
            <img src={producto.img} alt="producto" />
          </figure>
          <div className="info-product">
            <h2>{producto.nameProduct}</h2>
            <p className="price">S./ {producto.price}</p>
            <button onClick={() => AddProduct(producto)} className="btn-add-cart">
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
