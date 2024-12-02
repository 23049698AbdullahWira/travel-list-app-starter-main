import React from "react";

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const percentagePacked = totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {totalItems > 0 && packedItems === totalItems
          ? "You got everything!"
          : `You have ${totalItems} item${totalItems !== 1 ? "s" : ""} in the list. You already packed ${packedItems} (${percentagePacked}%).`}
      </em>
    </footer>
  );
}

export default Stats;
