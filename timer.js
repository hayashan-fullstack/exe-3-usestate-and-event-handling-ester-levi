import React, {useState} from 'react';
export const Timer=()=>{
    const[minute, setMinutes]=useState(0)
    console.log(minute)
    const[second, setSeconds]=useState(0)
    console.log(second)
    const[mseconds, setMseconds]=useState(0)
    console.log(mseconds)

    setTimeout(()=>{
        if(mseconds==59){
            setMseconds(0)
            setSeconds(second+1)
            if(second==59){
                setSeconds(0)
                setMinutes(minute+1)
            }
        }
        else setMseconds(mseconds+1)
    },1000/60)

    return(
        <div style={{margin: '9%'}}>
        <h1>Timer</h1>
        <h2>{minute}:{second}:{mseconds}</h2>
        <button onClick={'restert'} style={{background:'blue',color: 'pink',blokSize:100,fontSize:50,borderColor:'pink'}}> restart </button>
        </div>
    )
}