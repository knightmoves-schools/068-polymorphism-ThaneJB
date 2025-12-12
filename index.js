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

    

    return sounds;
}
