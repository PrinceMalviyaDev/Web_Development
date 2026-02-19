
function List({items, category = "Category"}) {

    const ctgry = category;
    const itemList = items;

    // const lowCalFruits = itemList.filter((fruit)=>fruit.calories < 100);   // filtering the data

    // fruits.sort((a, b)=>a.name.locale(b.name));   // ALPHABETICAL SORT based on name of the fruits, here a & b are representing the fruit objects inside fruits.

    // fruits.sort((a,b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL SORT

    // fruits.sort((a,b)=> a.calories - b.calories);  //  NUMERICAL SORT (ASCENDING)

    // lowCalFruits.sort((a,b)=> b.calories - a.calories);  //  NUMERICAL SORT (DESCENDING)

    const listItems = itemList.map((item)=>(
        <li key = {item.id}>{item.name} : <b>{item.calories}</b></li>
    ));

    return (
        <>
            <h3 className="list-category">{ctgry}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

export default List;