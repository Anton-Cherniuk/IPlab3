function unique(arr) {

    let uniqueArr = [...new Set(arr)];

    return uniqueArr;
}
   
var strings = ["C++", "C#", "C++", "C#",
"C", "C++", "JavaScript", "C++", "JavaScript"
];

alert( unique(strings) ); // C++, C#, C, JavaScript
