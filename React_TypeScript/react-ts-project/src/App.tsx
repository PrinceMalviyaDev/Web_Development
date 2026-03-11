import './App.css'
import { Counter } from './components/Counter.tsx';
import type { Chai } from "./types.ts";
import { ChaiList } from './components/ChaiList.tsx';
import { OrderForm } from './components/OrderForm.tsx';
import { Card } from './components/Card.tsx';

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
      <div>
        <OrderForm onSubmit={(order) => {
          console.log("Placed:", order.name, order.cups);
        }}/>
      </div>
      <div>
        <Card
        title="Chai aur TypeScript"
        footer={<button>Order Now</button>}
        ><p>Hello, I am a child</p></Card>
      </div>
    </>
  )
}

export default App
