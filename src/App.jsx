import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Pokedex from './components/Pokedex'
import Home from './components/Home'
import Item from './components/Item'
import ProtectedRoutes from './components/ProtectedRoutes'
import pokedex from "./assets/img/pokedex.png"
import gif from "./assets/img/gif.gif"
import Confi from './components/Confi'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <header>
          <img className='title' src={pokedex} alt="pokedex" />
          <div className='yellow_stripe'></div>
          <div className='white_circle'>
            <div className='gray_circle'>
              <img src={gif} alt="" />
            </div>
          </div>
          <div className='black_stripe'></div>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<Item />} />
            <Route path='/confi' element={<Confi />} />
          </Route>
        </Routes>
        <footer>
          <p>Hecho por: <strong>Laura Sánchez</strong> | G-30 ACADEMLO ♥</p>
        </footer>
      </HashRouter>
    </div>
  )
}

export default App
