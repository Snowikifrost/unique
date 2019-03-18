class Greetings {
    constructor() {
        this.firstName = 'egor';
        this.lastName = 'inlisnki';
        Object.defineProperties(this, {
            sayHi: {
                get: function () {
                    return Greetings.Name() + " " + this.lastName;
                },
                set: function (NewName, NewLastname) {
                    return NewName + " " + NewLastname;
                }
            }
        });
    }
    static Name() {
        return "egorrr"
    }
}

var me = new Greetings();
console.log(me.firstName, me.lastName)
console.log(me.sayHi);
