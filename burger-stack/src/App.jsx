import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Page from './components/Page.jsx'
import Nav from './components/Nav.jsx'
import BurgerView from './components/BurgerView.jsx'
import IngredientPicker from './components/IngredientPicker.jsx'
import Options from './components/Options.jsx'


function App() {
  const [burger, setBurger] = useState([])

  function addIngredient(ingredient){
    let copiedIngredients = [...burger];

    copiedIngredients.unshift(ingredient);

    setBurger(copiedIngredients);
  }

  function clearBurger() {
    setBurger([]);
  }

  function removeLast() {
    let copiedIngredients = [...burger];

    copiedIngredients.pop();

    setBurger(copiedIngredients);
  }

  function submitOrder() {
    const httpRequest = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.strigify({burger, nameForOrder})
      }
  }

  return (
    <>
        <div>
            <Nav></Nav>
            <IngredientPicker addIngredient={addIngredient}></IngredientPicker>
            <BurgerView burger={burger}></BurgerView>
            <Options></Options>
        </div>
    </>
  )
}

export default App
