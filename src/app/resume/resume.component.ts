import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { Resume } from './resume.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  website: string;
  education: {
      school: string,
      expectedGradDate: Date,
      description: string[]
  };
  experience: {
      name: string,
      startDate: Date,
      endDate: Date,
      description: string[]
  }[];
  skills: string[];

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.name = this.resumeService.name;
    this.email = this.resumeService.email;
    this.phone = this.resumeService.phone;
    this.website = this.resumeService.website;
    this.education = this.resumeService.education;
    this.experience = this.resumeService.experiences;
    this.skills = this.resumeService.skills;
    this.resumeService.resumeUpdate.subscribe(
      () => {
        this.name = this.resumeService.name;
        this.email = this.resumeService.email;
        this.phone = this.resumeService.phone;
        this.website = this.resumeService.website;
        this.education = this.resumeService.education;
        this.experience = this.resumeService.experiences;
        this.skills = this.resumeService.skills;
      }
    )
  }

  formatDate(date: Date) {
    var newDate: Date = date;
    const monthNames = ["Jan","Feb","Mar","Apr",
    "May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    return monthNames[newDate.getUTCMonth()] + ' ' + newDate.getFullYear();
  }

}
