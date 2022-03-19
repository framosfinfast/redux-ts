import { useAppSelector } from "../../../scripts/redux/hooks";

export const GarantiasResults = () => {

    const { garantiaSelected, tieneDeuda } = useAppSelector(storage => storage.garantias)
    return (
        <code className="d-flex justify-content-center">
            <table>
                <tbody>
                    <tr>
                        <td>Garantia seleccionada:</td>
                        <td>{garantiaSelected}</td>
                    </tr>
                    <tr>
                        <td>Tiene deuda:</td>
                        <td>{tieneDeuda ? "Sí" : "No"}</td>
                    </tr>
                </tbody>

            </table>
        </code>
    );
};
