class Taxi {
    constructor(name) {
        this.name = name;
        this.distance = distance;
        this.price = price;

    }
    intro() {
        console.log(`Sveiki, as ${this.name} ir kilometro kaina su manimi yra 1.00 Eur.`);
    }
    updatePrice(price) {
        console.log(`${this.name} nustate nauja kilometro kaina - ${price.toFixed(2)} Eur.`);
    }
    ride(distance) {
        console.log(distance);
    }
    stats() {

        console.log(`${this.name} nuvaziavo ${this.distance} km ir uzdirbo ${(this.distance * this.price).toFixed(2)} Eur.`);
    }
}

module.exports = Taxi;