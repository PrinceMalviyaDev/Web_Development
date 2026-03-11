
interface ChaiCardProp {
    name: string,
    price: number,
    isSpecial?: boolean
}

export function ChaiCard({name, price, isSpecial = false}: ChaiCardProp){
    return(
        <>
        <div>
            {name} {isSpecial && <span>⭐</span>}
            <p>{price}</p>
        </div>
        </>
    );
}