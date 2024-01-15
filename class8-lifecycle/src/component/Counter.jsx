import React, { Component, Fragment } from "react";
import  ReactDOM  from 'react-dom';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: false
        };
        console.log("THIS IS COUNTER CONSTRUCTOR METHOD..!");
    }

    componentWillMount(){
        console.log("Component Will Mount (Deprecated)");
    }
    componentDidMount(){
        console.log("Component Did Mount Called");
    }

    // User Defined Method
    updateCounter(){
        ReactDOM.render(
            <React.StrictMode>
              <Counter counterProps={this.props.counterProps + 1} />
            </React.StrictMode>,
            document.getElementById("renderHere")
        );

        /* const root = ReactDOM.createRoot(document.getElementById("renderHere"));
        root.render(
            <React.StrictMode>
                <Counter counterProps={this.props.counterProps+1} />
            </React.StrictMode> 
        ); */
    }

    // Deprecated
    componentWillReceiveProps(nP, nC){
        console.log("Component will receive props");
        console.log("New Props =", nP);
        console.log("New State", nC);

        if (nP.counterProps > 5) {
            this.setState({
                isActive: true
            });
        }
    }

    // Decision Maker
    shouldComponentUpdate(nP, nS){
        console.log("Should component update?");
        console.log("newProps =", nP);
        console.log("newState", nS);
        return true;
    }
    
    // Deprecated
    componentWillUpdate(nP, nS){
        console.log("Component will update");
        console.log("newProps =", nP);
        console.log("newState", nS);
    }

    render() {
        console.log("This is a Counter Render Method..!");
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-primary text-center">Counter</h1>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col text-center">
                            <h1>{this.props.counterProps}</h1>
                            <div className="lead p-3 border text-center">
                                {
                                    this.state.isActive ? <h1 className="text-success">WELCOME TO LIFECYCLE METHODS</h1> : (<div>
                                            <h1 className="text-secondary">Need More Counts</h1>
                                            <button type="button" className="btn btn-outline-warning" onClick={this.updateCounter.bind(this)}> Add + 1 (Update Props Value) </button>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
            </Fragment>
        );
    }

    componentDidUpdate(oP, oS) {
        console.log("Component did update");
        console.log("oldProps =",oP);
        console.log("oldState =",oS);
    }

    componentWillUnmount() {
        console.log("Component successfully unmounted");
    }
}

export default Counter;