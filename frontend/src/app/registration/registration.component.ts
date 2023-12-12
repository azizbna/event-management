// registration.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import User from '../models/register.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  eventId: string;
  user: User = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    telephone: ''


  }; // Utilisez le modèle

  // Ajout de ViewChild pour accéder au formulaire dans le template
  @ViewChild('registrationForm') registrationForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private registrationService: RegistrationService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.eventId = params.get('eventId');
    });
  }

  registerForEvent(): void {
    // Vérification de la validité du formulaire avant l'inscription
    if (this.registrationForm.valid) {
      this.registrationService.registerForEvent(this.eventId, this.user)
        .subscribe(response => {
          console.log('Registration successful', response);
        }, error => {
          console.error('Error registering for event', error);
        });
    } else {
      console.error('Form is not valid');
    }
  }

  getUsersForEvent(): void {
    this.registrationService.getUsersForEvent(this.eventId)
      .subscribe(users => {
        console.log('Users for event', users);
      }, error => {
        console.error('Error fetching users for event', error);
      });
  }
}
