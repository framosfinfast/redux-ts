import { useAppDispatch, useAppSelector } from "../../../scripts/redux/hooks";
import { FactoringChangeBlockAction, FactoringLoadDteAction } from "../../../scripts/redux/actions/FactoringActions";

export const FactoringButtons = () => {
    const { habilitadoCeder } = useAppSelector(storage => storage.factoring);
    const distpatch = useAppDispatch();

    const LoadDtes = () => {
        let dtes = [1, 2, 3, 4, 5]
        distpatch(FactoringLoadDteAction(dtes));
    };

    const ClearDtes = () => {
        let dtes: number[] = [];
        distpatch(FactoringLoadDteAction(dtes));
    };

    const ModificarPoderCeder = () => {
        distpatch(FactoringChangeBlockAction());
    };
    return (
        <div className="d-flex justify-content-center">
            <button
                onClick={LoadDtes}
                className="btn btn-warning"
            >
                Cargar Dtes
            </button>
            <button
                onClick={ClearDtes}
                className="btn btn-danger"
            >
                Quitar Dtes
            </button>
            <button
                onClick={ModificarPoderCeder}
                className="btn btn-success"
            >
                {!habilitadoCeder ? "Habilitar para ceder" : "Bloquear ceder"}
            </button>
        </div>
    );
};
