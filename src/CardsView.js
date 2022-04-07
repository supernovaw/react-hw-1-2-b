import React from 'react';
import './CardsView.css';

const ShopCard = props => {
  const { item } = props;
  return (
    <div className="ShopCard">
      <div className="item-name">{item.name}</div>
      <div className="item-color">{item.color}</div>
      <img src={item.img} alt="product" />
      <div className="item-price">${item.price}</div>
      <div className="item-add-button">Add to cart</div>
    </div>
  );
}

export default function CardsView(props) {
  return <div className="CardsView">{props.products.map((item, index) => <ShopCard key={index} item={item} />)}</div>;
}
