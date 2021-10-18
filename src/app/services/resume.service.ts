import { EventEmitter } from "@angular/core";
import { Resume } from "../resume/resume.model";

export class ResumeService {
    resumeUpdate = new EventEmitter<Resume>();

    private resume: Resume = { name: "",
        email: "",
        phone: "",
        website: "",
        education: {
            school: "",
            expectedGradDate: new Date(0),
            description: []
        },
        experience: [{
            name: "",
            startDate: new Date(0),
            endDate: new Date(0),
            description: []
        }],
        skills: []
    };
    // private resume: Resume = { name: "Henry Stiefel",
    //     email: "henrystiefel@gmail.com",
    //     phone: "5138288466",
    //     website: "linkedin.com/in/henry-stiefel",
    //     education: {
    //         school: "University of Cincinnati",
    //         expectedGradDate: new Date(2023,4),
    //         description: ["Dean's List: 2019-Present",
    //     "Cincinnatus Scholarship Recipient","GPA: 3.76"]
    //     },
    //     experience: [{
    //         name: "Cincinnati Insurance Companies",
    //         startDate: new Date(2021,0),
    //         endDate: new Date(2021,11),
    //         description: ["Backend developer","Used Splunk"]
    //     }],
    //     skills: ["C#","SQL","Python","Angular"]
    // };

    personalInfoChanged(name: string, 
        email: string, phone: string, website: string) {
        this.resume.name = name;
        this.resume.email = email;
        this.resume.phone = phone;
        this.resume.website = website;
        
        this.resumeUpdate.emit(this.resume);
    }

    educationInfoChanged(schoolName: string,
        expectedGradDate: Date) {
            this.resume.education.school = schoolName;
            this.resume.education.expectedGradDate = expectedGradDate;
        
        this.resumeUpdate.emit(this.resume);
    }

    addEducationDescription(description: string) {
        this.resume.education.description.push(description);
        
        this.resumeUpdate.emit(this.resume);
    }

    get name() {
        return this.resume.name;
    }

    get email() {
        return this.resume.email;
    }

    get phone() {
        return this.resume.phone;
    }

    get website() {
        return this.resume.website;
    }
    
    get education() {
        return this.resume.education;
    }
    
    get experiences() {
        return this.resume.experience;
    }

    get skills() {
        return this.resume.skills;
    }
}