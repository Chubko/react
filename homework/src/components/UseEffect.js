import React, {useState, useEffect} from 'react';

const Test = ()=>{
    useEffect(()=>{
        console.log('mount');
        const interval = setInterval(()=> console.log('interval', 1000));

        return ()=>{ /*при умові в renderi counter !== 2 спрацює return useEffect ф-ї Test*/
            console.log('unmount');
            clearInterval(interval);
        }
    }, []);
    return(
        <h1>Will be unmounted</h1>
        )
}

export default function UseEffect(){
    const [counter, setCounter] = useState(1);
    const [todo, setToDo] = useState(null);

    const fetchData = async ()=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`);
        const json = await response.json();
        setToDo(json);
    }

    useEffect(()=>{
        console.log('effect');
        fetchData();
        }, [counter]);

    const handlerIncrement = ()=> setCounter(prevState => prevState + 1);
    const handlerReset = ()=> setCounter(1);
    const handleResetToDo = ()=> setToDo(null);

    return(
        <div>
            <h1>useEffect</h1>
            <h2>Counter: {counter}</h2>
            {counter !== 2 && <Test/>}
            <button onClick={handlerIncrement}>++</button>
            <button onClick={handlerReset}>reset</button>
            <button onClick={handleResetToDo}>resetToDo</button>

            {!!todo && (<h2>{todo.id}-{todo.title}</h2>)}
        </div>
    );
}