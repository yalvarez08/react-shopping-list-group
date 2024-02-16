import axios from "axios";

function ShoppingList({shoppingList}) {
  return (
    <div>
      <ul>
        {shoppingList.map((item) => (
          <li key={item.id}>
            {item.name} {item.quantity} {item.unit}
            <button>Buy</button> <button>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
