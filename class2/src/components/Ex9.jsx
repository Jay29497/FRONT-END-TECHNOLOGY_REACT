import react, { Component } from 'react';

class Ex9 extends Component {
    render() {
        const {img, lorem, name} = this.props;
        return (
            <div className="row">
                <div className="col-12">
                    <h2 className='bg-warning text-white p-2 text-center'>REACT CLASS COMPONENET DESTRUCTURING PROPS (Ex9 Example)</h2>
                </div>
                <div className="col-12">
                    <div className="lead p-3 border">
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
        );
    }
}

export default Ex9;