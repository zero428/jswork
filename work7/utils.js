<<<<<<< HEAD
function bubbleSort(str) {
    let arr = str.split(',')
    for (let i = 0; i <arr.length -1; i++) {
    for (let j = 0; j <arr.length -i -1; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
}
    return arr

}

function insertSort(str) {
    let arr = str.split(',')
    for (let i = 1; i < arr.length;i++) {
        for (let j = i; j> 0; j--) {
            if (arr[j - 1] >arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j],arr[j - 1]]
            }
=======
function bubbleSort(str){
    let arr = str.split(',')
    for(let i = 0;i<arr.length - 1; i++){
        for(let j=0; j<arr.length- i - 1;j++){

            if( arr [ j ] > arr [ j + 1 ] ){
                [arr [ j ],arr [ j + 1 ] ] = [ arr [ j + 1 ], arr [ j ] ]
            }
        }
    }
    return arr
}
function insertSort(str){
    let arr = str.split(',')
    for(let i = 1; i<arr.length ; i++){
        for (let j = i; j>0; j--){
                if(arr[j-1]>arr[j]){
                    [arr[j-1],arr[j] ]= [arr[j],arr[j-1 ] ]
                }
>>>>>>> 799447371f88073cdd8481716ab182fbac117951
        }
    }
    return arr
}