var array = [2, 6, 1, 9, 4, 2, 44, 32, 70];
var i = 0;
var p;
var array2 = [];
for( i; i<=array.length -1; i++ ){
    var j = 1;
    for( j; j<=array.length - 1; j++){
        if( array[i]>= array[j]){
            p = i;
        }
        i++;
    }
    array2[i] = p;
    
}
console.log(array2);
// console.log(array);