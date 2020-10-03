import React from 'react';
import './item.css';

export const Item = (props) => {
  return (
    <>
      <div className="item">
        <p>{props.name}</p>
        <button className="remove-btn" onClick={props.onRemoveButtonClick}> Done</button>
      </div>
    </>
  );
}

export default Item;
