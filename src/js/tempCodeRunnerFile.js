function Greetings(name) {
    this.firstName = name;
    this.lastName = 'inlisnki';
    Object.defineProperty(this,{
        sayHi:{
            get: function(){
                return this.firstName + " " + this.lastName
            },
            set: function(NewName, NewLastname){
                return NewName + " " + NewLastname;
            }
        }
    });
}

var me = new Greetings('egor');
console.log(me.firstName, me.lastName)
console.log(me.sayHi());
console.log(me.sayHi("robot", "chappi"));