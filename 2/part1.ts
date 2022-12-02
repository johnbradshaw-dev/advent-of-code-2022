// A for Rock, 
// B for Paper,
// C for Scissors

// X for Rock, 
// Y for Paper,
// Z for Scissors

// 0 if you lost, 
// 3 if the round was a draw, and 
// 6 if you won

import { getLines } from "../shared/util";
getLines('./input.txt',(lines) =>{
    var score = 0;
    lines.forEach(line => {
        var [strp1, strp2] = line.split(' ');
        var p1 = parse(strp1);
        var p2 = parse(strp2);
        if(p1 == p2){
            score += 3 + p2
        }
        else if((p1 == 1 && p2 == 2) || (p1 == 2 && p2 == 3) || (p1 == 3 && p2 == 1))
        {
            score += 6 + p2
        }
        else
        {
            score += p2
        }
    });
    console.log(score);
});

function parse(letter:string){
    switch (letter) {
        case 'A':
        case 'X':
            return 1;
        case 'B':
        case 'Y':
            return 2;
        case 'C':
        case 'Z':
            return 3;
        default:
            return 0;
    }
}