import React, { Fragment } from 'react'
import UserCard from './UserCard';

const User = (props) => {
    return (
        <Fragment>
            <div className="container my-3">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center text-primary display-5">User's Details</h2>
                        </div>
                    </div>
            </div>
            <div>
            {
                props.userData.map((item, index) => {
                return( <UserCard key={index} {...item}/> )
                })
            }
            </div>
        </Fragment>
    )
}

export default User;