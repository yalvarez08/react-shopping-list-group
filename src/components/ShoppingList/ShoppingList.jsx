import axios from "axios";
import Item from '../Item/Item';

function ShoppingList(props) {
  
  return (
    <div>
      <h2>Shopping List</h2>
      <p><button>Reset</button></p>
      <p><button>Clear</button></p>
      <ul>
        
        {props.shoppingList.map(item => (
          
          <Item key={item.id}
            name={item.name} quantity={item.quantity} unit={item.unit}/> )
    
            )}
      </ul>
    </div>
  );
}

export default ShoppingList;
