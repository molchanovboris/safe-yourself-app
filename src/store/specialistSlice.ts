import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "./store";
import { GetSpecialistsData } from '../libs/store/models/getSpecialistList.dto';

interface SpecialistState {
    data: GetSpecialistsData;
}

const initialState: SpecialistState = {
    data: {
        items: [],
        totalCount: 0
    }
}

export const SPECIALISTS_SLICE_KEY = "specialists";

export const specialistSlice = createSlice({
    name: SPECIALISTS_SLICE_KEY,
    initialState,
    reducers: {
        setAllUsers(state, {payload: data}: PayloadAction<GetSpecialistsData>) {
            state.data = data;
            return {
                ...state
            }
        }
    }
});

export const selectUsers = (state: RootState): SpecialistState => state.specialists;

export const {
    setAllUsers
} = specialistSlice.actions;