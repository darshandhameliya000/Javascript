/* Javascript math method */

/* 

PI
sign
cos
sin
floor
abs
trunc
min
max
ceil
round
log
log2
log10
pow
random
sqrt

*/

{
  let math1 = Math.PI;

  console.log(math1);
}
{
  let math1 = Math.sign(-0);

  console.log(math1);
}
{
  // abgleofRadians = anglr*3.14/180
  let math3 = Math.sin((90 * 3.14) / 180);
  let math4 = Math.sin((0 * 3.14) / 180);
  let math5 = Math.sin((30 * 3.14) / 180);

  console.log(math3);
  console.log(math4);
  console.log(math5);
}

{
  // abgleofRadians = anglr*3.14/180
  let math3 = Math.cos((90 * 3.14) / 180);
  let math4 = Math.cos((0 * 3.14) / 180);
  let math5 = Math.cos((30 * 3.14) / 180);

  console.log(math3);
  console.log(math4);
  console.log(math5);
}

{
  let math1 = Math.floor(12.9);
  console.log(math1);
}

{
  let math1 = Math.ceil(12.1);
  console.log(math1);
}

{
  let math1 = Math.round(12.5);
  console.log(math1);
}

{
  let math1 = Math.round(Math.random() * 10000);
  console.log(math1);
}

{
    let math1=Math.max(10,65,52,46,80)
    let math2=Math.min(10,65,52,46,80)

    console.log(math1);
    console.log(math2);
}

{
    let math1=Math.trunc(25.652431)
    console.log(math1);
}

{
    let math1=Math.abs(-0)
    console.log(math1);
}

{
    let math1=Math.sqrt(1024)
    console.log(math1);
}

{
    let math1=Math.pow(5,5)
    console.log(math1);
}

{
    let math1=Math.log(10)
    let math2=Math.log2(10)
    let math3=Math.log10(10)

    console.log(math1);
    console.log(math2);
    console.log(math3);
}
