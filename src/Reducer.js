export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) => {
  console.log("in getBasketTotal")
  if(basket.length!=0){
     let sum = 0;
    basket.map((item) => {
      sum += item.price;
      return sum;
    });
    return sum
  }
  else {
    console.log('else')
    return 0
  }
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cont remove product (id:${action.id}) as it is not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      console.log(action.user)
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
