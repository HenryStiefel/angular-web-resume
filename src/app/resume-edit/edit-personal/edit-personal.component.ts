import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-edit-personal',
  templateUrl: './edit-personal.component.html',
  styleUrls: ['./edit-personal.component.css']
})
export class EditPersonalComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('emailInput', { static: false}) emailInputRef: ElementRef;
  @ViewChild('phoneInput', { static: false}) phoneInputRef: ElementRef;
  @ViewChild('websiteInput', { static: false}) websiteInputRef: ElementRef;

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
  }

  updateName() {
    this.resumeService.updateName(
      this.nameInputRef.nativeElement.value
    );    
  }

  updatePhone() {
    this.resumeService.updatePhone(
      this.phoneInputRef.nativeElement.value
    );    
  }

  updateEmail() {
    this.resumeService.updateEmail(
      this.emailInputRef.nativeElement.value
    );    
  }

  updateWebsite() {
    this.resumeService.updateWebsite(
      this.websiteInputRef.nativeElement.value
    );    
  }

}
