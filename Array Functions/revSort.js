function reverseSort(arr){
    
    return arr.sort((a,b) => (b-a));
    
    }
    
let arr = [5, 2, 1, -10, 8];

alert(reverseSort(arr));