//计数排序的特点 
// 使用了额外的hashTable 只遍历数组一遍(不过还要遍历一次hashTable)
// 这叫做[空间换时间]

let d = [2,12,13,-7,11,5,3]

let countSort = arr => {
    let hashTable = {},result = [],max =0
    for(let i = 0;i<arr.length;i++){
        if(arr[i] in hashTable){
          hashTable[arr[i]] += 1
        }else{
          hashTable[arr[i]] = 1
        }
    if(arr[i] > max){max = arr[i]}    
    }
    console.log(hashTable)
    for(let j = -10000000; j <= max;j++){
      if(j in hashTable){
       for(let i = 0;i < hashTable[j];i++){
           result.push(j) 
      }
    }
}
return result
}
console.log(countSort(d))