import React, {useMemo, useState, memo} from 'react';

const Test = memo(({name, sorted})=>{
    const [counter,setCounter] = useState(0);
    console.log('test was rendered');
    return(
        <h2 onClick={()=>setCounter(prev=>prev+1)}>counter: {counter}{name}</h2>
    )
});

export default function UseMemo(){
    const [arr, setArr] = useState([1,3,12,4,5]);
    const [sortOrder, setSortOrder] = useState('desc');

    const price = useMemo(()=>{
        return arr.reduce(((acc, el)=>acc+=el), 0);
    },[arr]);

    const sorted = useMemo(()=>{
        const arrClone = [...arr];
        if(sortOrder === 'asc'){
            return arrClone.sort((a,b)=>a-b);
        }
        if(sortOrder === 'desc'){
            return arrClone.sort((a,b)=>b-a);
        }
    }, [arr,sortOrder]);

    return(
        <div>
            <h1>useMemo</h1>
            <h2>price: {price}</h2>
            <button onClick={()=>setArr([...arr,Math.random()])}>add item to arr</button>
            <button onClick={() => setSortOrder((prev)=>prev==='desc'?'asc':'desc')}>sort</button>
            <Test name="test" sorted={sorted}/>
        </div>
    )
}
