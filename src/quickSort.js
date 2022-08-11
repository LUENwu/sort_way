let quickSort = numbers => {
    if(numbers.length<=1){return numbers}
    let pivotIndex = Math.floor(numbers.length/2)
    let pivot = numbers.splice(pivotIndex,1)[0]
    let left = [],right=[]
    for(let i = 0;i<numbers.length;i++){
       if(numbers[i]<pivot){
          left.push(numbers[i])
       }else{
        right.push(numbers[i])
       }
    }
    return sort(left).concat([pivot],sort(right))
}
let b = [2,12,13,-7,11,5,3]
