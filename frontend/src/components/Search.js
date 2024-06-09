import { useState } from "react"
import {  useNavigate } from "react-router-dom"
export default function Search(){
    const navigate=useNavigate()

    const [keyword,setkeyword]=useState("")
    function find(){
        navigate('/search?keyword='+keyword)
    }

    return   <div className="input-group">
    <input
        type="text"
        id="search_field"
        className="form-control"
        placeholder="Enter Product Name ..."
        onChange={(e)=>(setkeyword(e.target.value))}
        onBlur={find}
    />
    <div className="input-group-append">
        <button id="search_btn" className="btn" onClick={find}>
            <i className="fa fa-search" aria-hidden="true"></i>
        </button>
    </div>
</div>
}