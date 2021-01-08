'use strict';

(function() {

    let person = {
        firstName: 'Jim',
        lastName: 'Cooper',
        age: 29,
        hobbies: {
            sports: ['golf', 'tennis', 'bowling'],
            leisure: 'watching movies'
        },
        isAdult: function() { return this.age >= 18; }
    };

    let stats = {
        height: '45',
        weight: '128'
    };

    //! Object.assign: Used to combine to objects. First parameter is takes the object changed and all others are the supply.
    console.log(Object.assign({}, person, stats));

    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    let person1 = new Person('Jim', 'Cooper');
    person['hair color'] = 'brown';

    console.log(person1.firstName);
    console.log(person1['firstName']);
    console.log(person);

    //! Object.freeze (makes object or property unchangeable entirely)

    //! Object.defineProperty(obj, prop, {writable: false}): makes property unable to be switched but allows property of properties to be changed.
    //! Object.defineProperty(obj, prop, {enumerable: false}): make property unable to be enumerated over with for...in, Object.keys...etc.
    //! Object.defineProperty(obj, prop, {configurable: false}): makes property un-deleteable, and keeps from changing its configurable and enumerable properties.

    Object.defineProperty(person, 'fullName', {
        //! When this property is called for, the get is the value
        get: function() {
            return this.firstName + " " + this.lastName;
        },
        //! When this property is set to something, the set is used to make the new value
        set: function(value) {
            let nameParts = value.split(' ');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        }
    })

    person.fullName = 'Christopher George';
    console.log(person.fullName)
    console.log(person);
    console.log(Object.keys(person))

    //! Prototype: 








})();
