import { GET_ALL_DOGS, GET_DESCRIPTION} from "../actions";


const initialState = {
    dogs:[],
    alldogs:[],
    dogDesciption:[],
}


function rootReducer(state = initialState, action){
    switch (action.type){
        case GET_ALL_DOGS:
            return{
                ...state,
                alldogs: action.payload,
                dogs: action.payload,
            };
    
        default: return {
        ...state
    }
    case GET_DESCRIPTION:
        return {
          ...state,
          dogDesciption: action.payload,
          loading: false,
          error: false  
        }
       
}  
}

export default rootReducer;