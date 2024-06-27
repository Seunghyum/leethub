function nextPermutation(nums) {
    let i = nums.length - 2;
    
    // 1. 배열을 뒤에서부터 탐색하면서 첫 번째로 감소하는 숫자를 찾습니다.
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    // 2. 그 숫자보다 큰 숫자 중에서 가장 작은 숫자를 찾습니다.
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        // 3. 두 숫자를 교환합니다.
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    // 4. 첫 번째 감소 지점 이후의 숫자들을 오름차순으로 정렬합니다.
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}