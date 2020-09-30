class Rat {
    constructor(name, weight, speed, status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }

    sound = function () {
        alert(this.name + " chit chit");
    }
}

class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }

    sound = function () {
        alert(this.name + "meo meo!")
    }
    catch = function (rat) {
        if (this.speed > rat.speed) {
            alert(this.name + " bị bắt " + rat.name);
            rat.status = false;
        } else {
            alert(this.name + " không bắt   " + rat.name)
        }
    }
    eatRat = function (eat) {
        this.weight += rat.weight;
        alert(this.name + " ăn chuột " + rat.name + " roi!");
    }
}

let meo = new Cat("meo", 100, 500);

meo.sound();
let rat = new Rat("Chit", 0.5, 99);
rat.sound();
meo.catch(rat);
meo.eatRat();


