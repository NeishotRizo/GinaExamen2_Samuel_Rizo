const fs = require('fs');
const PDFDocument = require('pdfkit');

function generarCertificado(nombreAlumno, nombreCurso, fecha, logoPath = null) {
  const doc = new PDFDocument({
    size: 'A4',
    layout: 'landscape',
    margins: { top: 50, bottom: 50, left: 50, right: 50 }
  });

  doc.pipe(fs.createWriteStream(`certificado_${nombreAlumno}.pdf`));

  // Fondo
  doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0b132b');

  // Borde
  const borde = 15;
  doc.lineWidth(borde)
     .strokeColor('#007bff')
     .rect(borde / 2, borde / 2, doc.page.width - borde, doc.page.height - borde)
     .stroke();

  // Logo opcional
  if (logoPath) {
    const logoWidth = 100;
    const logoHeight = 100;
    doc.image(logoPath, doc.page.width / 2 - logoWidth / 2, 40, { width: logoWidth, height: logoHeight });
  }

  // Título
  doc.fillColor('#00ff88')
     .fontSize(36)
     .font('Times-Bold')
     .text('Certificado de Aprobación', { align: 'center', underline: true });

  // Nombre del alumno
  doc.moveDown(2)
     .fontSize(24)
     .fillColor('#e0e0e0')
     .text('Este certificado se otorga a:', { align: 'center' });

  doc.moveDown(0.5)
     .fontSize(32)
     .fillColor('#00ff88')
     .text(nombreAlumno, { align: 'center' });

  // Curso
  doc.moveDown(1)
     .fontSize(20)
     .fillColor('#e0e0e0')
     .text('Por haber completado exitosamente el curso:', { align: 'center' });

  doc.moveDown(0.5)
     .fontSize(28)
     .fillColor('#007bff')
     .text(nombreCurso, { align: 'center' });

  // Fecha
  doc.moveDown(2)
     .fontSize(16)
     .fillColor('#e0e0e0')
     .text(`Fecha de emisión: ${fecha}`, { align: 'center' });

  // Firma
  doc.moveDown(4)
     .fontSize(18)
     .fillColor('#00ff88')
     .text('____________________', { align: 'center' })
     .text('Firma del instructor', { align: 'center' });

  doc.end();
}

// Llamada de prueba
generarCertificado('Nacho Rizo', 'Certificación de Programación Avanzada', '4 de Noviembre de 2025', null);