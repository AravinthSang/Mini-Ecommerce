import{Link} from 'react-router-dom'

export default function ProductCard({item}){
    
    return   <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
    <Link to={"/product/"+item._id}>
        <img
           
            className="card-img-top mx-auto"
            src={item.images[0].image} /></Link>
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">
                <Link to={"/product/"+item._id} >{item.name}</Link>
            </h5>
            <div className="ratings mt-auto">
                <div className="rating-outer">
                    <div className="rating-inner" style={{width:`${item.ratings/5*100}%`}}></div>
                </div>
            </div>
            <p className="card-text">${item.price}</p>
            <Link to={"/product/"+item._id} id="view_btn" className="btn btn-block">View Details</Link>
        </div>
    </div>
</div>
}