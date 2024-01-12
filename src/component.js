// MyComponent.js

import React, {useState} from "react";
function Counter(){
    const[count, setCounter] = useState(3);
    return(
        <>
        <p>count:{count}</p>
        <button onClick={()=>setCounter(count+1)}>
            ClickMe</button>
        </>

    )
}
export default Counter;