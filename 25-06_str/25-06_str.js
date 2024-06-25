/* String Method ( Prototypes ) */

/* main-pad String String.padEnd() / string.padstart() method :- 

 Defination padstart() :- The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.

 Defination padEnd() :- The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string. 
 
 Syntax padstart() :- padStart(targetLength)
           padStart(targetLength, padString)
 Syntax padEnd()  :- padEnd(targetLength)
           padEnd(targetLength, padString)

 */

{
    // let str='this is padstart method!'
    // console.log(str.length) length find krva mate;

    // let string1=str.padStart(35,'10')
    // let string2=str.padEnd(35,'0')

    // console.log(string1);
    // console.log(string2);

    // console.log(string1.length) length find krva mate;
}

/* main-trim String String.trim() Method means remover space :-
    1] string.trimStart() 2] string.trimEnd() method :- */

// trim()
// trimstart()✅
// trimEnd()✅
// trimRight()
// trimLeft()

// Defination :- The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

// To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

// Syntax :- trim() 


// {
//     let str = "  this is a trim method  "

//     let trim = str.trim()
//     console.log(trim);

//     let trimstart=str.trimStart()
//     console.log(trimstart);

//     let trimend=str.trimEnd()
//     console.log(trimend);
// }

/* main-at String String.at() Method string return kre */

    // Defination :- The at() method of String values takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.

    // Syntax:- at(index)
    //       :- at(-index)


// {
//     let str = "this is string at method"
//     let at=str.at(-5)
//     // let at=str.at(-5) output:-e
//     console.log(at);
// }

/* main-charAt String String.charAt() Method */

     // Defination :- The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.

    //  charAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. To get the full Unicode code point at the given index, use String.prototype.codePointAt() and String.fromCodePoint().

    // Syntax:- charAt(index)

    {

        let str = "this is string charAt method"
        let charAt=str.charAt(10)
        console.log(charAt);

    }
