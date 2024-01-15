import react, { Component } from 'react';

// Global Variables
let x = 21;
const y = 124;
let title = "Welcome to string data";
let isAdmin = false;

const user = {
  name: "Raju",
  age: 22,
  email: "raju@gmail.com",
};

const emp = ["Manu", "Chirag", "John", "Ali"];

class Ex4 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        //Local Variable
        let x = 555;

        return(
            <div className="row">
                <div className="col">
                    <h2 className='bg-warning text-white p-2 text-center'>EXAMPLE-4</h2>
                </div>
                <div className="col-12">
                    <div className="border lead p-3 text-center">
                        <h3>Variables in Class Component</h3>
                        <hr />

                        <p><b>Number Variable X : </b>{x}</p>
                        <p><b>Number Variable Y : </b>{y}</p>
                        <p><b>Product of X * Y : </b>{x*y}</p>
                        <hr />

                        <p><b>String Variable TITLE : </b>{title}</p>
                        <hr />

                        <p><b>Boolean Variable ISADMIN : </b>{isAdmin}</p>
                        <hr />

                        <p><b>Condition Statement : </b>{x<y ? "Say True" : "Say False"}</p>
                        <p><b>Boolean Variable ISADMIN : </b>{isAdmin ? "Say True" : "Say False"}</p>
                        <hr />

                        <p><b>Object USER.NAME : </b>{user.name}</p>
                        <p><b>Object USER.AGE : </b>{user.age}</p>
                        <p><b>Object USER.EMAIL : </b>{user.email}</p>
                        <hr />

                        <p><b>Array EMP:</b>{emp}</p>
                        <p><b>Array EMP[0]: </b>{emp[0]}</p>
                        <p><b>Array EMP[1]: </b>{emp[1]}</p>
                        <p><b>Array EMP[2]: </b>{emp[2]}</p>
                        <p><b>Array EMP[3]: </b>{emp[3]}</p>
                        <hr />

                        <div>
                            {
                            emp.map((item, index)=>{
                                return(
                                <p key={index}><b>MAP() : </b>{index} {item}</p>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ex4;