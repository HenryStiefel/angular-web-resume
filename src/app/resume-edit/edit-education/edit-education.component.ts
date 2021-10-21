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

  updateSchoolName() {
    this.resumeService.updateSchoolName(
      this.schoolNameInputRef.nativeElement.value
    );
  }

  updateGradDate() {
    this.resumeService.updateGradDate(
      new Date(this.expectedGradDateInputRef.nativeElement.value)
    );
  }

  updateSchoolDescription() {
    let desc: string = this.schoolDescriptionInputRef.nativeElement.value;

    if (desc != '') {
        this.resumeService.addEducationDescription(
        this.schoolDescriptionInputRef.nativeElement.value
      );
      
      this.schoolDescriptionInputRef.nativeElement.value = '';
    } else {
      alert('Please enter in a description string.');
    }
  }
}
