import { Fragment } from "react";
import Ex1 from "./components/Ex1";
import Ex2 from "./components/Ex2";
import Ex3 from "./components/Ex3";
import Ex4 from "./components/Ex4";
import Ex5 from "./components/Ex5";
import Ex6 from "./components/Ex6";
import Ex7 from "./components/Ex7";
import Ex8 from "./components/Ex8";
import Ex9 from "./components/Ex9";

function App() {
  return (
    <Fragment>
      <div className="container">
      <div className="row">
        <div className="col">
          <div className="lead my-3 p-3 border rounded">
            <h1 className="display-4 text-warning">
              HANDLING EVENTS IN REACT COMPONENTS
            </h1>
          </div>
        </div>
      </div>
    </div>
    <Ex1 />
    <Ex2 />
    <Ex3 />
    <Ex4 />
    <Ex5 />
    <Ex6 />
    <Ex7 />
    <Ex8 />
    <Ex9 />
    </Fragment>
  );
}

export default App;
