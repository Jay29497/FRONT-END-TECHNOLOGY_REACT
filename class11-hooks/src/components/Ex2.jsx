import React, { useReducer, useState } from "react";

// Example - 2
const reducer = (state, action) => {
    try {
        switch (action.type) {
            case "INCREMENT":
                return { count: state.count+1, showText : state.showText }
                break;
            case "TOGGLESHOWTEXT":
                return { count: state.count, showText : !state.showText }
                break;
                default:
                    return state; // Return empty state
                    break;
        }
    } catch (error) {
        console.log(error.message)
    }
}

// Example - 3
//Initial State
const initialState = { width: 50 };

// Reduce action and state logic
const reduce = (states, action) => {
    try {
        switch (action) {
            case "plus":
                return { width: states.width + 10 };
                case "minus":
                return { width: Math.max(states.width - 10) };
            default:
                throw new Error("Sorry, Not a valid action..!")
                break;
        }
    } catch (error) {
        console.log(error.message);
    }
}

const Ex2 = () => {
    const [counter, setCounter] = useState(0);
    const [isView, setIsView] = useState(false);

    const increment = () => {
        setCounter(counter+1);
        setIsView(!isView);
    }

    /* const [state, dispatcher] = useReducer(reducer, initialstate or InitialValue)
    
    State = Is used for declare variables or state
    Dispatcher = 1) Is used for call state object.
                 2) Helps to passing an action constants through dispatcher
    Reducer = 1) Is a function, is used for handle the actions.
              2) Action is used for to determine what kind of action try to take */

    const [state, dispatcher] = useReducer(reducer, {count:0, showText: true});
    const [states, dispatch] = useReducer(reduce, initialState);

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col text-center">
                    <h1 className="display-4 text-success">useReducer Hook</h1>
                    <p className="text-secondary">
                        useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
                    </p>
                    <p className="text-secondary">useReducer also lets you optimize performance for components tht trigger deep updates.</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    <div className="lead p-3 border rounded my-3">
                        <h3>Example - 1</h3>
                        <p><b>Count = </b>{counter}</p>
                        <p><b>isView = </b>{ isView && <b>Condition is True</b>}</p>
                        <p><b>isView = </b>{ isView ? "Condition is True...!" : "Condition is False...!"}</p>
                        <button type="button" className="btn btn-outline-success" onClick={increment}>Increment</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="lead p-3 border my-3">
                        <h3>Example - 2</h3>
                        <p><b>Count = </b>{state.count}</p>
                        <p><b>ShowText = </b>{state.showText && "This is True Condition"}</p>
                        <button type="button" className="btn btn-outline-success" onClick={()=>{
                            dispatcher({type: 'INCREMENT'});
                            dispatcher({type: 'TOGGLESHOWTEXT'});
                        }}>Reducer</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="lead p-3 border my-3">
                        <h3>Example - 3</h3>
                        <article className="bg-success my-3" style={{width:states.width}}>Article</article>
                        <button className="btn btn-outline-success" onClick={() => dispatch("plus")}>
                            Increase
                        </button>
                        <button 
                            className="btn btn-outline-danger float-end" 
                            onClick={() => dispatch("minus")}>
                            Decrease
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ex2