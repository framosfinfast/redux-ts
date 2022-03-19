type THijo = {
    setSaludo: React.Dispatch<React.SetStateAction<string>>;
};

export const OtroHijo = ({ setSaludo }: THijo) => {
    const saludo = "Otro Hijo: Finalmente, nos conocemos D:";
    return (
        <div
            style={{ backgroundColor: "#BA4A00" }}

        >
            <button className="btn btn-warning" onClick={() => setSaludo(saludo)}>

                Saludo otro hijo
            </button>
        </div>
    );
};
