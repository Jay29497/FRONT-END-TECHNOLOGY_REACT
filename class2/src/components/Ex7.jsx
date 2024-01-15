import react from 'react'

const Ex7 = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <h1 className="bg-warning text-white p-2 text-center">REACT FUNCTIONAL DEFAULTPROPS (EX7 EXAMPLE) </h1>
            </div>
            <div className="col-12">
                <div className="lead border p3">
                    <h2 style={{backgroundColor : props.color}}>{props.name}</h2>
                </div>
            </div>
        </div>
    )
}

Ex7.defaultProps = {
    color : "#000",
    name : "REACT FUNCTIONAL DEFAULTPROPS"
}
export default Ex7