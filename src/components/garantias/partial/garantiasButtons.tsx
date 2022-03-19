import { useAppDispatch, useAppSelector } from "../../../scripts/redux/hooks";
import * as GarantiasActions from "../../../scripts/redux/actions/GarantiasActions";

export const GarantiasButtons = () => {
    const { tieneDeuda } = useAppSelector(storage => storage.garantias);
    const distpatch = useAppDispatch();

    const SeleccionarGarantia = (id: number) => {
        distpatch(GarantiasActions.GarantiasSelectOperationAction(id));
    };

    const ModificarDeuda = () => {
        distpatch(GarantiasActions.GarantiasSaveDebtAction(!tieneDeuda));
    };
    return (
        <div className="d-flex justify-content-center">
            <button
                onClick={() => SeleccionarGarantia(1)}
                className="btn btn-warning"
            >
                Select garantia 1
            </button>
            <button
                onClick={() => SeleccionarGarantia(2)}
                className="btn btn-danger"
            >
                Select garantia 2
            </button>
            <button
                onClick={ModificarDeuda}
                className="btn btn-success"
            >
                {tieneDeuda ? "Quitar deuda" : "Asignar deuda"}
            </button>
        </div>
    );
};
