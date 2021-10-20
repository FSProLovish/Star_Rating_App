import React, { useState } from 'react';

function Form() {
    const[username,setUsername]=useState("");
    const[write,setWrite]=useState("");
    const[count,setCount]=useState(0);
  
    return (
    <div>
        <p>Update the count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Hey Click!</button>
        <p>Name is: {username}</p>
        <input type="text" value={username} onChange={(event)=>setUsername(event.target.value)} />
        <br />
        <p>Write Something About Yourself!</p>
        <textarea onChange={(event)=>setWrite(event.target.value)}></textarea>
        <p>{write}</p>
    </div>
    )
}

export default Form;