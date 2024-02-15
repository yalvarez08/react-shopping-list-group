import {useEffect, useState} from 'react';

import Header from '../Header/Header.jsx'
// import ShoppingList from '../ShoppingList/ShoppingList.jsx'

import './App.css';


function App() {

    const [shoppingList, setShoppingList] = useState [''];

    const fetchShoppingList = () => {
        axios.get('/api/shopping')
          .then(response => {
            console.log(response.data);
            shoppingList=response.data;
            setShoppingList(response.data);
          })
          .catch(err => {
            alert('error getting shopping list');
            console.log(err);
          })
      }
      //on load, get list
      useEffect(
        fetchShoppingList, []
      );
     


    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            {/* <ShoppingList /> */}
        </div>
    );
}

export default App;
