"use client";
import { useState } from "react";
export default function TaskCounter(){

    const [counter,SetCounter] =useState(0)
    const increment =()=>{
        SetCounter(counter+1)
    }
    const decrement =()=>{
        SetCounter(counter-1)
    }

    return(
        <main>
            <p>taskcounter :{counter}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </main>
    )
}