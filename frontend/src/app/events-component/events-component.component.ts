import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';
import Evennement from '../models/evennement.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEventModalComponent } from '../add-event-modal/add-event-modal.component';


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
  }
