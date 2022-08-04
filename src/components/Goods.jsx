import { Item  } from "./GoodsItem";
import { useContext } from "react";
import { ShopContext } from "../context";


export function GoodsList(props) {
  const { goods = [] } = useContext(ShopContext );

  if (!goods.length) {
    return <h2>Ничего не найдено</h2>;
  }
  return (
    <div className="goods">
      {goods.map((goods) => {
        return <Item {...goods} key={goods.offerId} />;
      })}
    </div>
  );
}
