function MinMax(arr){
    let max=0;
    let min ;
    for (let i=0;i<arr.length;i++){
        if(arr[i]> max){
            max=arr[i];
        }else{
            min=arr[i];
        }
    }
    return[max ,min];
}
let array=[ 4,5,9,2,44]
alert(MinMax(array));