import React from "react";
import '../Cards/Cards.css'


export default function Cards({img, name, temperament, weightMax, weightMin}) {

    return ( 
        <div>                          
         <h2>{d.name}</h2> 
         <img src={d.img} alt="img not foud" width="150px" height="100"/>
         <h3>{d.temperament}</h3>
         <h5>{d.weightMin} Peso min</h5>
         <h5>{d.weightMax} Peso Max</h5>
         </div>                              
       )
     


};