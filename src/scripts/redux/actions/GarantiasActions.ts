import { createAction } from '@reduxjs/toolkit';


export const GarantiasInitAction = createAction('GARANTIAS_INIT');

export const GarantiasSelectOperationAction = createAction('GARANTIAS_SELECT_OPERATION', (idOperacion: number) => {
    return {
        payload: idOperacion
    }
});
export const GarantiasSaveDebtAction = createAction('GARANTIAS_SAVE_DEBT', (tieneDeuda: boolean) => {
    return {
        payload: tieneDeuda
    }
});


export const GarantiasResetAction = createAction('GARANTIAS_RESET');

