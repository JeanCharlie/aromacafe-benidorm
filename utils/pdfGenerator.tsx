// import { jsPDF } from "jspdf";
// import { MenuItem } from "@/types/menu";

// export const generateMenuPDF = (menuItems: MenuItem[]) => {
//   const doc = new jsPDF();
  
//   // Set up document properties
//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(18);
//   doc.setTextColor(60, 42, 31);  // Matching brand color

//   // Title
//   doc.text("Menú de Aroma Cafe", 14, 20);
//   doc.setLineWidth(0.5);
//   doc.line(14, 25, 196, 25);

//   // Content
//   menuItems.forEach((item, index) => {
//     const yPosition = 40 + index * 30;

//     doc.setFontSize(14);
//     doc.setTextColor(60, 42, 31);
//     doc.text(`${item.name}`, 14, yPosition);

//     doc.setFontSize(12);
//     doc.setTextColor(100, 100, 100);
//     doc.text(item.description, 14, yPosition + 10);

//     doc.setFontSize(14);
//     doc.setTextColor(60, 42, 31);
//     doc.text(item.price, 170, yPosition);
//   });

//   doc.save("menu-cafearoma.pdf");
// };

// export default { generateMenuPDF };

import { jsPDF } from "jspdf";
import { MenuItem } from "@/types/menu";

export const generateMenuPDF = async (menuItems: MenuItem[]) => {
  const doc = new jsPDF();

  // Cargar imagen del logo
  const img = new Image();
  img.src = "/logo.png";

  // Esperar a que la imagen cargue antes de generar el PDF
  img.onload = () => {
    // Agregar imagen del logo centrada
    const imgWidth = 100;
    const imgHeight = 50;
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.addImage(img, "PNG", (pageWidth - imgWidth) / 2, 10, imgWidth, imgHeight);

    // Configuración de fuentes y colores
    doc.setFont("helvetica", "normal");
    doc.setFontSize(18);
    doc.setTextColor(60, 42, 31);

    // Título
    doc.text("Menú de Aroma Cafe", pageWidth / 2, 70, { align: "center" });
    doc.setLineWidth(0.5);
    doc.line(14, 75, 196, 75);

    // Contenido del menú
    let yPosition = 90;
    menuItems.forEach((item) => {
      if (yPosition > 270) { // Salto de página si se llena la hoja
        doc.addPage();
        yPosition = 40;
      }

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(60, 42, 31);
      doc.text(item.name, 14, yPosition);

      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 100, 100);
      doc.text(item.description, 14, yPosition + 8, { maxWidth: 160 });

      doc.setFontSize(14);
      doc.setTextColor(60, 42, 31);
      doc.text(item.price, 170, yPosition);

      yPosition += 25; // Espaciado entre elementos
    });

    // Guardar el PDF
    doc.save("menu-cafearoma.pdf");
  };
};

export default { generateMenuPDF };
