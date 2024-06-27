/* Javascript Number Method */

/* Number Constructor() */

//Defination :- The Number() constructor creates Number objects. When called as a function, it returns primitive values of type Number.

//Syntax :- new Number(value)
//       :- Number(value)

// {
//     let numbers = new Number(false)
//     let numbers1 = Number(false)
//     console.log(numbers);
//     console.log(numbers1);
// }

// {
//     let number = new Number('123')
//     let number1 = Number('123')
//     console.log(number);
//     console.log(typeof number);
//     console.log(number1);
//     console.log(typeof number1);
// }

/* Number-exponential method() */

    //Defination :- The toExponential() method of Number values returns a string representing this number in exponential notation.

    // Syntax :- toExponential()
    //        :- toExponential(fractionDigits)

    {
        let number=250000

        let expo1=number.toExponential(1)
        console.log(expo1);
    }
