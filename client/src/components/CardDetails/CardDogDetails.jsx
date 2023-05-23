import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../CardDetails/CardDogDetails.css"
import { getDescription } from "../../redux/actions";
import { useEffect } from "react";



function CardDogDetail (){
const {dogDescription } = useSelector((state)=> state);
console.log(dogDescription)
const dispatch = useDispatch();
const {id} = useParams();

useEffect(() => {
    dispatch(getDescription(id));
    dispatch(setLoading());
    return () => {
      dispatch(getClean()); // limpia el state
    }
  }, [dispatch, id]);


  

}








export default CardDogDetail