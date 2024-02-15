
function Item(props) {

    return (
        <li> {props.name}  {props.quantity}  {props.unit}</li> 
    );
}

export default Item;