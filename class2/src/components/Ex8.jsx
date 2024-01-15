import react, { Component } from 'react';

class Ex8 extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <h2 className='bg-warning text-white p-2 text-center'>REACT CLASS PROPS (Ex8 Example)</h2>
                </div>
                <div className="col-12">
                <div className="lead p-3 border">
                    {/* <p>{props}</p> */}
                    <p>{this.props.img}</p>
                    <p>{this.props.name}</p>
                    <p>{this.props.lorem}</p>
                </div>

                <div className="card">
                    <img src={this.props.img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.lorem}</p>
                        <button type="button" className="btn btn-outline-primary">View More</button>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Ex8;