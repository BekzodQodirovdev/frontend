import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productCount: 0,
    totalPrice: 0,
    products: [],
};

const cartReducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addPoductList: (state, action) => {
            const product = state.products.find(
                (item) => item.id === action.payload.id
            );
            if (!product) {
                return {
                    ...state,
                    productCount: state.productCount + 1,
                    products: [
                        ...state.products,
                        {
                            ...action.payload,
                            userCount: 1,
                            userPrice: Number(action.payload.price),
                        },
                    ],
                };
            }

            return state;
        },
        toggleAmount: (state, action) => {
            if (action.payload.type === "add") {
                const newProducts = state.products.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            userCount: item.userCount + 1,
                            userPrice: (item.userCount + 1) * item.price,
                        };
                    }
                    return item;
                });
                return { ...state, products: newProducts };
            }
            const newProducts = state.products.map((item) => {
                if (item.id === action.payload.id && item.userCount > 0) {
                    return {
                        ...item,
                        userCount: item.userCount - 1,
                        userPrice: (item.userCount - 1) * item.price,
                    };
                }
                return item;
            });
            return { ...state, products: newProducts };
        },
        deleteProduct: (state, action) => {
            return {
                ...state,
                productCount: state.productCount - 1,
                products: state.products.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        },
        totalPrice: (state) => {
            return {
                ...state,
                totalPrice: state.products.reduce((a, b) => a + b.userPrice, 0),
            };
        },
    },
});

export default cartReducer.reducer;

export const { addPoductList, toggleAmount, deleteProduct, totalPrice } =
    cartReducer.actions;
