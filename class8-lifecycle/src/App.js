import React, { Component, Fragment } from "react";
import Counter  from './component/Counter';
// import  ReactDOM  from 'react-dom/client';
import ReactDOM from "react-dom";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : "Mounting Phase",
    };
  }

  // User defined Mount Method
  mount() {
    ReactDOM.render(
    <React.StrictMode>
      <Counter counterProps={0} />
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

  // User Defined UnMount Method
  unmount() {
    console.log("Component UnMounted...!");
    ReactDOM.unmountComponentAtNode(document.getElementById("renderHere"));
  }
  
  render() {
    return(
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-3 text-success text-center">LIFECYCLE</h1>
            </div>
          </div>
          <hr />
          <div className="row my-3">
            <div className="col">
              <button 
              className="btn btn-outline-success" 
              onClick={this.mount.bind(this)}
              >
                Mount
              </button>
              <button
              className="btn btn-outline-danger float-end"
              onClick={this.unmount.bind(this)}
              >
                UnMount
              </button>
            </div>
          </div>
          <hr />
        </div>
        <section id="renderHere"></section>
      </Fragment>
    );
  }
}

export default App;
