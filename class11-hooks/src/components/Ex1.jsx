import React, { useState } from "react";

const Ex1 = () => {
    // const [state,stateHandler] = useState(initValue) // declare react states in functional component
    let count = 0;
    const [counter, setCounter] = useState(0);

    const increment = () => {
        count = count + 1;
        console.log(count);
        setCounter(counter+1);
        console.log(counter);
        setIsView(!isView);
    }

    const [title, setTitle] = useState('Welcome to react state');
    const [isView, setIsView] = useState(true);
    const [colors, setColors] = useState(['red', 'blue', 'green']);
    const [user, setUser] = useState({
        name: 'Jay',
        email: 'jay@gmail.com'
    })
    const [inputValue, setInputValue] = useState("React Hooks");

    const onChange = (event) => {
        /* console.log(event);
        console.log(event.target); */
        console.log(event.target.value);
        setInputValue(event.target.value);
    }
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col text-center">
                    <h1 className="display-4 text-success">useState Hook</h1>
                    <p className="text-secondary">
                        THAT ALLOWS YOU TO HAVE A STATE VARIABLES IN FUNCTIONAL COMPONENTS.
                    </p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    <div className="lead p-3 border rounded my-3">
                        <h3>Example - 1</h3>
                        <p><b>Count = </b>{count}</p>
                        <button type="button" className="btn btn-outline-success" onClick={increment}>Increment</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="lead p-3 border rounded my-3">
                        <h3>Example - 2</h3>
                        <p><b>Counter = </b>{counter}</p>
                        <button type="button" className="btn btn-outline-success" onClick={increment}>Increment</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="lead p-3 border rounded my-3">
                        <h3>Example - 3</h3>
                        <p><b>Title = </b>{title}</p>
                        <p><b>isView = </b>{isView && "true"}</p>
                        <p><b>isView = </b>{isView ? "Condition is True...!" : "Condition is False...!"}</p>
                        <button type="button" className="btn btn-outline-success" onClick={increment}>Increment</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="lead p-3 border rounded my-3">
                        <h3>Example - 4</h3>
                        <p><b>Colors = </b>{colors}</p>
                        <p><b>Colors = </b>{colors && colors.map((item, index)=>{
                            return ( <span key={index}>{index}) {item} <br /></span> );
                        })}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="lead p-3 border rounded my-3">
                        <h3>Example - 5</h3>
                        <p><b>User Name = </b>{user.name}</p>
                        <p><b>User Email = </b>{user.email}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="lead p-3 border rounded my-3">
                        <h3>Example - 6</h3>
                        <input type="text" name="name" id="name" placeholder="Enter some text" className="form-control" onChange={onChange}/>
                        <p><b>Input Value = </b>{inputValue}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ex1