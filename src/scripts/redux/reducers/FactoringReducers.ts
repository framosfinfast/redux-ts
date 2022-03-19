import { IFactoring } from "../../interface/redux/IFactoring";
import { types } from "../types";

const INIT_STATE: IFactoring = {
    loaded: false,
    habilitadoCeder: false,
    dtes: null
};

export const FactoringReducers = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case types.FACTORING_INIT: {
            return {
                ...state,
                loaded: true,
            };
        }
        case types.FACTORING_CHANGE_BLOCK_USUARIO: {
            return {
                ...state,
                habilitadoCeder: !!!state.habilitadoCeder,
            };
        }
        case types.FACTORING_LOAD_DTE: {
            let dtes = action.payload;
            return {
                ...state,
                habilitadoCeder: true,
                dtes
            };
        }
        case types.FACTORING_RESET: {

            return INIT_STATE;
        }
        default:
            return state;
    }
};