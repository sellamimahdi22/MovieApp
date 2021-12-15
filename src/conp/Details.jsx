import React from 'react'
import { Link } from 'react-router-dom'
const Details = (props) => {
    const det=props.detail.find(el=>el.id===Number(props.match.params.id))
console.log(det)
    return (
        <div>
        
         <h2>{det.Name}</h2>
        <h4>{det.desc}</h4>
        <iframe src={det.trailer}  frameborder="0" width="560" height="315"></iframe>
        <Link   to="/"> Home</Link>
        </div>
    )
}

export default Details
