import { createSlice } from "@reduxjs/toolkit";
import { IGarantias } from "../../interface/redux/IGarantias";
import { GarantiasInitAction, GarantiasResetAction, GarantiasSaveDebtAction, GarantiasSelectOperationAction } from "../actions/GarantiasActions";

const initialState: IGarantias = {
    loaded: false,
    garantiaSelected: null,
    tieneDeuda: false,
};

const slice = createSlice({
    name: "garantia",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GarantiasInitAction, (state) => {
                state.loaded = true;
            })
            .addCase(GarantiasSelectOperationAction, (state, action) => {
                state.garantiaSelected = action.payload;
            })
            .addCase(GarantiasSaveDebtAction, (state, action) => {
                state.tieneDeuda = action.payload;
            })
            .addCase(GarantiasResetAction, (state) => {
                state.loaded = initialState.loaded;
                state.garantiaSelected = initialState.garantiaSelected;
                state.tieneDeuda = initialState.tieneDeuda;
            })
            .addDefaultCase((_state) => { });
    },
});

export default slice.reducer;
