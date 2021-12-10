function Dogs(name, type, age){
    this.name = name;
    this.type = type;
    this.age = age;

    this.voice = function(){
        if(age < 1)
            alert('Тяф');
        else if(age >= 1 && age < 3)
            alert('Гав');
        else 
            alert('Ррр')
    };
}

let dog1 = new Dogs('Bonya','Kavkazskaya',0.5);
let dog2 = new Dogs('Jack','Nemeckaya',2);
let dog3 = new Dogs('Hitomimaru','Shiba Inu',4);

dog1.voice();
dog2.voice();
dog3.voice();
