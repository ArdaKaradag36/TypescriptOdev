// Soru 2: Tip koruyucuları (in operatörü ile ayrım)
class CarA {
  constructor(public brandA: string, public doorsA: number) {}
  driveA() { console.log(`${this.brandA} is driving with ${this.doorsA} doors.`); }
}

class TruckA {
  constructor(public brandA: string, public capacityA: number) {}
  loadCargoA(amountA: number) { console.log(`${this.brandA} is loading ${amountA} tons of cargo.`); }
}

type VehicleA = CarA | TruckA;

function useVehicleA(vehicleA: VehicleA) {
  if ('loadCargoA' in vehicleA) {
    vehicleA.loadCargoA(10);
  } else {
    vehicleA.driveA();
  }
}

const carA = new CarA('Toyota', 4);
const truckA = new TruckA('Volvo', 12);
useVehicleA(carA);   // Toyota is driving with 4 doors.
useVehicleA(truckA); // Volvo is loading 10 tons of cargo.
