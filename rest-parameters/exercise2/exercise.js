function filterOutOdds(...args){
   return args.filter(arg => arg % 2 === 0);
}

console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));