import React, { Component, Fragment } from 'react'

class Ex5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            steps : 1
        }
        /* Ignore bind for now we will explain about binding soon. 
        Just know that it is necessary for right working of 'this' keyword */

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        alert('ClickHandler Function')
        this.setState({
            steps : this.state.steps+1
        });
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <div className="lead my-3 p-3 border">
                                <p><b>5) Class Component Event Listener / Binding inside the constructor</b></p>
                                <p>We have to call this.setState method (for class component) or useState hook (for functional component) inside the onClick handler to update state value.</p>

                                <p><b>Steps : </b> {this.state.steps} </p>

                                <button className="btn btn-outline-info" onClick={this.clickHandler}>Ex5 - Click Handler</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Ex5