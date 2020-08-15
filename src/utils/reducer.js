//  * Initial State
export const initialState = {
  user: null,
  basket: [
    {
      id: '3234234234',
      title:
        'New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Grey (2nd Generation)',
      price: 769.0,
      rating: 5,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._AC_SX679_.jpg',
    },
    {
      id: '32342342334',
      title:
        'New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Grey (2nd Generation)',
      price: 769.0,
      rating: 5,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._AC_SX679_.jpg',
    },
  ],
};

// * Reducer
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      // * Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      // * Logic to remove the item from a basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // * item exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id} as its not present in the basket)`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
