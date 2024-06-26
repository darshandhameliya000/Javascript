
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

    {
        let str= "this is a Dog and dog are very cute and this is cat but cat are danger"

        console.log(str);

        let regex1= /dog/i
        let regex2= /dog/g

        let replace = str.replace(regex2, 'cat')

        console.log(replace);
    }
