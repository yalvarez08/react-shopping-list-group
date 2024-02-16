

function Item(props) {
   
    // const handleRemove = (event) => {
    //     event.preventDefault();
    //     removeItem(props.id)

    // }

    return (
        <li> {props.name}  {props.quantity}  {props.unit}
        <span className="li-btns"><button className="buy-btn">Buy</button> 
        <button className="remove-btn">Remove</button></span>
        </li> 
    );
}

export default Item;