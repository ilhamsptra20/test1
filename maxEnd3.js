function maxEnd3(nums) {
    let max = nums[0] > nums[2] ? nums[0] : nums[2]

    nums[0] = max
    nums[1] = max
    nums[2] = max

    return nums
}