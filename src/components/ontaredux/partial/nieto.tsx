type TNieto = {
    setSaludo: React.Dispatch<React.SetStateAction<string>>;
};

export const Nieto = ({ setSaludo }: TNieto) => {
    const saludo = "Nieto: Hola abuelitooo!";
    return (
        <div
            style={{ backgroundColor: "#154360" }}

        >
            <button className="btn btn-primary" onClick={() => setSaludo(saludo)}>

                Saludo nieto
            </button>
            <div>

            </div>
        </div>
    );
};
