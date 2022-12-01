import { getLines } from "../shared/util";
getLines('./input.txt',(lines) =>{
    var totals:number[] = [];
    var sum:number = 0;
    lines.forEach(element => {
        if(parseInt(element)){
            sum += parseInt(element);
        }
        else
        {
            totals.push(sum);
            sum = 0;
        }
    });
    totals.sort((a, b) => b - a);
    console.log(totals.slice(0,3))
    console.log(totals.slice(0,3).reduce((a, b) => a + b, 0));
});