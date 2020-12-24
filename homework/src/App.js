import React from 'react';
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReduce";

export default function App(){

    return(
        <div>
            <UseState user={{name: 'test2', age: 2}}/>
            <hr/>
            <UseEffect/>
            <hr/>
            <UseReducer/>
        </div>

    );
}