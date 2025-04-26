var Course = /** @class */ (function () {
    function Course(title, description, duration, fee) {
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.fee = fee;
    }
    Course.prototype.printDetails = function () {
        console.log("Course Details:");
        console.log("Title => ".concat(this.title));
        console.log("Description => ".concat(this.description));
        console.log("Duration => ".concat(this.duration));
        console.log("Fee => \u20B9".concat(this.fee));
    };
    return Course;
}());
var course1 = new Course("Web Development", "Learn HTML, CSS and JS", "3 months", 15000);
course1.printDetails();
