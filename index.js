class Cat {
    say() {
        return 'meow';
    }
}

class Dog {
    say() {
        return 'woof';
    }
}

class Bird {
    say() {
        return 'chirp';
    }
}

let animals = [
    new Cat(),
    new Dog(),
    new Bird()
]

function listen(animals) {
    let sounds = [];

    animals.push(new Cat('meow'));
    animals.push(new Dog('woof'));
    animals.push(new Bird('chirp'));

    animals.forEach((animals) => {
        sounds += `${animals.draw()}`
    });

    animals.forEach(animal => {
        if (animal instanceof Cat) {
            sounds.push(animal.say());
        } else if (animal instanceof Dog) {
            sounds.push(animal.talk());
        } else if (animal instanceof Bird) {
            sounds.push(animal.sing());
        }
    });

    return sounds;
}
