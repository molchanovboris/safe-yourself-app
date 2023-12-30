import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "./store";

interface CategoriestState {
    data: any;
}

const initialState: CategoriestState = {
    data: []
}

export const CATEGORIES_SLICE_KEY = "categories";

export const categorySlice = createSlice({
    name: CATEGORIES_SLICE_KEY,
    initialState,
    reducers: {
        setAllCategories(state, {payload: data}: PayloadAction<any[]>) {
            state.data = data;
            return state;
        }
    }
});

export const selectCategories = (state: RootState): CategoriestState => state.specialists;

export const {
    setAllCategories
} = categorySlice.actions;