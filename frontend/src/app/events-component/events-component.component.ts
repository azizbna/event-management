import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';
import { CandidateService } from '../services/candidate.service';

import Evennement from '../models/evennement.model';
import Condedat from '../models/candidate.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEventModalComponent } from '../add-event-modal/add-event-modal.component';
import { CandidateListComponent } from '../candidate-list/candidate-list.component';



@Component({
  selector: 'app-events-component',
  templateUrl: './events-component.component.html',
  styleUrl: './events-component.component.scss'
})
export class EventsComponentComponent {
  eventList:Array<Evennement> = [];
  constructor(private eventService:EventsService, private modal:NgbModal) { }
  ngOnInit(): void {
      this.refreshEvents();
    }
    refreshEvents(){
      this.eventService.getAllEvents().subscribe(
        (events:any)=>{
          this.eventList = events;
        }
        );
      }
      
    openEventForm() {
      const modalRef = this.modal.open(AddEventModalComponent, {
        size: 'md',
      });
      modalRef.result.then((result) => {
        //console.log(result);
        this.refreshEvents();
      }
      ).catch((error) => {
        //console.log(error);
      });
    }
    openUpdateEventForm(event:Evennement) {
      const modalRef = this.modal.open(AddEventModalComponent, {
        size: 'md',
      });
      
    }
    openListCandedateForm(event:Evennement) {
      const modalRef = this.modal.open(CandidateListComponent, {
        size: 'md',
      });
      modalRef.componentInstance.mode = "maj"
      modalRef.componentInstance.currentEvent = event;
      modalRef.result.then((result) => {
        //console.log(result);
        this.refreshEvents();
      }
      ).catch((error) => {
        //console.log(error);
      });
    }
    handleSecondIconClick(event: Evennement) {
      // Implement your action logic here
      console.log('Second Icon Clicked for event:', event);
      // You can add your logic for the action, e.g., open a modal, show a message, etc.
    }
  }
