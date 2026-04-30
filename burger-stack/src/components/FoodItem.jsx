function FoodItem({ itemName, addIngredient }){
    let className = itemName;

    return (
        <button className={className} onClick={() => addIngredient(itemName)}>{itemName}</button>
    );
}

export default FoodItem;