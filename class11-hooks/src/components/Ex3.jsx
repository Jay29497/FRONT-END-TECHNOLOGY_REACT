import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const url = 'https://jsonplaceholder.typicode.com';
/* 
    1. Mount
        useEffect(() => {},[])

    2. Update
        useEffect(() => {},[dependency])
    
    3. UnMount
        useEffect(() => {
            return () => {}
        },[])
*/
const Ex3 = (props) => {
    // Server Data State
    const [posts, setPosts] = useState([]);

    // Pagination States
    const [currentItems, setCurrentItems] = useState([]) // current filtered data
    const [itemOffset, setItemOffset] = useState(0) // starting index
    const [pageCount, setPageCount] = useState(0)

    const getePosts = async() => {
        await fetch(`${url}/posts`)
        .then(res => res.json()).then(out => {
            console.log(out);
            setPosts(out);
        }).catch(error => console.log(error.message));
    }

    useEffect(()=>{
        getePosts();
        const endOffset = itemOffset + props.itemsPerPage;
        // console.log(`init offset = ${itemOffset} - end offset= ${endOffset}`)
        const data = posts.slice(itemOffset, endOffset);
        console.log(`Data = ${data}`);
        setCurrentItems(data);
        const pCount = Math.ceil(posts.length / props.itemsPerPage);
        setPageCount(pCount);
    }, [posts]);

    // Page click handler, e = event
    const handler = (e) => {
        console.log('item =', e.selected);
        const newOffset = Number(e.selected * props.itemsPerPage) % posts.length;
        console.log('newOffset =', newOffset);
        setItemOffset(newOffset)
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h5 className="display-3">useEffect Hook</h5>
                    <p className="text-secondary">
                        useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in.
                    </p>
                    <p className="text-secondary">
                        THAT GETS TRIGGER FOR componentDidMount, componentDidUpdate and componentWillUnmount lifecycle.</p>
                </div>
            </div>
            <hr />
            <div className="row">
                {
                    currentItems && currentItems.map((item,index) => {
                        return (
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4" key={index}>
                                <div className="card my-2">
                                    <div className="card-header">
                                        <h5 className="card-title text-center"> { item.id } { item.title }</h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-success">
                                            { item.body }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row my-5">
                <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
                    <ReactPaginate
                        className="pagination"
                        pageCount={pageCount}
                        pageClassName="page-item"
                        pageLinkClassName="page-link"    
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        activeClassName="active"
                        activeLinkClassName="active"
                        onPageChange={handler}
                    />
                </div>
            </div>
        </div>
    )
}

export default Ex3