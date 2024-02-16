import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../Header/Header.jsx";

import "./App.css";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newUnit, setNewUnit] = useState("");

  const fetchShoppingList = () => {
          //get request to fetch existing list items
       axios.get('/api/shopping')
       .then(response => {
           console.log('GET request was successful:', response.data);
            setShoppingList(response.data);
        })
        .catch(err => {
            console.log('GET error in getting shopping list', err);
        })
   }
        //On load, get list
        useEffect(
          fetchShoppingList, []
        );

    const addItem = (event) => {
        event.preventDefault();
        //post request to add new item to list
        axios ({
            method: 'POST',
            url: '/api/shopping',
            data: {name: newItemName, quantity: newQuantity, unit: newUnit}
        })
        .then(response => {
            console.log('Item added; POST was successful!', response);
            fetchShoppingList();
        })
        .catch(err => {
            console.log('Error with POST request.', err);
        })
    }

    const removeItem = (itemId) => {
        //delete request to delete item from list
        axios({
            method: 'DELETE',
            url: `/api/shopping/${itemId}`
        })
        .then(response => {
            console.log('Item deleted; DELETE was successful!', response);
            fetchShoppingList();
        })
        .catch(err => {
            console.log('Error with DELETE request.', err);
        })
    }


 return (
    <div className="App">
      <Header />
      <main>
        <form onSubmit={addItem}>
          <label htmlFor="item-input">Item:</label>
          <input
            id="item-input"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
          <label htmlFor="qty-input">Quantity:</label>
          <input
            id="qty-input"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
          />
          <label htmlFor="unit-input">Unit:</label>
          <input
            id="unit-input"
            value={newUnit}
            onChange={(e) => setNewUnit(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
       
          <ShoppingList  shoppingList={shoppingList}/>
        
      </main>
    </div>
  );


}

export default App;
