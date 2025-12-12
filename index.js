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
    let sounds = '';

animals.push(new Cat());
    animals.push(new Dog());
    animals.push(new Bird());    

    animals.forEach((animals) => {
        sounds += `${animals.say()}`
    });

    

    return sounds;
}
