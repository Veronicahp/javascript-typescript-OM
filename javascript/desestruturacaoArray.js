const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto); // rest ou spread
const [u1, , t1, , c1] = numeros; // pulando numeros
console.log(u1, t1, c1);

const arrays = [[1, 2, 3], [4, 5, 6], [7, 8 , 9]];
console.log(arrays[2][2]); 
console.log(arrays[0][2]); 
console.log(arrays[1][1]);
const [list1, list2, list3] = arrays;
console.log(list3[2]);
 



