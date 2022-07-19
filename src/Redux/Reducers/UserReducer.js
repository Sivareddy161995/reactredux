
import { FETCH_USERS_FAIL, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../Actions/actionTypes";

const initialState={
    users:[],
    error:'',
    isLoading:false
}

const UserReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
        return{...state,isLoading:true}

        case FETCH_USERS_SUCCESS:
            return{isLoading:false,users:action.data,error:''}
         case FETCH_USERS_FAIL:
            return{isLoading:false,users:[],error:action.data} 
            default:
                return state;  

        }
    }
export default UserReducer