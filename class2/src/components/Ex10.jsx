import react, { Component } from 'react';

class Ex10 extends Component {

    static defaultProps = {
        img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933",
        name: "Parent Card",
        lorem: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus consequatur quas laborum est corrupti itaque reiciendis maxime iusto dignissimos, culpa porro enim laboriosam cum, explicabo voluptates unde. Magnam, voluptatum dolore."
    }

    render() {
        const {img, lorem, name} = this.props;
        return (
            <div className="row">
                <div className="col-12">
                    <h2 className='bg-warning text-white p-2 text-center'>REACT CLASS COMPONENT DESTRUCTURING PROPS (Ex10 Example)</h2>
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
        )
    }
}

export default Ex10