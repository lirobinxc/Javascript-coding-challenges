// Object Instantiantion
class Person {
	constructor(name, type) {
		this.name = name;
        this.type = type;
	}
	
	testVowel() {
		if ((/[aeiou]/i).test(this.type[0]) === true) {
			return 'an';
		} else {
			return 'a';
		}};

	introduce() {
		return `Hello, my name is ${this.name}. I am ${this.testVowel()} ${this.type}.`;
	}
}

// New class by inheriting Person object
class MagicUser extends Person {
		
	constructor(name, type, gender) {
        super(name, type);
        this.gender = gender;
	}

    genderHisHer() {
        if (this.gender === 'male') {
            return 'his';
        } else {
            return 'her';
        }
    }

	attack() {
		return `${this.name} attacks with ${this.genderHisHer()} ${this.type} powers!`;
	}
	
	taunt() {
		return `${super.introduce()} Prepare to die!!!`;
	}
}

// create instances of new objects
const wizard1 = new MagicUser('Megumin', 'Explosion Mage', 'female');
const wizard2 = new MagicUser('Bob', 'Dark Mage', 'male');

console.log(wizard1.attack());
console.log(wizard1.taunt());
console.log(wizard2.attack());
console.log(wizard2.taunt());
console.log(wizard1.introduce());