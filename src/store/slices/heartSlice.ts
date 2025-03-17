import { createSlice } from "@reduxjs/toolkit";

interface HeartState {
    data: { id: number }[];
}

const initialState: HeartState = { data: [] };

const heartSlice = createSlice({
    name: "heart",
    initialState,
    reducers: {
        addHeart: (state, action: { payload: { id: number } }) => {
            const findData = state.data.find(
                (item) => item.id === action.payload.id
            );
            if (!findData) {
                state.data.push({ id: action.payload.id });
            }
        },
        delHeart: (state, action: { payload: { id: number } }) => {
            state.data = state.data.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});

export const { addHeart, delHeart } = heartSlice.actions;
export default heartSlice.reducer;
