import axios from 'axios';

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DESCRIPTION = "GET_DESCIPTION";

export const getDogs = ()=>{
    return (dispatch) => {
         axios.get('http://localhost:3001/dogs')
         .then(response =>{
            dispatch({
                type: GET_ALL_DOGS,
                payload: response.data
            })
         }).catch(
            error =>{
                dispatch({
                    type:Error,
                });
            }
         )
        
    }
};

export const getDescription = (id) => {
    // Enviar el id al reducere para crear la seccion de Description
    return async function (dispatch) {
        try {
            const json = await axios.get(`/dogs/${id}`);
            return dispatch ({
                type: GET_DESCRIPTION,
                payload: json.data
            })
        }
        catch(error) {
            return dispatch ({
                type: Error,
            })
        }
    }
}