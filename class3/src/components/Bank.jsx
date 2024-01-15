import React from 'react'

const Bank = (props) => {
    return (
        <div>
            <h4 className='bg-secondary p-3 text-white'>Bank Details</h4>
            <p><b>A/C No : </b>{props.accNo}</p>
            <p><b>Bank Name : </b>{props.bName}</p>
            <p><b>Bank Type : </b>{props.type}</p>
        </div>
    )
}

export default Bank