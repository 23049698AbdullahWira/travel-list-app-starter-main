import React from 'react';

function Item({ description, quantity, packed, handleDeleteItems, id, handleUpdateItems }) {
  return (  
    <li style={{ textDecoration: packed ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={packed} onChange={() => handleUpdateItems(id)} />
      {description} ({quantity})
      <button onClick={() => handleDeleteItems(id)}>❌</button>
    </li>
  );
}

export default Item;
