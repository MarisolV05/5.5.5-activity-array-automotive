//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").V
//this shows how to call from this module...
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassenger = 5;
        this.passenger = 0;
        this.numberofwheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }


    start() {
        if (this.fuel > 0){
            console.log("Engine Started");
            return this.started = true
        } else {
            console.log("No Fuel");
            return this.started = false;
        }
    }

    checkService(){
        if(this.mileage > 3000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }
    loadpassenger(num) {
        if (this.passenger < this.maxPassenger) {
            if((num + this.passenger) <= this.maxPassenger) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + "not enough space");

            }
        } else {
            console.log(this.model + " " + this.make + "is full");
        }
        }

}
let myCar = new Car ('mercury', 'rad_sedan', '2002', 'white', 50000)


myCar.start()
myCar.loadpassenger
myCar.Stop()
myCar.checkService

//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
