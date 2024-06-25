/* 

{
    Datatypes :- 1] premitive (Immutable) 2] non-premitive (Mutable)

        1] premitive Datatype ( Immutable )
        --> String 
            Number
            Boolean
            BigInt
            Null
            Undefined
            Symbol

        2] Non-premitive Datatye ( Mutable )
        --> Array 
            Object
}

*/


// {
//     var greek = 'Skillqode'

//     console.log(greek);
//     console.warn(greek);
//     document.write(greek);
//     alert(greek);
// }

// {
//     String method Rules :- ' ' (Single qoute) , " " (Double qoute) , ` (Tilde)

        var name = "darshan"
        var str1= 'this is \'str1\' "method" ${name}'
        var str2= "this is \"str2\" 'method' ${name}"
        var str3= `'this' is str3 "method" ${name}`

        console.log(str1);
        console.log(str2);
        console.log(str3);

        
// }

/* String Method ( Prototypes ) */

/* String String.concat() method :-

    Definaiton :- The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

    Syntax :- concat()
              concat(value1)
              concat(value1, value2)
              concat(value1, value2, valueN)

*/
{
    let str1="this is str1"
    let str2="this is str2"
    let str3="this is str3"

    let merge=str3.concat(str2,str1)
    console.log(merge);
}



