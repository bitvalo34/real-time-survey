import React from "react";
import { ProgressBar } from "react-bootstrap";

// Componente que muestra la barra de progreso basada en el porcentaje completado
function SurveyProgressBar({ progress }) {
  return <ProgressBar now={progress} label={`${progress}%`} />;
}

export default SurveyProgressBar;
