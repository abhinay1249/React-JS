import {Routes, Route} from 'react-router';
import { HomePage } from './components/HomePage';
import { Checkout } from './components/Checkout';
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>

  )
}

export default App
