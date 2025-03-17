import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import heartSlice from "./slices/heartSlice";
import { loadState, saveState } from "@/config/storage";

export const store = configureStore({
    reducer: {
        heart: heartSlice,
    },
    preloadedState: {
        heart: loadState("heart"),
    },
});

store.subscribe(() => {
    saveState("heart", store.getState()?.heart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
