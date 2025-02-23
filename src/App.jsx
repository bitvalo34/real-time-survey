import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SurveyForm from "./components/SurveyForm";

// Componente raíz de la aplicación que renderiza el formulario de la survey
function App() {
  return (
    <div className="container mt-5">
      <SurveyForm />
    </div>
  );
}

export default App;
