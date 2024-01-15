import React, { Component } from 'react';
import UserCard from './UserCard';

class Users extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map((item, index)=>{
                        return(<UserCard key={index} {...item}/>)
                    })
                }
            </div>
        );
    }
}

export default Users;