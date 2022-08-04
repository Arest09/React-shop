import {useEffect } from "react";
import '../alert.css'

import { useContext } from "react";
import { ShopContext } from "../context";

export function Alert(props) {
  const {name,closeAlert} = useContext(ShopContext);

  useEffect(()=>{
  
    const timerId = setTimeout(closeAlert,1000);
    return()=>{
        clearTimeout(timerId)
    }
  },[name])

  return (
    <div id="toast-container">
        <div className="toast">вы добавили продукт {name}</div>
    </div>
  );
}
