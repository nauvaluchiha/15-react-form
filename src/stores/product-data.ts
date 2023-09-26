import { createSlice } from "@reduxjs/toolkit";
import { Products } from "@/pages/product/components/table-column";

type ProductData = {
  data: Products[];
  // loading: boolean;
  // error: null;
};

const initialState: ProductData = {
  data: [],
  // loading: false,
  // error: null,
};

export const productData = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchDataProduct: (state, action) => {
      state.data = action.payload;
    },
    deleteProduct: (state, action) => {
      const { id } = action.payload;
      const index = state.data.findIndex((products) => products.id === id);
      state.data.splice(index, 1);
    },
    addProduct: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const selectProducts = (state: { products: ProductData }) => state.products.data;
export const { fetchDataProduct, deleteProduct, addProduct } = productData.actions;

export default productData.reducer;
