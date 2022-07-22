import { Item } from "./GoodsItem";

export function GoodsList(props) {
  const { goods = [],GetItem } = props;

  if (!goods.length) {
    return <h2>Ничего не найдено</h2>;
  }
  return (
    <div className="goods">
      {goods.map((good) => {
        return <Item {...good} GetItem = {GetItem} key={good.offerId} />;
      })}
    </div>
  );
}
