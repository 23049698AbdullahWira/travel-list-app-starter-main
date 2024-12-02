// Initial packing items
import React, { useState } from "react";
import Logo from "./logo";
import Stats from "./stats";
import Form from "./Form";
import PackingList from "./packingList";

function App() {
  const [items, setItems] = useState([]);
  
  const handleAddItems = (newItem) => {
    setItems([...items, newItem]);
  }

  const handleDeleteItems = (id) => {
    setItems(items.filter((item) => item.id !== id));
  }   

  const handleUpdateItems = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            packed: !item.packed,
          };
        }
        return item;
      })
    );
  }

  const handleClearItems = () => {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} handleClearItems={handleClearItems}/>
      <PackingList items={items} handleDeleteItems={handleDeleteItems} handleUpdateItems={handleUpdateItems}/>
      <Stats items={items}/>
      <p>234049698 Wira</p>
    </div>
  );
}

export default App;
