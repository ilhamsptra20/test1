function double23(nums) {
    if (nums.length < 2) return false
    else if ((nums[0] == 2 && nums[1] == 2) || (nums[0] == 3 && nums[1] == 3)) return true
    return false
}