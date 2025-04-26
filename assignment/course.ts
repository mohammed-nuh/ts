class Course {
    title: string;
    description: string;
    duration: string;
    fee: number;

    constructor(title: string, description: string, duration: string, fee: number) {
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.fee = fee;
    }

    printDetails() {
        console.log(`Course Details:`);
        console.log(`Title => ${this.title}`);
        console.log(`Description => ${this.description}`);
        console.log(`Duration => ${this.duration}`);
        console.log(`Fee => ₹${this.fee}`);
    }
}

const course1 = new Course("Web Development", "Learn HTML, CSS and JS", "3 months", 15000);
course1.printDetails();
