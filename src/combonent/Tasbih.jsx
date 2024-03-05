import React, { useState } from "react"
function Tasbih(){
    const [count,setCount]=useState(0)

    //function HandleIncrement
    const Increment =()=>{
        setCount(count +1)
    };

    //function HandleDecrement
    const Decrement =()=>{
        if (count>0){
        setCount(count-1)}
    };

    //function HandleReset
    const Reset =()=>{
        setCount(0)
    };
    return(
        <div className="text-center ">
            <h1 className="text-7xl m-16 ">{count}</h1>

            <div>
                <button onClick={Increment} className="bg-orange-500 py-2 px-4 text-2xl m-2">Increment</button>
                <button onClick={Decrement} className="bg-blue-500 py-2 px-4 text-2xl m-2">Decrement</button>
                <button onClick={Reset} className="bg-green-500 py-2 px-4 text-2xl m-2">Reset</button>
            </div>
        </div>
    )
}

export default Tasbih