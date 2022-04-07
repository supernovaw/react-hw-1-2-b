import React, { useState } from 'react'
import CardsView from './CardsView';
import ListView from './ListView';

const IconSwitch = props => (<div className="IconSwitch">
  <span className="material-icons" onClick={props.onSwitch}>{props.icon}</span>
</div>);

export default function Store(props) {
  const { products } = props;
  const [viewMode, setViewMode] = useState("cards");
  const toggleViewMode = () => setViewMode(prev => prev === "cards" ? "list" : "cards");
  const viewModeIcons = { "list": "\ue896", "cards": "\ue5c3" };
  return (
    <div>
      <IconSwitch icon={viewModeIcons[viewMode]} onSwitch={toggleViewMode} />
      {viewMode === "cards" ? <CardsView products={products} /> : <ListView products={products} />}
    </div>
  )
}
