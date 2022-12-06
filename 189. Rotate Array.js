const rev = (nums,start,end) =>{
     while(start < end){
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
 }
 }
const rotate = function (nums, k) {
    let n = nums.length;
    k %= n;

    rev(nums,0, n-1);
    rev(nums, 0, k - 1);
    rev(nums, k, n - 1);
};
