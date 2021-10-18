import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume-edit',
  templateUrl: './resume-edit.component.html',
  styleUrls: ['./resume-edit.component.css']
})
export class ResumeEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('emailInput', { static: false}) emailInputRef: ElementRef;
  @ViewChild('phoneInput', { static: false}) phoneInputRef: ElementRef;
  @ViewChild('websiteInput', { static: false}) websiteInputRef: ElementRef;
  @ViewChild('schoolNameInput', { static: false}) schoolNameInputRef: ElementRef;
  @ViewChild('expectedGradDateInput', { static: false}) expectedGradDateInputRef: ElementRef;
  @ViewChild('schoolDescriptionInput', { static: false}) schoolDescriptionInputRef: ElementRef;
  @ViewChild('experienceNameInput', { static: false}) experienceNameInputRef: ElementRef;
  @ViewChild('experienceStartDateInput', { static: false}) experienceStartDateInputRef: ElementRef;
  @ViewChild('experienceEndDateInput', { static: false}) experienceEndDateInputRef: ElementRef;
  @ViewChild('experienceDescriptionInput', { static: false}) experienceDescriptionInputRef: ElementRef;

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
  }

  updatePersonal() {
    this.resumeService.personalInfoChanged(
      this.nameInputRef.nativeElement.value,
      this.emailInputRef.nativeElement.value,
      this.phoneInputRef.nativeElement.value,
      this.websiteInputRef.nativeElement.value
    );
  }

  addSchoolDescription() {
    this.resumeService.addEducationDescription(
      this.schoolDescriptionInputRef.nativeElement.value
    );
  }

  updateEducation() {
    this.resumeService.educationInfoChanged(
      this.schoolNameInputRef.nativeElement.value,
      new Date(this.expectedGradDateInputRef.nativeElement.value)
    );
  }

  onExperienceDescriptionClick() {
    
  }

  onSubmitExperiences() {

  }

  onSubmitSkill() {

  }

}
