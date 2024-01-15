import React, { Fragment } from "react";

const GrandChild1 = (props) => {
    const {age, name} = props;
    return (
        <Fragment>
            <div className="row my-3">
                <div className="col-12">
                    <h3 className="text-secondary">This is the GrandChild Component - 1</h3>
                </div>
                <div className="col-12">
                    <div className="lead border p-3 rounded">
                        <p>User Age is = <span>{age}</span></p>
                        <p>User Name is = <span>{name}</span></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default GrandChild1