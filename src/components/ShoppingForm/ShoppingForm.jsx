import { useState } from "react";



function ShoppingForm({ addItem }) {

    const [itemNameInput, setItemNameInput] = useState('');
    const [quantityInput, setQuantityInput] = useState('');
    const [unitInput, setUnitInput] = useState('');
   

    //called when save button is clicked
    const handleSubmit = (event) => {
        event.preventDefault();
        addItem(itemNameInput, quantityInput, unitInput);
        clearShoppingFormFields();
    }

    const clearShoppingFormFields = () => {
        setItemNameInput('');
        setQuantityInput('');
        setUnitInput('');
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="item-input">Item:</label>
            <input
                id="item-input"
                value={itemNameInput}
                onChange={(e) => setItemNameInput(e.target.value)}
            />
            <label htmlFor="qty-input">Quantity:</label>
            <input
                id="qty-input"
                value={quantityInput}
                onChange={(e) => setQuantityInput(e.target.value)}
            />
            <label htmlFor="unit-input">Unit:</label>
            <input
                id="unit-input"
                value={unitInput}
                onChange={(e) => setUnitInput(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>

    );
}

export default ShoppingForm;