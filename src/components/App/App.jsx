import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../Header/Header.jsx";

import "./App.css";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";
import ShoppingForm from "../ShoppingForm/ShoppingForm.jsx";


function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [newUnit, setNewUnit] = useState('');

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

    const addItem = (itemNameInput, quantityInput, unitInput) => {
        //event.preventDefault();
        console.log('new item is:', itemNameInput, quantityInput, unitInput);
        //post request to add new item to list
        axios ({
            method: 'POST',
            url: '/api/shopping',
            data: {name: itemNameInput, quantity: quantityInput, unit: unitInput}
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
        <ShoppingForm addItem={addItem} />
        <ShoppingList shoppingList={shoppingList}/>
        
      </main>
    </div>
  );


}

export default App;
