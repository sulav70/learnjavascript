// // // //const result= 90;
// // // //console.log(result);
// // // //console.log(typeof result

// // // //symbol
// // // //const output = Symbol("Hello world");
// // // //console.log(output);
// // // //console.log(typeof output);

// // // //let x= 8.68;
// // // //console.log(x);
// // // //console.log(typeof x);


// // // //Type converison
// // // // const result = "123";
// // // // console.log(result)
// // // // console.log(output);
// // // // console.log(typeof output);

// // // // const result = "1673";
// // // // console.output = parseFloat(result);
// // // // console.log(output);
// // // // console.log(typeof output);

// // // // const result = 1673;
// // // // console output = string(result);
// // // // console.log(output);
// // // // console.log(typeof output);

// // // // const result = 1673;
// // // // console output = result.to(string);
// // // // console.log(output);
// // // // console.log(typeof output);

// // // // const isMarrid = false;
// // // // console.log(isMarrid);
// // // // console.log(typeof Married);

// // // // const isMarrid = false;
// // // // const ans = string(Married);
// // // // console.log(isMarrid);
// // // // console.log(typeof Married);

// // // //objrct types

// // // // const obj = {
// // // //     name : "ram thapa";
// // // //     age : 34,
// // // //     isMarried : false;
// // // //     occupation: "agriculture";
// // // // };
// // // // console.log(obj);
// // // // console.log(typeof obj);


// // // // const arr = [3, 4, 5, 6, 7];
// // // // console.log(arr);
// // // // console.log(typeof arr);

// // // // const date = new Date();
// // // // console.log(arr);
// // // // console.log(typeof arr);

// // // //sttring method

// // // const result = "Hello world";
// // // //length
// // // console.log(result.length);

// // // //charat 
// // // console.log(result.charAt(2));


// // // //indexof

// // // console.log(result.indexOf("o"));

// // // //lastindexof
// // // console.log(result.lastIndexOf("o"));

// // // //lowercase
// // // console.log(result.toLowerCase());
// // // //uppercase
// // // console.log(result.toUpperCase());
// // // //replace
// // // console.log(result.replace("world", "everyone"));
// // // //includes
// // // console.log(result.includes("world"));
// // // //slice
// // // console.log(result.slice(1,6));
// // // //concat
// // // console.log(result.concat("I love java script"));

// // // //let output = "         Hello Students"
// // // console.log (output.trim());

// // // //split
// // // console.log(result.split("  "));

// // //concatinaton

// // // let x = "Hello world"
// // // let y = "I love javascript!";
// // // console.log(x + y);

// // // const a = 90;
// // // const b = 80;
// // // const result = a + b;
// // // console.log("The sum of two number is :" + result);
// // // console.log('The sum of two number is : ${result}');

// // // "http://localhost:5000/api/user${id}"

// // // let y = 90;
// // // y = y+10;
// // // console.log(y);

// // // let x = 70;l
// // // x += 50;
// // // console.log(x);

// // // let a = 10;
// // // let b = 5;
// // // let c = "10"

// // // console.log(a == c)
// // // console.log(a === c);
// // // console.log(a !=b);
// // // console.log(a !=c);
// // // console.log(a>b)
// // // console.log(a < b);

// // let ageGroup = 18;
// // console.log(ageGroup >= 18 ? "You can vote" : "You can't");

// // unary operators
// // let x = "123";
// // let y = +x   //positive
// // console.log(y);
// // console.log(typeof y);


// // const obj = {
// //     name: "sita devi",
// //     age: 56,

// // };
// // delete obj.age;
// // console.log(obj);

// // let email = "ramthapa@gmail.com";
// // let password = "9000000000";

// // if(email === "ramthapa@gamil.com" && password === "8888888888"){
// //     console.log("Login successfully");
// // }else{
// //     console.log("Invaid credentials!");
// // }


// //see grade check
// let grade = 85;
// if(grade >=90){
//     console.log("Grade:A+");
// }else if(grade >=80){
//     console.log("Grade:A");
// }else if(grade >=70){
//     console.log("Grade:B+");
// }else if(grade >=60){
//     console.log("Grade:B"); 
// }else if(grade >=50){
//     console.log("Grade:C");
// }else if(grade >=40){
//     console.log("Grade:D"); 
// }else{
//     console.log("Failed"); 
// }

// //weather 
// let weather = "rainy";
// if (weather === "sunny"){
//     console.log("Today is a sunny day");
// }else if(weather === "winter"){
//     console.log("k yo mahina jado ko hota");
// }else if(weather === "cloudy"){
//     console.log("aaja babal lageko chata");
// }
// console.log("invalid")

// //switch
// let role = "super admin";
// switch (role) {
//     case "buyer":
//         console.log("You can only product");
//         break;

//         case "seller":
//             console.log("You can only product");
//             break;
//          case "admin":
//                 console.log("You can only product");
//                 break;
//         case "super admain":
//                     console.log("You can only product");
//                     break;
//         default:
//             console.log("Invalid role");                        
// }


let date = new Date().getDay();
switch (date) {
    case 0:
        console.log("Today is a Sunday")
        break;
    case 1:
        console.log("Today is a Monday")
        break;
    case 2:
        console.log("Today is a Tuesday")
        break;
    case 3:
        console.log("Today is a Wednesday")
        break;
    case 4:
        console.log("Today is a Thursday")
        break;
    case 5:
        console.log("Today is a friday")
        break;
    case 6:
        console.log("Today is a Saturday")
        break;
    default:
        console.log("Invalid Date")

}
