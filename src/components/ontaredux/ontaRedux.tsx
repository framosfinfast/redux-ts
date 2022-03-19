import { useState } from "react"
import { Hijo } from "./partial/hijo"
import { OtroHijo } from "./partial/otroHijo"

export const OntaRedux = () => {
    const [saludo, setSaludo] = useState<string>("Padre: Hola Hijos!")
    return <><h1>¿Donde está redux?</h1>
        <h4>Saludo</h4>
        <div>
            <Hijo {...{ setSaludo }} />
            <OtroHijo {...{ setSaludo }} />
        </div>
        <code>
            {saludo}
        </code>
    </>
}