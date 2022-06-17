import React from "react";

import { productsMock } from "../../mock";

import Card from "../card/card";

const Products = () => {
  return (
    <div className="products">
      <h1 className="visually-hidden">Products</h1>
      <b className="products__title">Ты сегодня покормил кота?</b>
      <div className="products__container">
        {productsMock.map((product, i) => <Card key={`card-${i}`} product={product} />)}
      </div>
    </div>
  );
};

export default Products;