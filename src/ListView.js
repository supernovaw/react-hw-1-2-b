import React from 'react';
import './ListView.css';

const ShopItem = props => {
  const { item } = props;
  return (
    <div className="ShopItem">
      <img src={item.img} alt="product" />
      <div className="item-name">{item.name}</div>
      <div className="item-color">{item.color}</div>
      <div className="item-price">${item.price}</div>
      <div className="item-add-button">Add to cart</div>
    </div>
  );
};

export default function ListView(props) {
  return <div>{props.products.map((item, index) => <ShopItem key={index} item={item} />)}</div>;
}