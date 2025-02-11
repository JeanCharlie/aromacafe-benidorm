import { jsPDF } from "jspdf";
import { MenuItem } from "@/types/menu";

export const generateMenuPDF = (menuItems: MenuItem[]) => {
  const doc = new jsPDF();
  
  // Set up document properties
  doc.setFont("helvetica", "normal");
  doc.setFontSize(18);
  doc.setTextColor(60, 42, 31);  // Matching brand color

  // Title
  doc.text("Menú de Aroma Cafe", 14, 20);
  doc.setLineWidth(0.5);
  doc.line(14, 25, 196, 25);

  // Content
  menuItems.forEach((item, index) => {
    const yPosition = 40 + index * 30;

    doc.setFontSize(14);
    doc.setTextColor(60, 42, 31);
    doc.text(`${item.name}`, 14, yPosition);

    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(item.description, 14, yPosition + 10);

    doc.setFontSize(14);
    doc.setTextColor(60, 42, 31);
    doc.text(item.price, 170, yPosition);
  });

  doc.save("menu-cafearoma.pdf");
};

export default { generateMenuPDF };