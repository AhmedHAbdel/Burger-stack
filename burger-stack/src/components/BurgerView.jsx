import FoodItem from "./FoodItem";

function BurgerView({ burger }){
    return (
        <div>
            <h2>Burger:</h2>
            {burger.map(item => {
                return (
                    <div>
                        <FoodItem itemName={item}/>
                        <br />
                    </div>)
                })}
        </div>
    );
}

export default BurgerView;