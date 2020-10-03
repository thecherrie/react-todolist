import React from 'react';
import './wrapper.css';
import Item from '../item/item';

export const Wrapper = (props) => {
  return (
    <div>
      <div className="wrapper">
        <div className="inner-wrapper">
          <h1>Todolist</h1>
            <div className="search">
              <input placeholder="What do you need to do?" type="search" onChange={props.onInputChange} />
              <button className="btn-add" onClick={props.onAddClick}> + </button>
            </div>
          {props.items.map(item =>
          <Item key={item.id} name={item.name} onRemoveButtonClick={() => props.onRemoveButtonClick(item.id)}/> )}

        </div>
      </div>
    </div>
  );
}

export default Wrapper;
