var arr = [5, 2, 1, -10, 8];

function reverseSort(arr){
    for(let i=0;i<arr.length;i++)
        for(let j=0;j<arr.length;j++)
            if(arr[i] > arr[j])
                [arr[i], arr[j]] = [arr[j], arr[i]];

}
 
reverseSort( arr );
alert( arr ) // 8, 5, 2, 1, -10
