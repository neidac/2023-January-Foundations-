// console.log('Hello again!');
// var book = "Dracula";
// var movie;
// console.log(book);
// console.log(movie);
// // will not update before words?
// movie = "Interview With a Vampire"
// console.log(movie);



// numbers are not used with quotes, if you do it will be a string of text and not a number 
// var count = "3"
// var num = "2"
// console.log(count + num)
// we got 32 because it is strings for above 
// console.log(5 + 8);
// // the text above adds up
// console.log("5" + "8");
// // same as above 
// console.log("5" + 8);
// //  would be the same as pairing a word with a letter
// console.log(5 + "8");
// var firstName = "Dan";
// var lastName = "Taylor";
// console.log(firstName + " " + lastName);
// // to create space, for now, you will put a quotes of space



//             // 0       1           2
// var cars = ["Subaru", "Audi", "Volkswagen"];
// console.log("the third car in the list is" + " " + cars[2]);
// cars.push("Chevy");
// cars.push("Ford");
// cars.push("Honda");
// cars.push("Toyota");
// cars.push ("Fiat");
// cars.push("Buick");
// cars.push("Jeep");
// console.log(cars.length);
// // ["Subaru", "Audi", "Volkswagen", "Chevy", "Ford", "Honda", "Toyota", "Fiat", "Buick", "Jeep"];
// console.log(cars);
// console.log(cars[cars.length-1]);
// cars.pop();
// console.log(cars);
// console.log(cars.length);
// console.log(cars[cars.length-1]);
// cars.splice(2, 3);
// // it starts at 2 and 3 is the number of things being spliced
// console.log(cars);
// console.log(cars.length);



// Objects
// var student = {
//     firstName: "Henry",
//     lastName: "Jackson",
//     id: 12345,
//     courses: [
//         {
//             class: "Full-Stack Java",
//             instructor: {
//                 firstName: "Steve",
//                 lastName: "Wozniak"
//             },
//             gradePercentage: 97
//         },

//         {
//             class: "Calculus",
//             instructor: {
//                 firstName: "Bill",
//                 lastName: "Gates"
//             },
//             gradePercentage: 86

//         },
//     ]
// }
// console.log('My name is' + ' ' + student.firstName + ' ' + student.lastName + ', and I am taking' + ' '+ student.courses.length + ' courses.');
// console.log('My first course is' + ' ' + student.courses[0].class + ', taught by ' + student.courses[0].instructor.firstName + ' ' + student.courses[0].instructor.lastName);
// console.log('I am getting a' + ' ' + student.courses[0].gradePercentage + ' in ' + student.courses[0].class + '.');



// If else
// var zombies = 2;
// // this is called a code block below
// if (zombies > 10) {
//     console.log('AAAAAAAARRRGHH! ZOMBIES!!!');
// } else if (zombies > 5) {
//     console.log('Gotta stay away from those zombies!')
// }
// else {
//     console.log('Not a lot of zombies today.');
// }
// // will never run both above on if or else statements 
// var apples = 20;
// // make sure that you stack the numbers to make sure all numbers arent true at the same time 
// if (apples > 3) {
//     console.log ("let's make tarts!")
//     // use double quotes for string if shortening 
// } else if (apples > 10) {
//     console.log('Let us make a pie! We can use the "Betty Crocker" cookbook!')
// }



// var numOfStudents = 13;
// if (numOfStudent > 20) {
//     console.log("Too many students");
// } else if (numOfStudents > 15) {
//     console.log("Good number of students");
// }


// Personal Practice
// var austin;
// austin = 14
// var dallas;
// dallas = 18
// var orleans = 50;
// var london = 20;
// var brooklyn = 27;
// var chicago = 23;

// console.log(chicago + brooklyn - london)

// My Tries
// Company
// var company = {
//     name:"Stonk",
//     address: {
//             streetAddress:"123 howard st",
//             city: "omaha",
//             state:"ne",
//             zip:"68111",
//         },
//         phoneNum:"402-291-1234",
//         employeeCount:100,
// }
// console.log("The name of the company is " + company.name + ". It is located at " + company.address.streetAddress + " "+ company.address.city + ", " + company.address.state + " " + company.address.zip + " and its phone number is " + company.phoneNum + ". The company has " + company.employeeCount + " employees")
// console.log('The name of the company is ${company.name}. It has ${company.employeeCount} employees')

// food
// const food = ["pizza", "burger", "fries", "wings", "salad"];
// // worked cause even though it can't change the parts of it we can change the contents of it
// food.pop();
// console.log(food);
// food.push("cake", "ice-cream", "chips");
// console.log(food);
// food.splice(1, 4);
// console.log(food);


// Test Scores
// var testScore = 99;
// if (testScore > 90) {
//     console.log("You did that!");
// } else if (testScore >= 70) {
//     console.log("You passed");
// } else {
//     console.log("I'm sorry, you didn't pass");
// }


// loops
// for(var i = 1; i <= 10; i++ ) {
// console.log("i is now" + i);
// }
// console.log("the loop has ended")
// for(var i = 10; i >= 1; i--) {
//     console.log("i is now" + i);
// }
// for (var i = 3; i < 22; i +=3) {
//                         // increase by 3
// console.log("i is now " +  i);
// }
// var cars=["toyota", "honda", "Nissan", "Subaru"]
// for (var i = 0; 1 < cars.length; i++ ) {
//     console.log("car " +  (i+1) + " is a " + cars(1));
// }
// console.log("That's all the cars.");

// for(var i = 1; 1 >= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     } 
// }
// console.log("That's all folks!");

// // modulus 
// console.log(8 % 5)
// console.log(4 % 2)
// console.log(3 % 2)

// var numOfMonkeys = 8;
// while(numOfMonkeys > 0) {
//     console.log(numOfMonkeys + "little monkeys jumping on the bed");
//     numOfMonkeys--;
// }

// console.log("no more monkeys jumping on the bed!")

var numBooks = 11; 
while(numBooks < 10) {
    console.log("Number of books is " + numBooks);
    numBooks ++;
}
console.log("while loop ended;");

// do{
// } while {
// }
// var numBooks = 11 
// do {
//     console.log("Number of books is " + numBooks);
// } while(numBooks < 10);
// console.log("Do while loop ended.")