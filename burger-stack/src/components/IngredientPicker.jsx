import FoodItem from "./FoodItem";

function IngredientPicker({ addIngredient }){
    const ingredients = ["bun", "cheese", "tomato", "lettuce", "burger"]

    return (
        <div>
            {ingredients.map(ingredient => <FoodItem itemName={ingredient} addIngredient={addIngredient}/>)}
        </div>
    )
}

export default IngredientPicker;