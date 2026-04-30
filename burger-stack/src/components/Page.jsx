import './Nav'
import './BurgerView'
import './IngredientPicker'
import './Options'

function Page(){
    return (
        <div>
            <Nav></Nav>
            <IngredientPicker></IngredientPicker>
            <BurgerView></BurgerView>
            <Options></Options>
        </div>
    );
}

export default Page;