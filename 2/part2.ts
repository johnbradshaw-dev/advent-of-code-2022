// A for Rock, 
// B for Paper,
// C for Scissors

// X means you need to lose, 
// Y means you need to end the round in a draw, 
// Z means you need to win

// 0 if you lost, 
// 3 if the round was a draw, and 
// 6 if you won

import { getLines } from "../shared/util";
getLines('./input.txt',(lines) =>{
    var score = 0;
    lines.forEach(line => {
        var [strp1, strp2] = line.split(' ');
        var p1 = parse(strp1);
        var p2 = 0;
        var table:{[key:string]:{w:string, l:string, d:string}} = {
            'A': { w: 'Y', l: 'Z', d: 'X'},
            'B': { w: 'Z', l: 'X', d: 'Y'},
            'C': { w: 'X', l: 'Y', d: 'Z'}
        }

        if(strp2 == 'X')
        {
            p2 = parse(table[strp1].l)
        }
        else if(strp2 == 'Y')
        {
            p2 = parse(table[strp1].d)
        }
        else
        {
            p2 = parse(table[strp1].w)
        }
        
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