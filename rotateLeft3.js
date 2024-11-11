function rotateLeft3(nums) {
    let rotatedArray = nums.slice()
    let first = rotatedArray.shift()
    rotatedArray.push(first)
    return rotatedArray
}