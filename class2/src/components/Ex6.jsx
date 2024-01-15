import react from 'react'

const Ex6 = (props) => {
    const {img, lorem, name} = props;
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h1 className='bg-warning text-white p-2 text-center'>REACT FUNCTIONAL PROPS (EX-6)</h1>
            </div>
            <div className="col-12">
                <div className="lead p-3 border">
                    {/* <p>{props}</p> */}
                    <p>{img}</p>
                    <p>{name}</p>
                    <p>{lorem}</p>
                </div>

                <div className="card">
                    <img src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{lorem}</p>
                        <button type="button" className="btn btn-outline-primary">View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ex6