var twoSum = function (nums, target) {
  (val1 = -1), (val2 = -1);
  for (index = 0; index < nums.length - 1; index++) {
    for (subindex = index + 1; subindex < nums.length; subindex++) {
      if (nums[index] + nums[subindex] == target) {
        val1 = index;
        val2 = subindex;
        break;
      }
    }
  }
  return [val1, val2];
};
