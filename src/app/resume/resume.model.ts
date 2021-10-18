
export class Resume {
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
}