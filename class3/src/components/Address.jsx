import React from 'react'

const Address = (props) => {
    return (
        <div>
            <h4 className='bg-secondary p-3 text-white'>Address</h4>
            <p><b>CITY : </b>{props.city}</p>
            <p><b>PIN : </b>{props.pin}</p>
        </div>
    )
}

export default Address