import { useAppSelector } from "../../../scripts/redux/hooks";

export const FactoringResults = () => {

    const { habilitadoCeder, dtes } = useAppSelector(storage => storage.factoring)
    return (
        <code className="d-flex justify-content-center">
            <table>
                <tbody>
                    <tr>
                        <td>Facturas cargadas:</td>
                        <td>{JSON.stringify(dtes)}</td>
                    </tr>
                    <tr>
                        <td>Habilitado ceder:</td>
                        <td>{habilitadoCeder ? "Sí" : "No"}</td>
                    </tr>
                </tbody>

            </table>
        </code>
    );
};
