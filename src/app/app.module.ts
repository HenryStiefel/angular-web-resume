import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumeService } from './services/resume.service';
import { HeaderComponent } from './header/header.component';
import { ResumeEditComponent } from './resume-edit/resume-edit.component';
import { EditPersonalComponent } from './resume-edit/edit-personal/edit-personal.component';
import { EditEducationComponent } from './resume-edit/edit-education/edit-education.component';
import { EditExperienceComponent } from './resume-edit/edit-experience/edit-experience.component';
import { EditSkillsComponent } from './resume-edit/edit-skills/edit-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HeaderComponent,
    ResumeEditComponent,
    EditPersonalComponent,
    EditEducationComponent,
    EditExperienceComponent,
    EditSkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
