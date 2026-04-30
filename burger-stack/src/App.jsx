import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './components/Page.jsx'
import './components/Nav'
import './components/BurgerView'
import './components/IngredientPicker'
import './components/Options'

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
