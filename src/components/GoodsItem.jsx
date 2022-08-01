


export function Item(props) {
  const {
    displayName,
    price: { regularPrice },
    displayAssets,
    displayDescription,
    offerId:id,
  } = props;
  
  const{GetItem} = props;

  const [img] = displayAssets;
  const { background } = img;

 function handleCart(goodsItem) {
  GetItem(goodsItem)
 } 



  return (
    <div  className="row item">
      <div className="card">
        <div className="card-image">
          <img src={background} alt={displayName} />
          <span className="card-title">{displayName}</span>
        </div>
        <div className="card-content">
          <p>{displayDescription}</p>
          <div className="price right">{regularPrice} рублей</div>
        </div>
        <div class="card-action">
            <button  onClick={(e)=>{handleCart({displayName,background,regularPrice,id})}} className="btn">купить</button>
        </div>
      </div>
    </div>
  );
}
