import React, {useState} from 'react';

export default function UseState({user:propUser}){
    const [counter, setCounter] = useState(0);
    // const [user, setUser] = useState(null);
    const [user, setUser] = useState(propUser || null)

    const handlerIncrement = ()=> setCounter(prevState => prevState + 1);
    const handlerReset = ()=> setCounter(0);
    const handleUser = ()=> setUser({name: 'test', age: 100})
    const handleResetUser = ()=> setUser(null);

    return(
        <div>
            <h1>useState</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={handlerIncrement}>++</button>
            <button onClick={handlerReset}>reset</button>
            <button onClick={handleUser}>setUser</button>
            <button onClick={handleResetUser}>resetUser</button>

            {!!user && (<h2>{user.name}-{user.age}</h2>)}
        </div>
    );
}