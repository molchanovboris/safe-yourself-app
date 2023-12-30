import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "./store";
import { ISpecialist } from '../libs/store/models/getSpecialistList.dto';

interface SpecialistState {
    data: ISpecialist[] | [];
}

const initialState: SpecialistState = {
    data: [],
}

export const SPECIALISTS_SLICE_KEY = "specialists";

export const specialistSlice = createSlice({
    name: SPECIALISTS_SLICE_KEY,
    initialState,
    reducers: {
        setAllUsers(state, {payload: data}: PayloadAction<ISpecialist[]>) {
            state.data = [...state.data, ...data];   
            return state;
        }
    }
});

export const selectUsers = (state: RootState): SpecialistState => state.specialists;

export const {
    setAllUsers
} = specialistSlice.actions;