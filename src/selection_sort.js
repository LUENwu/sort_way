let a = [2,12,13,-7,11,5,3]


//选择排序 -- 循环
//求最小值下标
let  minIndex = arr =>{
  let index = 0
  for(let i =1 ;i<arr.length;i++){
    if(arr[i]<arr[index]){
      index=i
    }
  }
  return index
}

//递归--求最小值 -- 递归特点,函数不断调用自己,每次调用的参数略有不同,当满足某个简单条件时,则实现一个简单的调用,得到一个返回值,最终算出结果.

let min = arr => {
  if(arr.length <= 1){return arr}
  if(arr.length > 2){
    console.log(arr[0])
    return min([arr[0],min(arr.slice(1))])
  }else{
    console.log(` _____`)
    console.log(arr)
    let result = Math.min.apply(null,arr)
    console.log(result)
    return result
  }
}


//sort 排序 将数组从小到大排列 --递归方式
let sort = arr =>{
    if(arr.length<=1){return arr}
    let k =arr.length
    if( k > 2){
      let index = minIndex(arr)
      let min = arr[index]
      arr.splice(index,1)
      return [min].concat(sort(arr))
  }else{
    return arr[0]>arr[1]?arr.reverse():arr
  }
}



//sort 排序 将数组由小到大排列 -- 循环方式

let swap =(arr,index,i)=>{
  let temp = arr[index]
  arr[index]= arr[i]
  arr[i]=temp
}

let sort2 = arr => {
  for(let i = 0;i<arr.length;i++){
    console.log(`_____`)
    let index = minIndex(arr.slice(i))+i
    console.log(`i:${i}`)
    console.log(`index:${index}`)
    console.log(`min:${arr[index]}`)
    console.log(`_____`)
    if(index!==i){swap(arr,index,i)}
  }
  return arr
}
sort2(a)



