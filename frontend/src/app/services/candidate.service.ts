import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Candidate from '../models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  /*getCandidates(): Observable<any[]> {
    // Replace this with your actual API call to fetch candidates
    const candidates = [
      { name: 'Candidate 1' },
      { name: 'Candidate 2' },
      // Add more candidates as needed
    ];

    return of(candidates);
  }*/
  baseURL: string = "http://localhost:3000/candidates"; // Replace with your actual API URL

  constructor(private _http: HttpClient) { }

  
  getCandidates() {
    return this._http.get(this.baseURL);
  }

  addCandidate(candidate: Candidate) {
    return this._http.post(this.baseURL, candidate);
  }

  modifyCandidate(candidate: Candidate){
    return this._http.put(this.baseURL, candidate);
  }

  // Add other methods as needed based on your backend API
}
