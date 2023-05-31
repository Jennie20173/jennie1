var array = [1, 2, 3, 4, 5, 7, 7, 6];
function maxArray(array) {
    let max = array[0];
    let vitri = 0;
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            vitri = i;
        }
    } return max;

}
let max1 = maxArray(array);
let max2 = array[0];
for (let j = 0; j < array.length; j++) {
    if (max1 == array[j]) {
        continue;
    }   
    if (max2 < array[j]) {
            max2 = array[j];
        }
    
    
}
console.log(max2);
