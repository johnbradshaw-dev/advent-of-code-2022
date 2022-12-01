import { getLines } from "../shared/util";
getLines('./input.txt',(lines) =>{
    lines.forEach(line => {
        console.log(line);
    });
});