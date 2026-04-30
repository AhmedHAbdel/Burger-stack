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
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <Nav></Nav>
            <IngredientPicker></IngredientPicker>
            <BurgerView></BurgerView>
            <Options></Options>
        </div>
    </>
  )
}

export default App
