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
// var austin
// austin = 14
// var dallas 
// dallas = 18
// var london 
// london = 22
// var brooklyn
// brooklyn = 27
// var chicago
// chicago = 33

// console.log(chicago + brooklyn - london)


var company = {
    firstName:"Stonk"
    address: [
        {
            street:"howard",
            num:"1234",
            city:"omaha"
            state:"ne"
            zip:"68111"
        }
    ]
}

console.log('company')