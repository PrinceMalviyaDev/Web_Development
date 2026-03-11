import { ChaiList } from './components/ChaiList';
import {type Chai} from './types.ts'
import './App.css';

const chaiList: Chai[] = [
  {id:0, name:"Masala Chai", price:30},
  {id:1, name:"Black Chai", price:20},
  {id:2, name:"Lemon Chai", price:35}
]

function App() {

  return (
    <>
      <div>
        <ChaiList chaiList = {chaiList}/>
      </div>
    </>
  )
}

export default App
