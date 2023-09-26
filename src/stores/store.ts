import { configureStore } from "@reduxjs/toolkit";
import productData from "./product-data";

export const store = configureStore({
  reducer: {
    products: productData,
  },
});
