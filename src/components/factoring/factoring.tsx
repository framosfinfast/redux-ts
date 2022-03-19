import { useEffect } from "react";
import { FactoringInitAction, FactoringResetAction } from "../../scripts/redux/actions/FactoringActions";
import { useAppDispatch, useAppSelector } from "../../scripts/redux/hooks";
import { FactoringButtons } from "./partial/factoringButtons";
import { FactoringResults } from "./partial/factoringResults";


const Factoring = () => {
    const distpatch = useAppDispatch();
    const { loaded } = useAppSelector((storage) => storage.factoring);

    useEffect(() => {
        const initial = setTimeout(() => {
            distpatch(FactoringInitAction())

        }, 2000);

        return () => {
            clearTimeout(initial);
            distpatch(FactoringResetAction())
        }
    }, [distpatch]);
    return (
        <div>
            <h1>Factoring</h1>
            {!loaded && <div>Cargando...</div>}
            {loaded && (
                <>
                    <FactoringButtons /> <FactoringResults />
                </>
            )}
        </div>
    );
};

export default Factoring;
