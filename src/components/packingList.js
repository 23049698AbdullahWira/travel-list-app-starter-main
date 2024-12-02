import React from 'react';
import Item from './item';  // Import the Item component

function PackingList({ items, handleDeleteItems, handleUpdateItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
            handleDeleteItems={handleDeleteItems}
            handleUpdateItems={handleUpdateItems}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
