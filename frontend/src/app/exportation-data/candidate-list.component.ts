// candidate-list.component.ts

import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import * as XLSX from 'xlsx'; // Importez la bibliothèque xlsx

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  candidates: any[] = [];

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    this.loadCandidates();
  }

  editCandidate(candidate: any) {
    // Logique pour l'édition d'un candidat
    console.log('Edit candidate clicked');
    // Vous pouvez ouvrir une modale ou naviguer vers une page d'édition, etc.
  }

  deleteCandidate(candidate: any) {
    // Logique pour la suppression d'un candidat
    console.log('Delete candidate clicked');
    // Vous pouvez afficher une modale de confirmation, puis supprimer le candidat
  }

  printCandidate(candidate: any) {
    // Logique pour l'impression d'un candidat
    console.log('Print candidate clicked');
    // Vous pouvez déclencher la fonction d'impression ou ouvrir un aperçu d'impression
  }

  loadCandidates() {
    this.candidateService.getCandidates().subscribe(
      (candidates) => {
        this.candidates = candidates;
      },
      (error) => {
        console.error('Error fetching candidates', error);
      }
    );
  }

  // Fonction pour exporter vers Excel
  exportToExcel() {
    const data = this.candidates.map(candidate => ({ Name: candidate.name }));
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Candidates');
    XLSX.writeFile(wb, 'candidates.xlsx');
  }
}
