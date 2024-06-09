import { Fragment, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'

export default function Home() {

    const[searchparam,setSearchparam]= useSearchParams()
    const [product,setproduct]= useState([])
    useEffect(()=>{
        
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchparam)
        .then(res=>res.json())
        .then(res=>setproduct(res.products))
    },[searchparam])

    return <Fragment>
        

        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
            <div className="row">
                {product.map(item=>(<ProductCard item={item}/>))}
               
            </div>
        </section>

       
    </Fragment>
}