import {ChaiCard} from "./ChaiCard";
import { type Chai } from "../types";

interface ChaiListProp {
    chaiList: Chai[]
}

export function ChaiList({chaiList}:ChaiListProp){
    return(
        <>
        <div>
            {
                chaiList.map(chai => (
                    <ChaiCard 
                    key={chai.id}
                    name={chai.name}
                    price={chai.price}
                    isSpecial={chai.price > 25} 
                    />
                ))
            }
        </div>
        </>
    )
}
