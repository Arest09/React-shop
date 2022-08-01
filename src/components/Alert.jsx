import {useEffect } from "react";
import '../alert.css'
export function Alert(props) {
  const {name,closeAlert} = props;

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
