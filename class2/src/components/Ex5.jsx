import react from 'react'

const Ex5 = (props) => {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h1 className='bg-warning text-white p-2 text-center'>REACT FUNCTIONAL PROPS</h1>
            </div>
            <div className="col-12">
                <div className="lead p-3 border">
                    {/* <p>{props}</p> */}
                    <p>{props.img}</p>
                    <p>{props.name}</p>
                    <p>{props.lorem}</p>
                </div>

                <div className="card">
                    <img src={props.img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.lorem}</p>
                        <button type="button" className="btn btn-outline-primary">View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ex5