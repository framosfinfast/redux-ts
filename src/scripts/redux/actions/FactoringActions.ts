import { types } from "../types";


export const FactoringInitAction = () => ({
    type: types.FACTORING_INIT,
});

export const FactoringLoadDteAction = (dtes: number[]) => ({
    type: types.FACTORING_LOAD_DTE,
    payload: dtes,
});

export const FactoringChangeBlockAction = () => ({
    type: types.FACTORING_CHANGE_BLOCK_USUARIO
});


export const FactoringResetAction = () => ({
    type: types.FACTORING_RESET
});
