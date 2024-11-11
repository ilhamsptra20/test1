function sameFirstLast(nums) {
    let end = nums.length - 1
    if (nums.length >= 1) return nums[0] == nums[end]
    else return false
}