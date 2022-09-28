// const data = new Date('2019-04-21 20:15:59.100');
const data = new Date(1663527060475);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('MilSeg', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); // domingo é zero 
console.log(data.toString());
// console.log(Date.now());