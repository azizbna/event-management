const exceljs = require('exceljs');
const Candidate = require('../models/candidate'); // Assurez-vous d'importer votre modèle de candidat

// Fonction pour exporter les candidats vers Excel
exports.exportToExcel = async (req, res) => {
  try {
    // Récupérez les candidats depuis la base de données (ou d'où vous stockez vos données)
    const candidates = await Candidate.find();

    // Créez un nouveau classeur Excel
    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet('Candidates');

    // Ajoutez les en-têtes de colonnes
    worksheet.columns = [
      { header: 'Name', key: 'name', width: 20 },
      // Ajoutez d'autres colonnes en fonction de votre modèle de candidat
    ];

    // Ajoutez les données des candidats
    candidates.forEach(candidate => {
      worksheet.addRow({
        name: candidate.name,
        // Ajoutez d'autres propriétés du candidat en fonction de votre modèle
      });
    });

    // Générez un fichier Excel dans la mémoire
    const buffer = await workbook.xlsx.writeBuffer();

    // Envoyez le fichier Excel en réponse
    res.attachment('candidates.xlsx');
    res.send(buffer);
  } catch (error) {
    console.error('Error exporting to Excel:', error);
    res.status(500).send('Internal Server Error');
  }
};
