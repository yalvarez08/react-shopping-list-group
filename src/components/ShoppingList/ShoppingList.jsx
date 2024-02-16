import axios from "axios";

function ShoppingList({shoppingList}) {
  return (
    <div>
      <h2>Shopping List</h2>
      <p><button>Reset</button></p>
      <p><button>Clear</button></p>
      <ul>
        {shoppingList.map((item) => (
          <li key={item.id}>
            {item.name} {item.quantity} {item.unit}
            <span className="li-btns"><button className="buy-btn">Buy</button> <button className="remove-btn">Remove</button></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
