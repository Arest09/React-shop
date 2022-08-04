export function reducer(state, action) {

  switch (action.type) {
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "DELETE_ITEM":
      return {
        ...state,
        order: state.order.filter((orderItem) => {
          return orderItem.id !== action.payload.id;
        }),
      };
    

    case "GET_ITEM":
      const ItemIndex = state.order.findIndex((orderItem) => {
        return action.payload.id === orderItem.id;
      });

      let newOrder = null;
      if (ItemIndex < 0) {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };

        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === ItemIndex) {
            return {
              ...orderItem,
              quantity: +(orderItem.quantity) + 1,
            };
          } else {
            return {
             ...orderItem,
              quantity: orderItem.quantity,
            };
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: action.payload.name,
      };

    case "TOGGLE_BASKET": {
        return{
            ...state,
            isBasketShow:!state.isBasketShow
        }
    }
    case "CHANGE_QUANTITY":
    console.log(state)
      return {
        ...state,
          order: state.order.map((orderItem)=>{
          if(orderItem.id === action.payload.itemId ){
            return{...orderItem,
                quantity: +(orderItem.quantity) + 1,
            }
          }
          else if(orderItem.id !== action.payload.itemId) {
            return{
              ...orderItem,
              quantity: action.payload.newQuantity,
            }
          }
        })

      }

    case "SET_GOODS":
      return{
        ...state,
        goods:action.payload || [],
        loading:false
      }
    default:
  return state;
  }
}


                   