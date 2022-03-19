import { useEffect } from "react";
import * as GarantiasActions from "../../scripts/redux/actions/GarantiasActions";
import { useAppDispatch, useAppSelector } from "../../scripts/redux/hooks";
import { GarantiasButtons } from "./partial/garantiasButtons";
import { GarantiasResults } from "./partial/garantiasResults";

const Garantias = () => {
    const distpatch = useAppDispatch();
    const { loaded } = useAppSelector((storage) => storage.garantias);

    useEffect(() => {
        const initial = setTimeout(() => {
            distpatch(GarantiasActions.GarantiasInitAction())

        }, 2000);

        return () => {
            clearTimeout(initial);
            distpatch(GarantiasActions.GarantiasResetAction())
        }
    }, [distpatch]);
    return (
        <div>
            <h1>Garantias</h1>
            {!loaded && <div>Cargando...</div>}
            {loaded && (
                <>
                    <GarantiasButtons /> <GarantiasResults />
                </>
            )}
        </div>
    );
};

export default Garantias;
