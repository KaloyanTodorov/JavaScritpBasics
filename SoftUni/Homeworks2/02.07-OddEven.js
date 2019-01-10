function oddOrEven(number) {
   if ((number % 2 !== -1 && number % 2 !== 1) && number % 2 !== 0) {
       return "invalid";
   }

    return number % 2 == 0 ? "even" : "odd";
}

console.log(oddOrEven(-5));