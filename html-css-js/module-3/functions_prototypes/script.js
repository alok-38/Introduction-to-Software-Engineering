function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getName = function () {
        return this.make + ' ' + this.model + ' ' + this.year;
    }
}

var c = new Car("Meridian", "Saber GT", 2012);
