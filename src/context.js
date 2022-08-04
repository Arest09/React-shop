import { createContext,useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();


const initialState = {
    goods:[],
    loading:true,
    order:[],
    isBasketShow:false,
    alert :'',
}

export const ContextPorvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState)

    state.closeAlert = () =>{
       dispatch({type:'CLOSE_ALERT'})
    }

    state.deleteItem = (itemId)=>{
        dispatch({type:'DELETE_ITEM',payload:{id:itemId}})
    }



    state.changeQuantity = (newQuantity,itemId)=>{
        dispatch({type:'CHANGE_QUANTITY',payload:{
            newQuantity,
            id:itemId,
        }})
    }

    state.GetItem = (item) =>{dispatch({type:'GET_ITEM',payload:item})
    }

    state.handleBasketShow = ()=>{
        dispatch({type:'TOGGLE_BASKET'})
    }

    state.setGoods = (data)=>{
        dispatch({type:'SET_GOODS',payload:data})
    }
 
    return<ShopContext.Provider value={state}>
         {children}
    </ShopContext.Provider>
}