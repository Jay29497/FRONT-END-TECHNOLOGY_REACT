import { Fragment } from "react";
import User from "./components/User";
import users from "./data/users";

function App() {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bg-success text-center text-white p-3 rounded shadow">
              <h1>FUNCTIONAL COMPONENT PROPS</h1>
            </div>
          </div>
        </div>
      </div>
      <User userData={users} />
    </Fragment>
  );
}

export default App;
