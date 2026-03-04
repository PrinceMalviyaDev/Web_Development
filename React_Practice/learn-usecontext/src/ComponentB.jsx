import ComponentC from "./ComponentC";

function ComponentB(props) {
  return (
    <>
        <div className="box">
            <h1>
                ComponentB
            </h1>
            <h2></h2>
            <ComponentC user={props.user}/>
        </div>
    </>
  );
}

export default ComponentB;