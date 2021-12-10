var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
 
var people = [ vasya , masha , vovochka ];

function mySort(){
    people.sort(function(a, b) {
        if (a.age > b.age)
            return 1;
          if (a.age < b.age)
            return -1;
        return 0;
    });
}

mySort();
// тепер people: [vovochka, masha, vasya]
alert(people[0].age) // 6
