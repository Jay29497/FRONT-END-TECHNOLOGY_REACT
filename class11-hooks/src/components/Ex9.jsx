import React, { createContext, useState } from "react";
import Child1 from "./Ex9-sub/Child1";
import Child2 from "./Ex9-sub/Child2";

export const userDetailsContext = createContext(null);
const Ex9 = (props) => {
    const [userDetails, setUserDetails] = useState({
        name: "Anju",
        age: 30
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h5 className="display-3">createContext and useContext Hook</h5>
                    <p>
                        IS USED TO CREATE A COMMON DATA THAT CAN BE ACCESSED THROUGHOUT THE COMPONENT HIERARCHY.
                    </p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col text-center">
                    <h3 className="display-6 text-secondary">
                        This is the Parent Component.
                    </h3>
                </div>
            </div>
            <hr />
            <Child1 {...userDetails}/>
            <userDetailsContext.Provider value={userDetails}>
                <Child2 />
            </userDetailsContext.Provider>
        </div>
    )
}

export default Ex9