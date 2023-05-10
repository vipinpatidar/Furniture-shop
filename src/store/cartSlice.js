import { products } from "../data";
const { createSlice } = require("@reduxjs/toolkit");

const initialValue = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const { pages } = products;
// created new array with to same array
const productsArr = [];
pages.forEach((page) => {
  page.productList.forEach((product) => {
    productsArr.push(product);
  });
});

const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    addItem: (state, action) => {
      const item = productsArr.find((product) => product.id === action.payload);

      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (!existingItem) {
        state.items.push({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          numOfItem: 1,
        });
      } else {
        existingItem.numOfItem++;
      }

      state.totalPrice = state.items.reduce((acc, curr) => {
        return acc + curr.price * curr.numOfItem;
      }, 0);

      state.totalQuantity = state.items.reduce(
        (acc, curr) => acc + curr.numOfItem,
        0
      );
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem.numOfItem === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.numOfItem--;
      }
      state.totalPrice = state.items.reduce((acc, curr) => {
        return acc + curr.price * curr.numOfItem;
      }, 0);

      state.totalQuantity = state.items.reduce(
        (acc, curr) => acc + curr.numOfItem,
        0
      );
    },
    removeWholeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (state.items.length === 0) {
        state.totalPrice = 0;
        state.totalQuantity = 0;
      }
      state.totalPrice = state.items.reduce((acc, curr) => {
        return acc + curr.price * curr.numOfItem;
      }, 0);

      state.totalQuantity = state.items.reduce(
        (acc, curr) => acc + curr.numOfItem,
        0
      );
    },
    clearCart: (state, action) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addItem, removeItem, removeWholeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
