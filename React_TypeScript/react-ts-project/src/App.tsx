import './App.css'
import { Counter } from './components/Counter.tsx';
import type { Chai } from "./types.ts";
import { ChaiList } from './components/ChaiList.tsx';

const menu: Chai[] = [
  {id: 1, name: "Masala", price: 40},
  {id: 2, name: "Ginger", price: 30},
  {id: 3, name: "Elaichi", price: 20}
]

function App() {

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiList items={menu}/>
      </div>
      <div>
        <Counter />
      </div>
    </>
  )
}

export default App
