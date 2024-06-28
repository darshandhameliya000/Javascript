
/* main-includes string String.includes() method */

//user search kre te string avaliable che ke ny te check kre

// Definatioin :- The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

// Syntax :- includes(searchString)
//        :- includes(searchString, position)

// {
//     let  str= "this is a include method"
//     //         012345678901234567890123

//     let include1=str.includes('include')
//     let include2=str.includes('is',6)

//     console.log(include1);
//     console.log(include2);
// }


/* main-replace string String.replace() method */

// Defination :- The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

// Syntax :- replace(pattern, replacement)

// {
//     let str= "this is a Dog and dog are very cute and this is cat but Dog cat are danger"

//     console.log(str);

//     let regex1= /dog/i    //uppercase
//     let regex2= /dog/g    //lowercase

//     let replace = str.replace(regex2, 'cat')

//     console.log(replace);
// }

/* main-replaceAll string String.replaceAll() method */

//Defination :- The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

// Syntax :- replaceAll(pattern, replacement)

// {
//     let str =  "this is a Dog and dog are very cute and this is cat but Dog cat are danger"

//     console.log(str);

//     let replaceAll=str.replaceAll('Dog','cat')

//     console.log(replaceAll);

// }

/* main-touppercase string string.toupperase() method */

//Definatin :- The toUpperCase() method of String values returns this string converted to uppercase.

//Syntax :- toUpperCase()

// {
//     let str = "this is touppercase method"

//     let touppercase = str.toUpperCase()

//     console.log(touppercase);
// }

/* main-tolowercase string string.tolowercase() method */

//Definatin :- The tolowercase() method of String values returns this string converted to lowercase.

//Syntax :- tolowercase()

// {
//     let str = "This is Tolowercase Method"

//     let tolowercase = str.toLowerCase()

//     console.log(tolowercase);
// }

/* main-repeat string string.repeat() method */

//Defination :- The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

//Syntax :- repeat(count)

// {
//     let str = "repeat method "

//     let repeat = str.repeat(5)

//     console.log(repeat);
// }

/* main-search string string.search() method */

//Description :- The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.

//Syntax :- search(regexp)

// {
//     let str="this is search method"

//     let regex = /search/g

//     let search=str[str.search(regex)]

//     console.log(search);
// }

/* main-match-matchAll string string.match() /string.matchAll() method */

//Defination match():- The match() method of String values retrieves the result of matching this string against a regular expression.
    
//Defination matchAll():- The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.

//Syntax match() :- match(regexp)
//Syntax matchAll():- matchAll(regexp)

// {
//     let str1 = "This is Match Method"

//     let regex = /[A-Z]/g

//     let match = str1.match(regex)

//     console.log(match);

//     let str2 = "This Is matchAll method"

//     let matchAll = [...str2.matchAll(regex)]

//     console.log(matchAll);

// }

{
    let str="this is string"

    let str2=[...str]

    console.log(str2);
}   