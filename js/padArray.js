// REMEMBER TO PSEUDOCODE
const pad = (array, minSize, value) => {
    let difference = minSize - array.length
    if(minSize - array.length > 0){
        while(minSize - array.length > 0){
            addPadding(array, value)
            difference--;
        }
    } else if(minSize - array.length <= 0){
        return array
    }
    return array
}

function addPadding(arr, val){
    arr.push(val)
}



console.log(pad([1,2,3], 5))
console.log(pad([1,2,3,4,5], 12, 'apple'))
console.log(pad([1,2,3], 3))
console.log(pad([1,2,3], 0))