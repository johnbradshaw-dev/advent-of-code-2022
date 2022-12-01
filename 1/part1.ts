import { getLines } from "../shared/util";
getLines('./input.txt',(lines) =>{
    var sum = 0;
    var totals:number[] = [];
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
    console.log(Math.max(...totals));
});