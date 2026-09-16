import jsPDF from 'jspdf';
import resumeData from '../data/resumeData';

const MARGIN = 48;
const PAGE_WIDTH = 595.28; // A4 width in pt
const PAGE_HEIGHT = 841.89; // A4 height in pt
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const ACCENT = [37, 61, 105]; // dark navy, matches the site's slate-900 accent

const buildResumeDocument = () => {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  let y = MARGIN;

  const ensureSpace = (height) => {
    if (y + height > PAGE_HEIGHT - MARGIN) {
      doc.addPage();
      y = MARGIN;
    }
  };

  const addSectionTitle = (title) => {
    ensureSpace(28);
    y += 18;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...ACCENT);
    doc.text(title.toUpperCase(), MARGIN, y);
    y += 4;
    doc.setDrawColor(...ACCENT);
    doc.setLineWidth(1);
    doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y);
    y += 14;
  };

  const addParagraph = (text, { fontSize = 10, color = [51, 65, 85], lineHeight = 13.5 } = {}) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH);
    lines.forEach((line) => {
      ensureSpace(lineHeight);
      doc.text(line, MARGIN, y);
      y += lineHeight;
    });
  };

  const addBullet = (text, { fontSize = 10, lineHeight = 13.5 } = {}) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(51, 65, 85);
    const bulletIndent = 14;
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH - bulletIndent);
    lines.forEach((line, index) => {
      ensureSpace(lineHeight);
      if (index === 0) {
        doc.text('-', MARGIN, y);
      }
      doc.text(line, MARGIN + bulletIndent, y);
      y += lineHeight;
    });
  };

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...ACCENT);
  doc.text(resumeData.name, MARGIN, y);
  y += 20;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(71, 85, 105);
  doc.text(resumeData.title, MARGIN, y);
  y += 16;

  doc.setFontSize(9.5);
  doc.setTextColor(100, 116, 139);
  const contactLine = [
    resumeData.location,
    resumeData.phone,
    resumeData.email,
    resumeData.links.portfolio.replace('https://', ''),
  ].join('   |   ');
  const contactLines = doc.splitTextToSize(contactLine, CONTENT_WIDTH);
  contactLines.forEach((line) => {
    doc.text(line, MARGIN, y);
    y += 13;
  });

  y += 2;
  doc.setDrawColor(...ACCENT);
  doc.setLineWidth(1.5);
  doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y);

  // Summary
  addSectionTitle('Professional Summary');
  addParagraph(resumeData.summary);

  // Experience
  addSectionTitle('Work Experience');
  resumeData.experience.forEach((job, index) => {
    ensureSpace(16);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(job.role, MARGIN, y);
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9.5);
    doc.setTextColor(100, 116, 139);
    doc.text(job.period, PAGE_WIDTH - MARGIN, y, { align: 'right' });
    y += 14;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(71, 85, 105);
    doc.text(job.company, MARGIN, y);
    y += 12;
    job.points.forEach((point) => addBullet(point));
    if (index < resumeData.experience.length - 1) y += 8;
  });

  // Projects
  addSectionTitle('Key Projects');
  resumeData.projects.forEach((project, index) => {
    ensureSpace(14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(project.title, MARGIN, y);
    y += 13;
    project.points.forEach((point) => addBullet(point));
    if (index < resumeData.projects.length - 1) y += 6;
  });

  // Skills
  addSectionTitle('Technical Skills');
  resumeData.skills.forEach((skill) => {
    ensureSpace(14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text(`${skill.label}:`, MARGIN, y);
    const labelWidth = doc.getTextWidth(`${skill.label}: `);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const lines = doc.splitTextToSize(skill.value, CONTENT_WIDTH - labelWidth);
    doc.text(lines[0], MARGIN + labelWidth, y);
    y += 13.5;
    for (let i = 1; i < lines.length; i += 1) {
      ensureSpace(13.5);
      doc.text(lines[i], MARGIN, y);
      y += 13.5;
    }
  });

  // Education
  addSectionTitle('Education');
  resumeData.education.forEach((item) => {
    ensureSpace(14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(item.degree, MARGIN, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`  -  ${item.institution}`, MARGIN + doc.getTextWidth(item.degree), y);
    y += 16;
  });

  // Interests
  addSectionTitle('Interests');
  addParagraph(resumeData.interests);

  return doc;
};

export const downloadResumePdf = () => {
  const doc = buildResumeDocument();
  doc.save('Muhammad_Tayyab_Resume.pdf');
};

export const viewResumePdf = () => {
  const doc = buildResumeDocument();
  doc.output('dataurlnewwindow', { filename: 'Muhammad_Tayyab_Resume.pdf' });
};

export default downloadResumePdf;
