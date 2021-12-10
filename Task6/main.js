var arr = ["HTML", "JavaScript", "CSS"];
 
function arraySort(arr){
    return [...arr].sort();
}

arrSorted = arraySort( arr );
 
alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr );       // HTML, JavaScript, CSS

