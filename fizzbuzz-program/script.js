for(var i = 1; i <= 100; i++) {
     if(i %  3 == 0) {
        console.log(i + " Fizz");
    } if(i % 5 == 0) {
        console.log(i + " Buzz");
    } if( i % 5 == 0 && i % 3 == 0) {
        console.log(" FizzBuzz");
    } else {
        console.log(i + " ");
    }
}