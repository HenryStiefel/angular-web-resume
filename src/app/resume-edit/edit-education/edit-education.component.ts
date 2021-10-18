import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  @ViewChild('schoolNameInput', { static: false}) schoolNameInputRef: ElementRef;
  @ViewChild('expectedGradDateInput', { static: false}) expectedGradDateInputRef: ElementRef;
  @ViewChild('schoolDescriptionInput', { static: false}) schoolDescriptionInputRef: ElementRef;

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
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

}
