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

    // let str = "this is string charAt method"
    //            0123456789012345678901234567 
    // let charAt=str.charAt(10)
    // console.log(charAt);
    // let charcodeAt=str.charCodeAt(17)
    // console.log(charcodeAt);

}

/* main-startswith-endswith String String.endswith() / String.startswith() Method starting kyathi chalu thay and end kyathi puru thay */

/* Defination String.startswith() :- The startwith() method of string valued determines whether this string begins with the characters of a specified string, returning true apptopriate. */

/* Defination String.endswith() :- The endwith() method of string valued determines whether a string end with the characters of a this string, returning true or flase as apptopriate. */

//    Syntax :- startswith(searchstring)
//              startswith(searchstring,position)


// {
//     let str = 'this is string start with method This!'

//     let startswith1 = str.startsWith("t")
//     let startswith2 = str.startsWith('This!',)
//     console.log(startswith1);
//     console.log(startswith2);

//     let endswith1 = str.endsWith("!")
//     let endswith2 = str.endsWith("is",4)
//     console.log(endswith1);
//     console.log(endswith2);
// }


/* main-slice-substring String String.slice() / String.substring() Method */

// Defination slice() :- The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

// Defination substring() :- The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

// Syntax slice() :- slice(indexStart)
//                :- slice(indexStart, indexEnd).

// Syntax substring():- substring(indexStart)
//                   :- substring(indexStart, indexEnd)


// {
//     let str = "this is slice method"
//     let str1 = "this is substring method"

//     let slice = str.slice(0)
//     let slice1 = str.slice(0, 10) // negative and positive both accept kre

//     let sub = str1.substring(0)
//     let sub1 = str1.substring(5,-10) //negative accept no kre

//     console.log(slice);
//     console.log(slice1);

//     console.log(sub);
//     console.log(sub1);
// }

/* main-indexof-lastindexof String String.indexof() / String.lastindexof() Method */

    // Defination indexOf() :- The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

    // Defination lastindexOf() :- The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.



    // Syntax IndexOf:- IndexOf(searchString)
    //               :- IndexOf(searchString, position)
    
    // Syntax lastIndexOf():- lastIndexOf(searchString)
    //                     :- lastIndexOf(searchString, position)
    
    // {
    //     let str="this is indexof method this this"
    //           // 01234567890123456789012345678901

    //     let indexof=str.indexOf('this',24) // attla number pachi te string che ke ny te check kre
    //     console.log(indexof)

    //     let lastIndexOf=str.lastIndexOf('this',27) // attla number pela te string che ke ny te check kre ( negative not accept)
    //     console.log(lastIndexOf);
    // }


