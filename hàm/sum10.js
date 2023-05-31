var arrays = [1, 2, 3, 5, 10, 10, 12, 24];
let dem=0;
for (let i=0;i<arrays.length;i++){
    let a = arrays[i];
    if (a>=10){
        dem++
    }
}
console.log(dem);