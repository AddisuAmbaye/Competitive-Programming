var moveZeroes = function(nums) {
   let preIdx = 0;
let n = nums.length;
for(i=0; i< n; i++){
   if(nums[i] != 0){
          temp = nums[i];
          nums[i] = nums[preIdx];
          nums[preIdx] = temp;
           preIdx++;
     }
}      
  
};
