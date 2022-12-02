import * as fs from 'fs';

export function getLines(path:string, cb:(lines:string[])=>void){
    fs.readFile(path, { encoding: "utf8" }, (error, data) => {
        var lines = data.split('\n');
        cb(lines);
    });
}