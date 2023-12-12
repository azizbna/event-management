// candidate-list.component.ts

import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrl: './candidate-list.component.scss'

})
export class CandidateListComponent implements OnInit {
  candidates: any[] = [];

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    this.loadCandidates();
  }
  
  editCandidate() {
    // Implement the logic for editing a candidate
    console.log('Edit candidate clicked');
    // You can open a modal or navigate to an edit page, etc.
  }

  deleteCandidate() {
    // Implement the logic for deleting a candidate
    console.log('Delete candidate clicked');
    // You can show a confirmation modal and then delete the candidate
  }

  printCandidate() {
    // Implement the logic for printing a candidate
    console.log('Print candidate clicked');
    // You can trigger the print functionality or open a print preview
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
}
