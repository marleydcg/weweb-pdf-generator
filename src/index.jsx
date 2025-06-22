import React from "react";
import { jsPDF } from "jspdf";

const PDFButton = ({ text = "Generar PDF", cliente = "Marley" }) => {

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Reporte WeWeb - PDF desde Componente", 20, 20);

    doc.setFontSize(12);
    doc.text(`Hola ${cliente}, este es tu reporte exportado en PDF.`, 20, 40);

    doc.save("reporte-desde-componente.pdf");
  };

  return (
    <button
      onClick={generatePDF}
      style={{
        padding: "10px 20px",
        backgroundColor: "#4F46E5",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
      }}
    >
      {text}
    </button>
  );
};

export default PDFButton;
