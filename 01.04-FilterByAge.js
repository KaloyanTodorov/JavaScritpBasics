function filterByAge(minAge, firstName, firstAge, secondName, secondAge) {

    let people = [
        {name: firstName, age: firstAge},
        {name: secondName, age: secondAge}
    ];

    // people.sort(function (firstPerson, secondPerson) {
    //     return firstPerson.age - secondPerson.age;
    // });

    for(let person of people) {
        if(person.age >= minAge) {
            console.log(`{ name: '${person.name}', age: ${person.age} }`);
        }
    }

}

filterByAge(16, 'Hristofor', 99, 'Asen', 15);