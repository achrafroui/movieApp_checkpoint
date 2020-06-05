import React from 'react'
import './list.css'

const Movielist = (props) => {
    return (
        <div className="container">
             {props.list.map((e,index)=>
           <div key={index}>
               
           <h2 >{e.Title}</h2>
           <img  src={e.Image} alt="Movie Poster" width="300px" height="350px"></img>
           <p className="desc">{e.Descr}</p>
           
           <p className="rating"> {e.Rating} <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/512px-Star_icon_stylized.svg.png" alt="star" id="star"/> </p>
           
           
            </div>
           )}
            
        </div>
    )
}

export default Movielist
