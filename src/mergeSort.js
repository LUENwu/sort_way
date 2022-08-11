// 归并排序算法实现排序的思路是：
// 将整个待排序序列划分成多个不可再分的子序列，每个子序列中仅有 1 个元素；
// 所有的子序列进行两两合并，合并过程中完成排序操作，最终合并得到的新序列就是有序序列。


// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变,提取起始处的索引（从 0 开始），从该索引开始提取原数组元素.返回值,一个含有被提取元素的新数组
let c = [2,12,13,-7,11,5,3]


let mergeSort = arr => {
    let k = arr.length
    if(k <= 1){return arr}
    let left =arr.slice(0,Math.floor(k/2))
    let right = arr.slice(Math.floor(k/2))
    console.log(`left:${left}`)
    console.log(`right:${right}`)
    return merge(mergeSort(left),mergeSort(right))
}
let merge = (a,b) => {
  console.log(`a:${a},b:${b}`)
    if(a.length === 0){return b}
    if(b.length === 0){return a}
    return a[0]>b[0]?[b[0]].concat(merge(a,b.slice(1))):[a[0]].concat(merge(a.slice(1),b))
}
