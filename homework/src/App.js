import React from 'react';
import {useSelector, useDispatch} from "react-redux";

export default function App(){
    const counter = useSelector(({counter})=>counter);
    const todo = useSelector(({todo})=>todo);
    const dispatch = useDispatch();
    let inputValue = '';

    const fetchData = async ()=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`);
        const json = await response.json();
        dispatch({type: 'SET_TODO_ITEM', payload: json});
    };

    const handlerIncrement = ()=> dispatch({type: 'INC_COUNTER'});
    const handlerDecrement = ()=> dispatch({type: 'DEC_COUNTER'});
    const handlerReset = ()=> dispatch({type: 'RESET_COUNTER'});
    const handleResetToDo = ()=> {dispatch({type: 'RESET_TODO'});};
    const handleToDoCompleted = ()=> {dispatch({type: 'TOGGLE_TODO_COMPLETED'});};
    const handleTitleChange = ()=> {dispatch({type: 'CHANGE_TODO_TITLE', payload: inputValue});};

    return(
        <>
        <div>
            <h1>Using Redux</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={handlerIncrement}>++</button>
            <button onClick={handlerDecrement}>--</button>
            <button onClick={handlerReset}>reset</button>
            <button onClick={fetchData}>setToDo</button>
            <button onClick={handleResetToDo}>resetToDo</button>
            <button onClick={handleToDoCompleted}>toggle</button>
            <input onChange={({target: {value}})=>inputValue=value}/>
            <button onClick={handleTitleChange}>change title</button>

            {!!todo && (<h2>{todo.id}-{todo.title}-{todo.completed.toString()}</h2>)}
        </div>
        </>
    )
}
