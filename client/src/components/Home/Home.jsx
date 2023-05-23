import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getDogs } from "../../redux/actions";
import Pagination from "../Pagination/Pagination.jsx";




export default function Home(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDogs())
    },[dispatch])

    const alldogs = useSelector((state)=> state.dogs);
    
    const [currentPage, setCurrentPage] =useState(1);
    const [ dogPage, setDogPage] = useState(8);

    const indexOfLastDog = currentPage * dogPage;
    const indexOfFirstDogs = indexOfLastDog - dogPage;
    const currentDogs = alldogs.slice(indexOfFirstDogs, indexOfLastDog)

    const pagination = (pageNumber) => {
      setDogPage(8)
      setCurrentPage(pageNumber)
    }

    


  




    return(
    <div>
      <div>
        {
          currentDogs.map(d => {
            return ( 
                                         
            )
          })
        }
      </div>
                  <div className = 'pagination'> 
                                       
                <div>
                <Pagination
                  dogPage={dogPage}
                  allDogs={alldogs.length}
                  pagination={pagination}
                />
              </div>
                
                </div>  

    </div>

  )
}


