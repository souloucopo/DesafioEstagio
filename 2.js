let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  
}

console.log(fibonacci.includes(7)); // Valor 7 mostrará false pois ele não está no array
console.log(fibonacci.includes(5)); // Valor 5 mostrará true pois ele está no array


