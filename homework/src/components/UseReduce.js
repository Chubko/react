import React, {useEffect, useReducer, useState} from 'react';

const reducer = (state, action) =>{
    switch (action.type){
        case 'SET_TODO_ITEM': {
            return action.payload;
        }
        case 'RESET_TODO': {
            return null;
        }
        case 'TOGGLE_TODO_COMPLETED': {
            return {
                ...state,
                completed: !state.completed
            }
        }
        case 'CHANGE_TODO_TITLE': {
            return {
                ...state,
                title: action.payload
            }
        }
        default: {
            console.error('not valid action', action.type);
            return state;
        }
    }
}
const initialState = null;

export default function UseReducer(){
    const [counter, setCounter] = useState(1);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, inputChange] = useState('');

    const fetchData = async ()=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`);
        const json = await response.json();
        dispatch({type: 'SET_TODO_ITEM', payload: json});
    };

    useEffect(()=>{
        console.log('effect');
        fetchData();
    }, [counter]);

    const handlerIncrement = ()=> setCounter(prevState => prevState + 1);
    const handlerReset = ()=> setCounter(1);
    const handleResetToDo = ()=> {
        dispatch({type: 'RESET_TODO'});
    };
    const handleToDoCompleted = ()=> {
        dispatch({type: 'TOGGLE_TODO_COMPLETED'});
    };
    const handleTitleChange = ()=> {
        dispatch({type: 'CHANGE_TODO_TITLE', payload: inputValue});
    };

    return(
        <div>
            <h1>useReduce</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={handlerIncrement}>++</button>
            <button onClick={handlerReset}>reset</button>
            <button onClick={handleResetToDo}>resetToDo</button>
            <button onClick={handleToDoCompleted}>toggle</button>
            <input value={inputValue} onChange={({target: {value}})=>inputChange(value)}/>
            <button onClick={handleTitleChange}>change title</button>

            {!!state && (<h2>{state.id}-{state.title}-{state.completed.toString()}</h2>)}
        </div>
    )}
