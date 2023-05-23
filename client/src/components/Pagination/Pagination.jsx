import React from "react";
import "../Pagination/Pagination.css"

export default function pagination({dogPage, allDogs, pagination}){
    const pageNumber = [];
    for (let i = 1; i < Math.ceil(allDogs/dogPage); i++) {
        pageNumber.push(i);
    }
    return(
        <nav>
            <ul className = "paginationBar">
                {
                    pageNumber && pageNumber.map( number => {
                        return(
                            <a key={number} className="">
                                <button className = "pagNumber" onClick={() => pagination(number)}>
                                    {number}
                                </button>
                            </a>
                        )
                    })
                }
            </ul>
        </nav>
    )
}