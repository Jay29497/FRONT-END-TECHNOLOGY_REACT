import React, { useContext } from "react";
import { userDetailsContext } from "../../Ex9";

const GrandChild2 = () => {
    const contextData = useContext(userDetailsContext);
    return (
        <div className="row my-3">
            <div className="col-12">
                <h3 className="text-secondary">This is the GrandChild Component - 2</h3>
            </div>
            <div className="col-12">
                <div className="lead border p-3 rounded">
                    <p>User Age is = <span>{contextData.age}</span></p>
                    <p>User Name is = <span>{contextData.name}</span></p>
                </div>
            </div>
        </div>
    )
}

export default GrandChild2