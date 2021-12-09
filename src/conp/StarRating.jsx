import React from 'react'

const StarRating = ({rat,handleRating}) => {
    function stars (Rating){
        let star=[];
        for (let i = 1; i <= 5; i++) {
           if(i<=Rating){
               star.push(<span onClick={()=>handleRating(i)} style={{color:'gold',fontSize:"20",cursor:'pointer'}}>★</span>)
           }else star.push(<span onClick={()=>handleRating(i)} style={{color:'black',fontSize:"20",cursor:'pointer'}}>★</span>)
            
        }
        return star
    }
    return (
        <div>
            {stars(rat)}
        </div>
    )
}
StarRating.defaultProps={handleRating:()=>{}}
export default StarRating;
