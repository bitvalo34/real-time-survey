import React, { useState, useEffect, useRef } from "react";
import SurveyProgressBar from "./SurveyProgressBar";
import { Form, Button, Alert } from "react-bootstrap";

// Componente principal de la survey que maneja todos los campos y validaciones
function SurveyForm() {
  // Estados para los campos existentes
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [satisfaction, setSatisfaction] = useState("");
  // Estados para los nuevos campos
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [feedback, setFeedback] = useState("");

  // Estado para determinar si el campo "country" ha sido tocado
  const [countryTouched, setCountryTouched] = useState(false);

  // Estados para la validación del formulario, el envío y el progreso
  const [formValid, setFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Validación de campos y cálculo del progreso (8 fields in total)
  useEffect(() => {
    let valid = true;
    // Validaciones para cada campo
    if (!name.trim()) valid = false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) valid = false;
    if (!age || isNaN(age) || Number(age) <= 0) valid = false;
    if (!satisfaction) valid = false;
    if (!/^\d{8,}$/.test(phone)) valid = false;
    if (!country) valid = false;
    if (!feedback.trim()) valid = false;

    setFormValid(valid);

    // Calcular el número de campos completados para actualizar la barra de progreso
    let completedFields = 0;
    if (name.trim()) completedFields++;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) completedFields++;
    if (age && !isNaN(age) && Number(age) > 0) completedFields++;
    if (satisfaction) completedFields++;
    if (/^\d{8,}$/.test(phone)) completedFields++;
    if (country) completedFields++;
    if (feedback.trim()) completedFields++;

    setProgress((completedFields / 8) * 100);
  }, [name, email, age, satisfaction, phone, country, feedback]);

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      setSubmitted(true);
      console.log("Survey submitted successfully!");

      // Reiniciar todos los campos del formulario
      setName("");
      setEmail("");
      setAge("");
      setSatisfaction("");
      setPhone("");
      setCountry("");
      setFeedback("");
      setCountryTouched(false);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div
      className="survey-container"
      style={{
        backgroundColor: "#81d4fa",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "700px",
        margin: "2rem auto",
      }}
    >
      <h2 className="mb-4 text-center">Interactive Survey</h2>
      <SurveyProgressBar progress={progress} />
      {submitted && (
        <Alert variant="success" className="mt-3">
          Survey submitted successfully!
        </Alert>
      )}

      <Form onSubmit={handleSubmit} className="mt-4">
        {/* Name Field */}
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={!name.trim() && name !== ""}
          />
          <Form.Control.Feedback type="invalid">
            Name is required.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Email Field */}
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email *</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={
              email !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            }
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Age Field */}
        <Form.Group controlId="formAge" className="mb-3">
          <Form.Label>Age *</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            isInvalid={age !== "" && (isNaN(age) || Number(age) <= 0)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid age.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Satisfaction Field */}
        <Form.Group controlId="formSatisfaction" className="mb-3">
          <Form.Label>Satisfaction Level *</Form.Label>
          <div>
            {["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"].map(
              (option) => (
                <Form.Check
                  key={option}
                  inline
                  type="radio"
                  label={option}
                  name="satisfaction"
                  value={option}
                  checked={satisfaction === option}
                  onChange={(e) => setSatisfaction(e.target.value)}
                />
              )
            )}
          </div>
        </Form.Group>

        {/* Phone Number Field */}
        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Phone Number *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            isInvalid={phone !== "" && !/^\d{8,}$/.test(phone)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid phone number (at least 8 digits).
          </Form.Control.Feedback>
        </Form.Group>

        {/* Country Field */}
        <Form.Group controlId="formCountry" className="mb-3">
          <Form.Label>Country *</Form.Label>
          <Form.Control
            as="select"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setCountryTouched(true);
            }}
            isInvalid={countryTouched && country === ""}
          >
            <option value="">Select Country</option>
            <option value="Guatemala">Guatemala</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Other">Other</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select a country.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Feedback Field */}
        <Form.Group controlId="formFeedback" className="mb-3">
          <Form.Label>Feedback *</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            isInvalid={!feedback.trim() && feedback !== ""}
          />
          <Form.Control.Feedback type="invalid">
            Feedback is required.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit" disabled={!formValid}>
          Submit Survey
        </Button>
      </Form>
    </div>
  );
}

export default SurveyForm;
