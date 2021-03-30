function SquareRoot(numbers){
    let squarNambers=[];
    for(i=0;i<numbers.length;i++){
        let squar=Math.sqrt(numbers[i]);
        squarNambers.push(squar);
    }
    return squarNambers;
}
let numbers=['4','16','36'];
console.log(SquareRoot(numbers))