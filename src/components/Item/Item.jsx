
function Item(props) {

    return (
        <li> {props.name}  {props.quantity}  {props.unit}
        <span className="li-btns"><button className="buy-btn">Buy</button> 
        <button className="remove-btn">Remove</button></span>
        </li> 
    );
}

export default Item;