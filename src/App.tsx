import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Factoring from "./components/factoring/factoring";
import Garantias from "./components/garantias/garantias";
import { OntaRedux } from "./components/ontaredux/ontaRedux";
import store from "./scripts/redux/store/store";


function App() {
  const [modulo, setModulo] = useState<"garantias" | "factoring" | "not-redux">("not-redux");

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <div >
            <button className="btn btn-danger m-5" onClick={() => setModulo("not-redux")}>
              Not redux
            </button>
            <button className="btn btn-primary m-5" onClick={() => setModulo("garantias")}>
              Ir a garantias
            </button>
            <button className="btn btn-success m-5" onClick={() => setModulo("factoring")}>
              Ir a Factoring
            </button>
            <div>
              {modulo === "not-redux" && <OntaRedux />}
              {modulo === "garantias" && <Garantias />}
              {modulo === "factoring" && <Factoring />}
            </div>
          </div>

        </header>
      </div>
    </Provider>
  );
}

export default App;
