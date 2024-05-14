import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    addItems: (state, action) => {
      const details = JSON.parse(action.payload);

      if (state.items.hasOwnProperty(details.id)) {
        state.items[details.id].count++;
      } else {
        state.items[details.id] = {
          count: 1,
          details: details,
        };
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;

      if (state.items[id].count > 1) {
        state.items[id].count--;
      } else {
        delete state.items[id];
      }
    },

    clearCart: (state, action) => {
      console.log(state); // this will a proxy object
      console.log(current(state)); // this will actually print the state

      Object.keys(state.items).forEach((k) => delete state.items[k]);
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
