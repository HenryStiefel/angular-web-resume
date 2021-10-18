import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  @ViewChild('experienceNameInput', { static: false}) experienceNameInputRef: ElementRef;
  @ViewChild('experienceStartDateInput', { static: false}) experienceStartDateInputRef: ElementRef;
  @ViewChild('experienceEndDateInput', { static: false}) experienceEndDateInputRef: ElementRef;
  @ViewChild('experienceDescriptionInput', { static: false}) experienceDescriptionInputRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onExperienceDescriptionClick() {
    
  }

  onSubmitExperiences() {

  }

}
