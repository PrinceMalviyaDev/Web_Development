import ComponentB from "./ComponentB";
import {useState} from 'react';

function ComponentA() {
    const [user, setuser] = useState("Prince");

  return (
    <>
        <div className="box">
            <h1>
                ComponentA
            </h1>
            <h2>{`Hello ${user}`}</h2>
            <ComponentB user={user}/>
        </div>
    </>
  );
}

export default ComponentA;