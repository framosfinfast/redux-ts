import { Nieto } from "./nieto";

type THijo = {
    setSaludo: React.Dispatch<React.SetStateAction<string>>;
};

export const Hijo = ({ setSaludo }: THijo) => {
    const saludo = "Hijo: Hola padre, tanto tiempo!";
    return (
        <div
            style={{ backgroundColor: "#0B5345" }}

        >
            <button className="btn btn-success" onClick={() => setSaludo(saludo)}>

                Saludo hijo
            </button>
            <div>
                <Nieto {...{ setSaludo }} />
            </div>
        </div>
    );
};
