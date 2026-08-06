//
let varA = 'A';
let varB = 'B';
let varC = 'C';

const varAtemp = varA;

varA = varB; // B
varB = varC; // C
varC = varAtemp; //A



console.log(varA, varB, varAtemp);

//

let variA = 'A';
let variB = 'B';
let variC = 'C';

const variD = 'A'

variA = variB;
variB = variC;
variC = variA;


console.log(variA, variB, variD);

//

let verA = 'A';
let verB = 'B';
let verC = 'C';

[verA, verB, verC] = [verB, verC ,verA];

console.log(verA, verB, verC);