function sumFunc(...arg){
   return arg.reduce((a, arg) => a + arg, 0)
}

console.log(sumFunc(2, 2));