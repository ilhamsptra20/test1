function makeLast(nums) {
    let i = 0
    let newNums = []
    let last = nums.slice(nums.length - 1)
    let double = nums.length * 2
  
    while (i < double - 1) {
        newNums.push(0)
        i++
    }
  
    newNums.push(last[0])
    return newNums
}